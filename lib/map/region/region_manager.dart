import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'package:fast_noise/fast_noise.dart';
import 'dart:math';

class RegionManager {
  final Map<Point<int>, Region> _regions = {};
  final RegionCreator _regionCreator = RegionCreator();
  final int _regionSideWidth = 64;
  final int _maxRegionAmount = 512;

  Map<String, List<Vertices>> getVertices(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    List<Region> regions = _getRegions(topLeft, bottomRight);
    regions.sort((a, b) => a.compareTo(b));
    List<Vertices> aboveWater = [];
    List<Vertices> underWater = [];
    for (Region region in regions) {
      if (region.aboveWater != null) aboveWater.add(region.aboveWater!);
      if (region.underWater != null) underWater.add(region.underWater!);
    }
    return {"aboveWater": aboveWater, "underWater": underWater};
  }

  List<Region> _getRegions(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
  ) {
    Set<Region> regions = {};
    for (double y = topLeft.y;
        y >= bottomRight.y - _regionSideWidth;
        y -= _regionSideWidth) {
      for (double x = topLeft.x;
          x <= bottomRight.x + _regionSideWidth;
          x += _regionSideWidth) {
        Region? region = _getRegion(x, y);
        if (region != null) {
          regions.add(region);
        }
      }
    }
    return regions.toList();
  }

  Region? _getRegion(double x, double y) {
    int regionX = (x / _regionSideWidth).floor();
    int regionY = (y / _regionSideWidth).floor();
    var point = Point(regionX, regionY);
    if (_regions.containsKey(point)) {
      return _regions[point]!;
    } else {
      if (_regions.length > _maxRegionAmount) return null;
      Region? region = _regionCreator.create(
        IsoCoordinate(regionX.toDouble(), regionY.toDouble()),
        _regionSideWidth,
        _regionSideWidth,
        regionX * _regionSideWidth,
        regionY * _regionSideWidth,
      );
      _regions[point] = region;
      return _regions[point]!;
    }
  }
}

class RegionCreator {
  late PerlinNoise _basicNoise;

  RegionCreator([int seed = 0]) {
    _basicNoise = PerlinNoise(
        cellularReturnType: CellularReturnType.Distance2Add,
        fractalType: FractalType.FBM,
        frequency: 0.01,
        gain: 0.5,
        interp: Interp.Quintic,
        lacunarity: 2.0,
        octaves: 3,
        seed: seed);
  }

  Region create(
    IsoCoordinate regionCoordinate,
    int width,
    int height,
    int startX,
    int startY,
  ) {
    var tables = _noise(width, height, startX, startY);
    final elevationNoise = tables[0];
    final elevationNoise2 = tables[1];
    final elevationNoise4 = tables[2];
    final moistureNoise = tables[3];
    final moistureNoise2 = tables[4];
    final moistureNoise4 = tables[5];
    List<Tile> tiles = [];
    for (var x = 0; x < width; x++) {
      var elevationRow = elevationNoise[x];
      var elevationRow2 = elevationNoise2[x];
      var elevationRow4 = elevationNoise4[x];
      var moistureRow = moistureNoise[x];
      var moisture2Row = moistureNoise2[x];
      var moisture4Row = moistureNoise4[x];
      for (var y = 0; y < height; y++) {
        double elevation = 0.25 * elevationRow[y] +
            0.5 * elevationRow2[y] +
            1 * elevationRow4[y];
        double moisture =
            0.25 * moistureRow[y] + 0.5 * moisture2Row[y] + 1 * moisture4Row[y];
        elevation = elevation / (1 + 0.5 + 0.25) - 0.1;
        moisture = moisture / (1 + 0.5 + 0.25);
        tiles.add(getTile(elevation, moisture,
            IsoCoordinate((startX + x).toDouble(), (startY + y).toDouble())));
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
    List<List<double>> elevation1 = _fixedSizeList(w, h);
    List<List<double>> elevation2 = _fixedSizeList(w, h);
    List<List<double>> elevation4 = _fixedSizeList(w, h);
    List<List<double>> moisture1 = _fixedSizeList(w, h);
    List<List<double>> moisture2 = _fixedSizeList(w, h);
    List<List<double>> moisture4 = _fixedSizeList(w, h);
    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        final x1 = (startX + x) * 0.04;
        final y1 = (startY + y) * 0.04;
        final x2 = (startX + x) * 0.01;
        final y2 = (startY + y) * 0.01;
        final x4 = (startX + x) * 0.005;
        final y4 = (startY + y) * 0.005;
        elevation1[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 1,
          x1,
          y1,
        );
        elevation2[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 2,
          x2,
          y2,
        );
        elevation4[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 3,
          x4,
          y4,
        );
        moisture1[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 4,
          x1,
          y1,
        );
        moisture2[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 5,
          x2,
          y2,
        );
        moisture4[x][y] = _basicNoise.singlePerlin2(
          _basicNoise.seed + 6,
          x4,
          y4,
        );
      }
    }
    return [
      elevation1,
      elevation2,
      elevation4,
      moisture1,
      moisture2,
      moisture4
    ];
  }

  List<List<double>> _fixedSizeList(int w, int h) {
    List<List<double>> map = List.generate(
      w,
      (i) => List.generate(h, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}
