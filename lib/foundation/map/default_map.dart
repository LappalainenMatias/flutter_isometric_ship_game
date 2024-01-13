import 'dart:math';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/game_specific/terrain/concurrent_terrain_creation.dart';
import 'package:anki/game_specific/terrain/terrain_creation_rules.dart';

import '../../foundation/map/map.dart';
import '../../game_specific/dynamic_game_object_manager.dart';
import '../../game_specific/region/region_creation_queue.dart';
import '../camera/camera.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/default_region.dart';
import '../region/region.dart';
import '../region/visible_regions_handler.dart';

class DefaultGameMap extends GameMap {
  late DynamicGameObjectManager _dynamicGameObjectManager;
  final Map<Point<int>, Region> _regions = {};
  final _concurrentTerrainCreator = ConcurrentTerrainCreator();
  final _terrainCreationRules = DefaultTerrainCreationRules();
  late final RegionTerrainCreationQueue _regionTerrainCreationQueue;
  late final VisibleRegionsHandler _visibleRegions;

  DefaultGameMap(Camera camera) {
    _regionTerrainCreationQueue = DefaultRegionTerrainCreationQueue(camera);
    _visibleRegions = DefaultVisibleRegionsHandler(camera, this);
    _dynamicGameObjectManager = DynamicGameObjectManager(this, camera);
  }

  /// Finds the region the isoCoordinate is part of. If the region does not exist,
  /// we will return empty region and add the region into the region creation queue.
  @override
  Region getRegion(IsoCoordinate isoCoordinate) {
    if (_tooManyRegionsExist()) {
      _removeFarawayRegions(isoCoordinate);
    }

    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);
    isoCoordinate = regionPointToIsoCoordinate(point);
    point = isoCoordinateToRegionPoint(isoCoordinate);
    if (!_regions.containsKey(point)) {
      _regions[point] = DefaultRegion.empty(isoCoordinate);
    }
    if (_regions[point]!.isEmpty()) {
      _regionTerrainCreationQueue.add(_regions[point]!);
    }

    return _regions[point]!;
  }

  bool _tooManyRegionsExist() {
    return getRegionCount() > 1000;

    /// todo
  }

  void _removeFarawayRegions(IsoCoordinate coordinate) {
    /// Todo
  }

  int getRegionCount() {
    return _regions.length;
  }

  @override
  void update(double dt) {
    _dynamicGameObjectManager.update(dt);
    _visibleRegions.update(dt);
    _createTerrain();
  }

  void _createTerrain() {
    if (_concurrentTerrainCreator.isAvailable()) {
      var region = _regionTerrainCreationQueue.next();
      if (region != null) {
        _concurrentTerrainCreator.addTerrain(region);
      }
    }
  }

  int regionQueueSize() {
    return _regionTerrainCreationQueue.size();
  }

  List<Region> getVisibleRegionsInDrawingOrder() {
    return _visibleRegions.getVisibleRegionsInDrawingOrder();
  }

  int getVisibleRegionsSize() {
    return _visibleRegions.visibleRegionSize();
  }

  @override
  void addGameObject(GameObject gameObject) {
    if (gameObject is DynamicGameObject) {
      _dynamicGameObjectManager.addDynamicGameObject(gameObject);
    } else {
      throw Exception("Only dynamic game objects are supported at the moment");

      /// Todo implement. Take into account what happens when the region terrain gets created after the game object is added into the region. Does it remove it?
    }
  }

  @override
  void removeGameObject(GameObject gameObject) {
    throw Exception("implement removeGameObject");
  }

  @override
  bool move(DynamicGameObject dynamicGameObject, IsoCoordinate nextCoordinate) {
    if (_dynamicGameObjectManager.isAbleToMove(
        dynamicGameObject, nextCoordinate)) {
      dynamicGameObject.setIsoCoordinate(nextCoordinate);
      return true;
    }
    return false;
  }
}
