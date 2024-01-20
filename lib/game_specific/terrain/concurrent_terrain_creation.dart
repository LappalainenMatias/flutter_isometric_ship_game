import 'dart:io';
import 'package:anki/game_specific/terrain/terrain_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import '../../../constants.dart';
import '../../../foundation/coordinates/coordinate_utils.dart';
import '../../../foundation/game_object/game_object.dart';
import '../../../foundation/region/default_region.dart';
import '../../../foundation/region/region.dart';
import 'dart:math';

import '../game_object/tile.dart';

class ConcurrentTerrainCreator {
  var _runningCount = 0;
  final _terrainCreator = TerrainCreator();
  late final int maxNumberOfIsolates;

  ConcurrentTerrainCreator() {
    if (kIsWeb) {
      maxNumberOfIsolates = 1;
    } else {
      maxNumberOfIsolates = max(Platform.numberOfProcessors - 2, 2);
    }
  }

  void addTerrain(Region region) {
    _runningCount++;
    if (kIsWeb) {
      // Web does not support isolate, so we use a web worker instead.
      _webAddGameObjects(region);
    } else {
      _otherPlatformsAddGameObjects(region);
    }
  }

  void _webAddGameObjects(Region region) async {
    var regionCoordinate =
        isoCoordinateToRegionPoint(region.getBottomCoordinate());

    /// This part is concurrent
    var result = await JsIsolatedWorker().run(
      functionName: 'jsregionworker',
      arguments: [
        regionSideWidth,
        regionSideWidth,
        regionCoordinate.x * regionSideWidth,
        regionCoordinate.y * regionSideWidth,
      ],
    );

    /// This part is not concurrent and encodes the result, because we cannot
    /// return a list of GameObjects from the web worker.
    List<StaticGameObject> staticUnderWater = [];
    List<StaticGameObject> staticAboveWater = [];
    for (List encoded in result) {
      var tile = Tile.fromList(encoded);
      if (tile.isUnderWater()) {
        staticUnderWater.add(tile);
      } else {
        staticAboveWater.add(tile);
      }
    }
    (region as DefaultRegion).changeStaticGameObjects(
      underWater: staticUnderWater,
      aboveWater: staticAboveWater,
    );
    _runningCount--;
  }

  void _otherPlatformsAddGameObjects(Region region) async {
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.getBottomCoordinate());

    final args = {
      'x': regionCoordinate.x,
      'y': regionCoordinate.y,
      'regionSideWidth': regionSideWidth,
    };

    final gameObjects = await compute(_createGameObjects, args);
    (region as DefaultRegion).changeStaticGameObjects(
      underWater: gameObjects.$1,
      aboveWater: gameObjects.$2,
    );
    _runningCount--;
  }

  (List<StaticGameObject> underWater, List<StaticGameObject> aboveWater)
      _createGameObjects(Map args) {
    Point<int> regionCoordinate = Point(args['x'], args['y']);
    var gameObjects = _terrainCreator.create(
      args['regionSideWidth'],
      args['regionSideWidth'],
      (regionCoordinate.x * args['regionSideWidth']).toInt(),
      (regionCoordinate.y * args['regionSideWidth']).toInt(),
    );
    var underWater =
        gameObjects.where((element) => element.isUnderWater()).toList();
    var aboveWater =
        gameObjects.where((element) => !element.isUnderWater()).toList();
    return (underWater, aboveWater);
  }

  /// Returns true if there are not too many concurrent operatations running
  bool isAvailable() {
    return _runningCount < maxNumberOfIsolates;
  }
}
