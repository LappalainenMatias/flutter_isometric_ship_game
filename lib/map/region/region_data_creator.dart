import 'dart:math';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'package:open_simplex_noise/open_simplex_noise.dart';
import '../iso_coordinate.dart';

/// We have seperate class for creating the region data because this class
/// does not use dart:ui and because of that it can be run concurrently
class RegionDataCreator {
  late OpenSimplexNoise _elevationNoise;
  late OpenSimplexNoise _moistureNoise;

  RegionDataCreator([int seed = 1]) {
    _elevationNoise = OpenSimplexNoise(seed + 1);
    _moistureNoise = OpenSimplexNoise(seed + 2);
  }

  RegionData create(
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
    tiles.sort((a, b) => a.compareTo(b));
    List<double> aboveWaterPositions = [];
    List<int> aboveWaterColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var tile in tiles) {
      if (tile.height < -5) continue;
      List pc = tile.getPosAndCols();
      if (tile.height < 0) {
        underWaterPositions.addAll(pc[0]);
        underWaterColors.addAll(pc[1]);
      } else {
        aboveWaterPositions.addAll(pc[0]);
        aboveWaterColors.addAll(pc[1]);
      }
    }
    return RegionData(
      regionCoordinate,
      (aboveWaterPositions.length + underWaterPositions.length) ~/ 2,
      aboveWaterPositions,
      aboveWaterColors,
      underWaterPositions,
      underWaterColors,
      tiles,
    );
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
      var rowElevation = elevationMap[x];
      var rowMoisture = moistureMap[x];
      for (int y = 0; y < h; y++) {
        final x1 = (startX + x) * 0.008;
        final y1 = (startY + y) * 0.008;
        final x2 = (startX + x) * 0.016;
        final y2 = (startY + y) * 0.016;
        final x3 = (startX + x) * 0.050;
        final y3 = (startY + y) * 0.050;
        double elevation = _elevationNoise.eval2D(x1, y1) +
            0.5 * _elevationNoise.eval2D(x2, y2) +
            0.25 * _elevationNoise.eval2D(x3, y3);
        double moisture = _moistureNoise.eval2D(x1, y1) +
            0.5 * _moistureNoise.eval2D(x2, y2) +
            0.25 * _moistureNoise.eval2D(x3, y3);
        rowElevation[y] = elevation - 0.15;
        rowMoisture[y] = moisture;
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

class RegionData {
  final IsoCoordinate regionCoordinate;
  final int verticesCount;
  final List<double> aboveWaterPositions;
  final List<int> aboveWaterColors;
  final List<double> underWaterPositions;
  final List<int> underWaterColors;
  final List<Tile> tiles;

  RegionData(
    this.regionCoordinate,
    this.verticesCount,
    this.aboveWaterPositions,
    this.aboveWaterColors,
    this.underWaterPositions,
    this.underWaterColors,
    this.tiles,
  );
}
