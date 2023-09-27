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

  /// Always returns a region. If the region does not exist, we will return empty region
  /// and add it to the creation queue.
  Region getRegionFromIsoCoordinate(
      IsoCoordinate isoCoordinate, LevelOfDetail lod) {
    if (_tooManyRegionsExist()) {
      _removeFarawayRegions(isoCoordinate, lod);
    }

    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);
    isoCoordinate = regionPointToIsoCoordinate(point, lod);
    point = isoCoordinateToRegionPoint(isoCoordinate);
    if (!_regionsBylod[lod.index].containsKey(point)) {
      _regionsBylod[lod.index][point] =
          Region.empty(regionPointToIsoCoordinate(point, lod), lod);
      _regionCreationQueue.add(RegionBuildRule(lod, isoCoordinate));
    }

    return _regionsBylod[lod.index][point]!;
  }

  bool _tooManyRegionsExist() {
    return _regionsBylod.length > maxRegionCount;
  }

  void _removeFarawayRegions(IsoCoordinate coordinate, LevelOfDetail lod) {
    Point<int> point = isoCoordinateToRegionPoint(coordinate);
    for (var key in _regionsBylod[lod.index].keys.toList()) {
      if ((key.x - point.x).abs() > 60 || (key.y - point.y).abs() > 60) {
        _regionsBylod[lod.index].remove(key);
      }
    }
  }

  int getRegionCount() {
    int count = 0;
    for (var map in _regionsBylod) {
      count += map.length;
    }
    return count;
  }
}
