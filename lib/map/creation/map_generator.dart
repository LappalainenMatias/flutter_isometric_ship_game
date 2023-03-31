import 'dart:math';
import 'package:anki/map/area/region.dart';
import 'package:fast_noise/fast_noise.dart';
import 'tile.dart';

Region generateRegion(int width, int height, int startX, int startY, [int seed = 100]) {
  final elevationNoise =
      _getPerlinNoise(width, height, startX, startY, seed, 0.04);
  final elevationNoise2 =
      _getPerlinNoise(width, height, startX, startY, seed + 1, 0.02);
  final elevationNoise4 =
      _getPerlinNoise(width, height, startX, startY, seed + 2, 0.01);
  final moistureNoise =
      _getPerlinNoise(width, height, startX, startY, seed + 4, 0.04);
  final moistureNoise2 =
      _getPerlinNoise(width, height, startX, startY, seed + 4, 0.02);
  final moistureNoise4 =
      _getPerlinNoise(width, height, startX, startY, seed + 5, 0.01);
  List<Tile> tiles = [];
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      double elevation = 0.25 * elevationNoise[x][y] +
          0.5 * elevationNoise2[x][y] +
          1 * elevationNoise4[x][y];
      double moisture = 0.25 * moistureNoise[x][y] +
          0.5 * moistureNoise2[x][y] +
          1 * moistureNoise4[x][y];
      elevation = elevation / (1 + 0.5 + 0.25);
      moisture = moisture / (1 + 0.5 + 0.25);
      Tile tile = TileExtension.getTile(elevation, moisture, Point(x, y));
      tiles.add(tile);
    }
  }
  return Region(tiles.reversed.toList());
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