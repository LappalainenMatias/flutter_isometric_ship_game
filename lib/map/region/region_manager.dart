import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'dart:math';
import 'package:open_simplex_noise/open_simplex_noise.dart';

class RegionManager {
  final Map<Point<int>, Region> _regions = {};
  final RegionCreator _regionCreator = RegionCreator();
  final int _regionSideWidth = 64;
  final int _maxRegionAmount = 1024;

  /// Used for liming the amount of regions created per second (frame rate drops)
  final Stopwatch _previousRegionCreated = Stopwatch()..start();
  final int _minElapsedMS = 50;

  Map<String, dynamic> getVertices(
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
    return {
      "aboveWater": aboveWater,
      "underWater": underWater,
      "verticesCount": verticesCount,
      "regionCount": regions.length,
    };
  }

  List<IsoCoordinate> getRegionCoordinates(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    List<IsoCoordinate> regionCoordinates = [];
    for (double isoY = topLeft.isoY + _regionSideWidth;
        isoY >= bottomRight.isoY - 2 * _regionSideWidth;
        isoY -= _regionSideWidth) {
      for (double isoX = topLeft.isoX - _regionSideWidth;
          isoX <= bottomRight.isoX + 2 * _regionSideWidth;
          isoX += _regionSideWidth) {
        regionCoordinates.add(IsoCoordinate.fromIso(isoX, isoY));
      }
    }
    return regionCoordinates;
  }

  List<Region> _getRegions(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    List<IsoCoordinate> regionCoordinates = getRegionCoordinates(
      topLeft,
      bottomRight,
    );
    _sortByDistanceToCenter(regionCoordinates, topLeft, bottomRight);
    Set<Region> regions = {};
    for (var isoCoordinate in regionCoordinates) {
      Region? region = _getRegion(isoCoordinate);
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
      if (_regions.length > _maxRegionAmount) {
        _removeFarawayRegions(point);
        return null;
      }
      if (_previousRegionCreated.elapsedMilliseconds < _minElapsedMS) {
        return null;
      }
      Region? region = _regionCreator.create(
        IsoCoordinate.fromIso(regionX.toDouble(), regionY.toDouble()),
        _regionSideWidth,
        _regionSideWidth,
        regionX * _regionSideWidth,
        regionY * _regionSideWidth,
      );
      _regions[point] = region;
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

class RegionCreator {
  late OpenSimplexNoise _openNoiseE1;
  late OpenSimplexNoise _openNoiseM1;

  RegionCreator([int seed = 1]) {
    _openNoiseE1 = OpenSimplexNoise(seed + 1);
    _openNoiseM1 = OpenSimplexNoise(seed + 2);
  }

  Region create(
    IsoCoordinate regionCoordinate,
    int width,
    int height,
    int startX,
    int startY,
  ) {
    var noises = _noise(width, height, startX, startY);
    final elevationNoise = noises[0];
    final moistureNoise = noises[1];
    List<Tile> tiles = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var moistureRow = moistureNoise[x];
      for (var y = 0; y < height; y++) {
        tiles.add(getTile(elevationRow[y], moistureRow[y],
            Point((startX + x).toDouble(), (startY + y).toDouble())));
      }
    }
    Region region = Region(tiles, regionCoordinate);
    return region;
  }

  /// Increasing frequency adds details
  List<List<List<double>>> _noise(
    int w,
    int h,
    int startX,
    int startY,
  ) {
    List<List<double>> elevationMap = _fixedSizeList(w, h);
    List<List<double>> moistureMap = _fixedSizeList(w, h);
    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        final x1 = (startX + x) * 0.008;
        final y1 = (startY + y) * 0.008;
        final x2 = (startX + x) * 0.016;
        final y2 = (startY + y) * 0.016;
        final x3 = (startX + x) * 0.050;
        final y3 = (startY + y) * 0.050;
        double elevation = _openNoiseE1.eval2D(x1, y1) +
            0.5 * _openNoiseE1.eval2D(x2, y2) +
            0.25 * _openNoiseE1.eval2D(x3, y3);
        double moisture = _openNoiseM1.eval2D(x1, y1) +
            0.5 * _openNoiseM1.eval2D(x2, y2) +
            0.25 * _openNoiseM1.eval2D(x3, y3);
        elevationMap[x][y] = elevation - 0.15;
        moistureMap[x][y] = moisture;
      }
    }
    return [elevationMap, moistureMap];
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    List<List<double>> map = List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}
