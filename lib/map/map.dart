import 'dart:math';
import '../camera/camera.dart';
import '../constants.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/region.dart';
import '../region/region_creation/concurrent_region_creator.dart';
import '../region/region_creation_queue.dart';
import '../region/visible_regions_handler.dart';

class GameMap {
  final Map<Point<int>, Region> regions = {};
  final _concurrentRegionCreator = ConcurrentRegionCreator();
  late final RegionCreationQueue _regionCreationQueue;
  late final VisibleRegionsHandler _visibleRegions;

  GameMap(Camera camera) {
    _regionCreationQueue = RegionCreationQueueImpl(camera);
    _visibleRegions = VisibleRegionsHandlerImpl(camera, this);
  }

  /// Finds the region the isoCoordinate is part of. If the region does not exist,
  /// we will return empty region and add the region into the region creation queue.
  Region getRegion(IsoCoordinate isoCoordinate) {
    if (_tooManyRegionsExist()) {
      _removeFarawayRegions(isoCoordinate);
    }

    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);
    isoCoordinate = regionPointToIsoCoordinate(point);
    point = isoCoordinateToRegionPoint(isoCoordinate);
    if (!regions.containsKey(point)) {
      regions[point] = Region.empty(isoCoordinate);
    }
    if (regions[point]!.isEmpty()) {
      _regionCreationQueue.add(AddGameObjectsTo(isoCoordinate));
    }

    return regions[point]!;
  }

  bool _tooManyRegionsExist() {
    return getRegionCount() > maxRegionCount;
  }

  void _removeFarawayRegions(IsoCoordinate coordinate) {
    /// Todo
  }

  int getRegionCount() {
    return regions.length;
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
}
