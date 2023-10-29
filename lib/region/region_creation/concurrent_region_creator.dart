import 'dart:io';
import 'package:anki/region/region_creation/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import '../../../constants.dart';
import '../../../coordinates/coordinate_utils.dart';
import '../../../game_objects/game_object.dart';
import '../region.dart';
import 'dart:math';

class ConcurrentRegionCreator {
  int _runningCount = 0;
  final RegionCreator _regionCreator = RegionCreator();
  late final int maxNumberOfIsolates;

  ConcurrentRegionCreator() {
    if (kIsWeb) {
      maxNumberOfIsolates = 1;
    } else {
      maxNumberOfIsolates = max(Platform.numberOfProcessors - 2, 2);
    }
  }

  void addGameObjects(Region region) {
    _runningCount++;
    if (kIsWeb) {
      // Web does not support isolate, so we use a web worker instead.
      _webAddGameObjects(region);
    } else {
      _otherPlatformsAddGameObjects(region);
    }
  }

  void _webAddGameObjects(Region region) async {
    var regionCoordinate = isoCoordinateToRegionPoint(region.bottomCoordinate);

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
    List<StaticGameObject> staticGameObjects = [];
    for (List encoded in result) {
      staticGameObjects
          .add(GameObject.gameObjectFromList(encoded) as StaticGameObject);
    }
    region.changeStaticGameObjects(staticGameObjects);
    _runningCount--;
  }

  void _otherPlatformsAddGameObjects(Region region) async {
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.bottomCoordinate);

    final args = {
      'x': regionCoordinate.x,
      'y': regionCoordinate.y,
      'regionSideWidth': regionSideWidth,
    };

    final gameObjects = await compute(_createGameObjects, args);
    region.changeStaticGameObjects(gameObjects);
    _runningCount--;
  }

  List<StaticGameObject> _createGameObjects(Map args) {
    Point<int> regionCoordinate = Point(args['x'], args['y']);
    var gameObjects = _regionCreator.create(
      args['regionSideWidth'],
      args['regionSideWidth'],
      (regionCoordinate.x * args['regionSideWidth']).toInt(),
      (regionCoordinate.y * args['regionSideWidth']).toInt(),
    );
    return gameObjects;
  }

  /// Returns true if there are not too many concurrent operatations running
  bool isAvailable() {
    return _runningCount < maxNumberOfIsolates;
  }
}
