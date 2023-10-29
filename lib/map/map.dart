import 'dart:math';
import '../constants.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/region.dart';
import '../region/region_creation_queue.dart';

class GameMap {
  final Map<Point<int>, Region> regions = {};
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
}
