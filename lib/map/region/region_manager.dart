import 'dart:ui';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/region/region.dart';
import 'dart:math';
import 'package:anki/map/region/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';

class RegionManager {
  final Map<Point<int>, Region> _regions = {};
  final int _regionSideWidth = 32;
  final int _maxRegionCount = 2048;
  final Set<Point> _buildQueue = {};

  MapDTO getVertices(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    List<Region> regions = _getRegions(topLeft, bottomRight);
    regions.sort((a, b) => a.compareTo(b));
    List<Vertices> aboveWater = [];
    List<Vertices> underWater = [];
    int verticesCount = 0;
    for (Region region in regions) {
      if (region.aboveWater != null) {
        aboveWater.add(region.aboveWater!);
      }
      if (region.underWater != null) {
        underWater.add(region.underWater!);
      }
      verticesCount += region.verticesCount;
    }
    return MapDTO(
      underWater: underWater,
      aboveWater: aboveWater,
      verticesCount: verticesCount,
    );
  }

  /// Returns coordinates that are between the two coordinates.
  /// Because of the region shape (diamond) we return more coordinates than needed so
  /// that we are not going to have holes in the map.
  List<IsoCoordinate> _getCoordinates(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
    step,
  ) {
    List<IsoCoordinate> regionCoordinates = [];
    for (double isoY = topLeft.isoY + step;
        isoY >= bottomRight.isoY - 2 * step;
        isoY -= step) {
      for (double isoX = topLeft.isoX - step;
          isoX <= bottomRight.isoX + 2 * step;
          isoX += step) {
        regionCoordinates.add(IsoCoordinate.fromIso(isoX, isoY));
      }
    }
    return regionCoordinates;
  }

  List<Region> _getRegions(IsoCoordinate topLeft, IsoCoordinate bottomRight) {
    List<IsoCoordinate> coordinates =
        _getCoordinates(topLeft, bottomRight, _regionSideWidth);
    _sortByDistanceToCenter(coordinates, topLeft, bottomRight);
    Set<Region> regions = {};
    for (var coordinate in coordinates) {
      Region? region = _getRegion(coordinate);
      if (region != null) {
        regions.add(region);
      }
    }
    return regions.toList();
  }

  /// We want to create and find the regions that are
  /// closest to the center of the screen first
  void _sortByDistanceToCenter(
    List<IsoCoordinate> coordinates,
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    var center = topLeft.center(bottomRight);
    coordinates.sort((a, b) =>
        a.manhattanDistance(center).compareTo(b.manhattanDistance(center)));
  }

  Region? _getRegion(IsoCoordinate isoCoordinate) {
    Point isoPoint = isoCoordinate.toPoint();
    int regionX = (isoPoint.x / _regionSideWidth).floor();
    int regionY = (isoPoint.y / _regionSideWidth).floor();
    Point<int> point = Point(regionX, regionY);
    if (_regions.containsKey(point)) {
      return _regions[point]!;
    } else {
      if (_regions.length > _maxRegionCount) {
        _removeFarawayRegions(point);
      } else {
        _createRegion(regionX, regionY);
      }
    }
    return null;
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 20 || (key.y - point.y).abs() > 20) {
        _regions.remove(key);
      }
    }
  }

  void _createRegion(int x, int y) async {
    if (kIsWeb) {
      if (_buildQueue.contains(Point(x, y)) || _buildQueue.length > 10) {
        return;
      }
      _buildQueue.add(Point(x, y));
      final result = await JsIsolatedWorker().run(
        functionName: 'jsregionworker',
        arguments: [
          x,
          y,
          _regionSideWidth,
          _regionSideWidth,
          x * _regionSideWidth,
          y * _regionSideWidth
        ],
      );
      var regionDTO = RegionDTO(
        IsoCoordinate.fromIso(result[0], result[1]),
        result[2],
        result[3],
        result[4],
        result[5],
        result[6],
      );
      _regions[Point(x, y)] = Region.fromRegionDTO(regionDTO);
      _buildQueue.remove(Point(x, y));
    } else {
      // TODO no concurrency support yet
      RegionDTO regionDTO = RegionCreator().create(
        IsoCoordinate.fromIso(x.toDouble(), y.toDouble()),
        _regionSideWidth,
        _regionSideWidth,
        x * _regionSideWidth,
        y * _regionSideWidth,
      );
      _regions[Point(x, y)] = Region.fromRegionDTO(regionDTO);
    }
  }
}
