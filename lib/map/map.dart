import 'dart:math';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_creation_queue.dart';
import '../camera/level_of_detail.dart';
import '../constants.dart';
import '../coordinates/coordinate_utils.dart';
import '../coordinates/iso_coordinate.dart';

class GameMap {
  final List<Map<Point<int>, Region>> _regionsBylod = List.generate(
      LevelOfDetail.values.length, (index) => {},
      growable: false);
  final RegionCreationQueue _regionCreationQueue;

  GameMap(this._regionCreationQueue);

  /// Finds the region the isoCoordinate is part of. If the region does not exist,
  /// we will return empty region and add the region into the region creation queue.
  Region getRegion(IsoCoordinate isoCoordinate, LevelOfDetail lod) {
    if (_tooManyRegionsExist()) {
      _removeFarawayRegions(isoCoordinate, lod);
    }

    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);
    isoCoordinate = regionPointToIsoCoordinate(point, lod);
    point = isoCoordinateToRegionPoint(isoCoordinate);
    if (!_regionsBylod[lod.index].containsKey(point)) {
      /// Todo I think we should also add regions which are empty to the queue
      /// It not problem now because we are not clearing the regions
      _regionsBylod[lod.index][point] = Region.empty(isoCoordinate, lod);
      if (!_tooManyRegionsExist()) {
        _regionCreationQueue.add(AddGameObjectsTo(lod, isoCoordinate));
      }
    }

    return _regionsBylod[lod.index][point]!;
  }

  bool _tooManyRegionsExist() {
    int amountOfRegions = 0;
    for (var map in _regionsBylod) {
      amountOfRegions += map.length;
    }
    return amountOfRegions > maxRegionCount;
  }

  void _removeFarawayRegions(IsoCoordinate coordinate, LevelOfDetail lod) {
    /// Todo
  }

  int getRegionCount() {
    int count = 0;
    for (var map in _regionsBylod) {
      count += map.length;
    }
    return count;
  }
}
