import 'package:anki/region/region_creation/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import 'dart:math';
import '../../../constants.dart';
import '../../../coordinates/coordinate_utils.dart';
import '../../../game_objects/game_object.dart';
import '../region.dart';

class ConcurrentRegionCreator {
  /// This is used because we do not want to pile up regions to be created.
  /// Regions are created concurrently but encoding the results are not.
  /// So it could cause lag.
  bool isRunning = false;
  final RegionCreator _regionCreator = RegionCreator();

  void addGameObjects(Region region) {
    isRunning = true;
    if (kIsWeb) {
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
    List<GameObject> gameObjects = [];
    for (List encoded in result) {
      gameObjects.add(GameObject.gameObjectFromList(encoded));
    }
    region.update(gameObjects);
    isRunning = false;
  }

  void _otherPlatformsAddGameObjects(Region region) {
    /// TODO Add concurrency support
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.bottomCoordinate);
    var gameObjects = _regionCreator.create(
      regionSideWidth,
      regionSideWidth,
      regionCoordinate.x * regionSideWidth,
      regionCoordinate.y * regionSideWidth,
    );

    region.update(gameObjects);
    isRunning = false;
  }
}
