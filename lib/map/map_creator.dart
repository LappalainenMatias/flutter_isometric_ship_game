import 'dart:math';
import 'package:anki/map/region.dart';
import 'package:fast_noise/fast_noise.dart';
import 'tile.dart';

class MapCreator {
  Region? create(Point<int> regionCoordinate, int width, int height, int startX,
      int startY,
      [int seed = 99]) {
    final elevationNoise =
        _getPerlinNoise(width, height, startX, startY, seed, 0.04);
    final elevationNoise2 =
        _getPerlinNoise(width, height, startX, startY, seed + 1, 0.01);
    final elevationNoise4 =
        _getPerlinNoise(width, height, startX, startY, seed + 2, 0.005);
    final moistureNoise =
        _getPerlinNoise(width, height, startX, startY, seed + 4, 0.04);
    final moistureNoise2 =
        _getPerlinNoise(width, height, startX, startY, seed + 4, 0.01);
    final moistureNoise4 =
        _getPerlinNoise(width, height, startX, startY, seed + 5, 0.005);
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
        elevation = elevation / (1 + 0.5 + 0.25) - 0.2;
        moisture = moisture / (1 + 0.5 + 0.25);
        Tile? tile = TileExtension.getTile(
            elevation, moisture, Point((startX + x).toDouble(), (startY + y).toDouble()));
        if (tile != null) tiles.add(tile);
      }
    }
    return Region(tiles, regionCoordinate);
  }

  /// Increasing frequency adds details
  List<List<double>> _getPerlinNoise(
      int w, int h, int startX, int startY, int seed, double frequency) {
    List<List<double>> map = List.generate(
        w, (i) => List.generate(h, (i) => 0, growable: false),
        growable: false);
    final noise = PerlinNoise(
        cellularReturnType: CellularReturnType.Distance2Add,
        fractalType: FractalType.FBM,
        frequency: frequency,
        gain: 0.5,
        interp: Interp.Quintic,
        lacunarity: 2.0,
        octaves: 3,
        seed: seed);

    for (int x = 0; x < w; x++) {
      for (int y = 0; y < h; y++) {
        final dx = (startX + x) * frequency, dy = (startY + y) * frequency;
        map[x][y] = noise.singlePerlin2(seed, dx, dy);
      }
    }
    return map;
  }
}
