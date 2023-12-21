import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import '../../constants.dart';
import '../../foundation/game_object/game_object.dart';
import '../../foundation/region/default_region.dart';
import '../../foundation/region/region.dart';
import '../game_object/tile.dart';
import 'dart:math';

import 'terrain_creator.dart';

class ConcurrentTerrainCreator {
  int _runningCount = 0;
  final TerrainCreator _regionCreator = TerrainCreator();
  late final int _maxNumberOfIsolates;

  ConcurrentTerrainCreator() {
    if (kIsWeb) {
      _maxNumberOfIsolates = 1;
    } else {
      _maxNumberOfIsolates = max(Platform.numberOfProcessors - 2, 2);
    }
  }

  void addGameObjects(Region region) {
    _runningCount++;
    if (kIsWeb) {
      // Web does not support isolates, so we use a web worker instead.
      _webAddTerrain(region);
    } else {
      _otherPlatformsAddTerrain(region);
    }
  }

  void _webAddTerrain(Region region) async {
    /// The noise creation library does not use isometric coordinates.
    var regionCoordinate = region.getBottomCoordinate().toPoint();

    /// This part is concurrent
    var result = await JsIsolatedWorker().run(
      functionName: 'jsregionworker',
      arguments: [
        regionSideWidth,
        regionSideWidth,
        regionCoordinate.x,
        regionCoordinate.y,
      ],
    );

    /// This part is not concurrent and it encodes the result, because we cannot
    /// return a list of GameObjects from the web worker.
    List<StaticGameObject> staticGameObjects = [];
    for (List encoded in result) {
      staticGameObjects.add(Tile.fromList(encoded));
    }
    (region as DefaultRegion).changeStaticGameObjects(staticGameObjects);
    _runningCount--;
  }

  void _otherPlatformsAddTerrain(Region region) async {
    /// The noise creation library does not use isometric coordinates.
    var isoCoordinate = region.getBottomCoordinate();
    var point = Point(isoCoordinate.isoX.toInt(), isoCoordinate.isoY.toInt());

    final args = {
      'x': point.x.toInt(),
      'y': point.y.toInt(),
      'regionSideWidth': regionSideWidth,
    };

    final gameObjects = await compute(_createGameObjects, args);
    (region as DefaultRegion).changeStaticGameObjects(gameObjects);
    _runningCount--;
  }

  List<StaticGameObject> _createGameObjects(Map args) {
    final point = Point<int>(args['x'], args['y']);
    print(
        'Creating new region: ${point.x * regionSideWidth} to ${(point.x + 1) * regionSideWidth} '
        'and ${point.y * regionSideWidth} to ${(point.y + 1) * regionSideWidth}');
    var gameObjects = _regionCreator.create(
      args['regionSideWidth'],
      args['regionSideWidth'],
      (point.x).toInt() * regionSideWidth,
      (point.y).toInt() * regionSideWidth,
    );
    return gameObjects;
  }

  /// Returns true if there are not too many concurrent operatations running
  bool isAvailable() {
    return _runningCount < _maxNumberOfIsolates;
  }
}
