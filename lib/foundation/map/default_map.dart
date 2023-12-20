import 'dart:math';
import 'package:anki/foundation/game_object/game_object.dart';

import '../../foundation/map/map.dart';
import '../../game_specific/region/region_creation/concurrent_region_creator.dart';
import '../../game_specific/region/region_creation_queue.dart';
import '../camera/camera.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/default_region.dart';
import '../region/region.dart';
import '../region/visible_regions_handler.dart';


class DefaultGameMap extends GameMap{
  final Map<Point<int>, Region> _regions = {};
  final _concurrentRegionCreator = ConcurrentRegionCreator();
  late final RegionCreationQueue _regionCreationQueue;
  late final VisibleRegionsHandler _visibleRegions;

  DefaultGameMap(Camera camera) {
    _regionCreationQueue = RegionCreationQueueImpl(camera);
    _visibleRegions = VisibleRegionsHandlerImpl(camera, this);
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
      _regionCreationQueue.add(AddGameObjectsTo(isoCoordinate));
    }

    return _regions[point]!;
  }

  bool _tooManyRegionsExist() {
    return getRegionCount() > 1000; /// todo
  }

  void _removeFarawayRegions(IsoCoordinate coordinate) {
    /// Todo
  }

  int getRegionCount() {
    return _regions.length;
  }

  void update() {
    _visibleRegions.update();
    _addGameObjectsToRegion();
  }

  void _addGameObjectsToRegion() {
    if (_concurrentRegionCreator.isAvailable()) {
      AddGameObjectsTo? next = _regionCreationQueue.next();
      if (next != null) {
        var region = getRegion(next.regionCoordinate);
        _concurrentRegionCreator.addGameObjects(region);
      }
    }
  }

  String regionQueueStats() {
    return _regionCreationQueue.toString();
  }

  List<Region> getVisibleRegionsInDrawingOrder() {
    return _visibleRegions.getVisibleRegionsInDrawingOrder();
  }

  int getVisibleRegionsSize() {
    return _visibleRegions.visibleRegionSize();
  }

  @override
  void addRegion(Region region) {
    // TODO: implement addRegion
  }

  @override
  void updateGameMap(double dt) {
    // TODO: implement updateGameMap
  }

  @override
  void addGameObject(GameObject gameObject) {
    // TODO: implement addGameObject
  }

  @override
  void removeGameObject(GameObject gameObject) {
    // TODO: implement removeGameObject
  }
}
