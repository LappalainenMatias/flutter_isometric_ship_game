import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/region/region.dart';
import 'dart:math';
import 'package:anki/map/region/region_data_creator.dart';

class RegionManager {
  final Map<Point<int>, Region> _regions = {};
  final RegionDataCreator _regionCreator = RegionDataCreator();
  final int _regionSideWidth = 64;
  final int _maxRegionCount = 1024;

  /// Used for liming the amount of regions created per second (frame rate drops)
  final Stopwatch _previousRegionCreated = Stopwatch()..start();
  final int _minElapsedMS = 5;

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

  /// Returns coordinates that are between the coordinates.
  /// Because of the region shape (diamond) we return more coordinates than needed so
  /// that we are not going to have holes in the map.
  List<IsoCoordinate> getCoordinates(
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
        getCoordinates(topLeft, bottomRight, _regionSideWidth);
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
        a.euclideanDistance(center).compareTo(b.euclideanDistance(center)));
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
        return null;
      }
      if (_previousRegionCreated.elapsedMilliseconds < _minElapsedMS) {
        return null;
      }
      var regionDTO = _regionCreator.create(
        IsoCoordinate.fromIso(regionX.toDouble(), regionY.toDouble()),
        _regionSideWidth,
        _regionSideWidth,
        regionX * _regionSideWidth,
        regionY * _regionSideWidth,
      );
      _regions[point] = Region.fromRegionDTO(regionDTO);
      _previousRegionCreated.reset();
      return _regions[point]!;
    }
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 20 || (key.y - point.y).abs() > 20) {
        _regions.remove(key);
      }
    }
  }
}
