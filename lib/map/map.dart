import 'dart:math';
import '../constants.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/region.dart';
import '../region/region_creation_queue.dart';

class GameMap {
  final Map<Point<int>, Region> _regions = {};
  final RegionCreationQueue _regionCreationQueue;

  GameMap(this._regionCreationQueue);

  /// Finds the region the isoCoordinate is part of. If the region does not exist,
  /// we will return empty region and add the region into the region creation queue.
  Region getRegion(IsoCoordinate isoCoordinate) {
    if (_tooManyRegionsExist()) {
      _removeFarawayRegions(isoCoordinate);
    }

    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);
    isoCoordinate = regionPointToIsoCoordinate(point);
    point = isoCoordinateToRegionPoint(isoCoordinate);
    if (!_regions.containsKey(point)) {
      /// Todo I think we should also add regions which are empty to the queue
      /// It not problem now because we are not clearing the regions
      _regions[point] = Region.empty(isoCoordinate);
      if (!_tooManyRegionsExist()) {
        _regionCreationQueue.add(AddGameObjectsTo(isoCoordinate));
      }
    }

    return _regions[point]!;
  }

  bool _tooManyRegionsExist() {
    return getRegionCount() > maxRegionCount;
  }

  void _removeFarawayRegions(IsoCoordinate coordinate) {
    /// Todo
  }

  int getRegionCount() {
    return _regions.length;
  }
}
