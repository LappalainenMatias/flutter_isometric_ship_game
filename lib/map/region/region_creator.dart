import 'dart:math';
import 'dart:typed_data';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'package:open_simplex_noise/open_simplex_noise.dart';
import '../../utils/iso_coordinate.dart';

/// We use seperate class for creating the region data because this class
/// does not use dart:ui and because of that it can be run concurrently
/*
class RegionCreator {
  late OpenSimplexNoise _elevationNoise;
  late OpenSimplexNoise _moistureNoise;

  RegionCreator([int seed = 1]) {
    _elevationNoise = OpenSimplexNoise(seed + 1);
    _moistureNoise = OpenSimplexNoise(seed + 2);
  }

  RegionDTO create(IsoCoordinate regionCoordinate, int width, int height,
      int startX, int startY) {
    var noises = _createNoises(width, height, startX, startY);
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
    return RegionDTO(
      regionCoordinate,
      (aboveWaterPositions.length + underWaterPositions.length) ~/ 2,
      aboveWaterPositions.cast<Float32List>(),
      aboveWaterColors.cast<Int32List>(),
      underWaterPositions.cast<Float32List>(),
      underWaterColors.cast<Int32List>(),
    );
  }

  /// Increasing frequency adds details
  List<List<List<double>>> _createNoises(
    int width,
    int height,
    int startX,
    int startY,
  ) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);
    for (int x = 0; x < width; x++) {
      var rowElevation = elevationMap[x];
      var rowMoisture = moistureMap[x];
      for (int y = 0; y < height; y++) {
        final x1 = (startX + x) * 0.006;
        final y1 = (startY + y) * 0.006;
        final x2 = (startX + x) * 0.016;
        final y2 = (startY + y) * 0.016;
        final x3 = (startX + x) * 0.048;
        final y3 = (startY + y) * 0.048;
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
*/

class RegionDTO {
  final IsoCoordinate regionCoordinate;
  final int verticesCount;
  final Float32List aboveWaterPositions;
  final Int32List aboveWaterColors;
  final Float32List underWaterPositions;
  final Int32List underWaterColors;

  RegionDTO(
    this.regionCoordinate,
    this.verticesCount,
    this.aboveWaterPositions,
    this.aboveWaterColors,
    this.underWaterPositions,
    this.underWaterColors,
  );
}