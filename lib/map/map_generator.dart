import 'package:anki/map/region.dart';
import 'package:anki/map/square.dart';
import 'package:fast_noise/fast_noise.dart';
import '../item/natural_item.dart';
import 'square_type.dart';
import 'square_visibility.dart';
import '../item/special_item.dart';
import 'dart:math';

Region generateRegion(int width, int height, int startX, int startY) {
  int seed = 100;
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
  List<List<Square>> squares = [];
  for (var y = 0; y < height; y++) {
    List<Square> row = [];
    for (var x = 0; x < width; x++) {
      double elevation = 0.25 * elevationNoise[x][y] +
          0.5 * elevationNoise2[x][y] +
          1 * elevationNoise4[x][y];
      double moisture = 0.25 * moistureNoise[x][y] +
          0.5 * moistureNoise2[x][y] +
          1 * moistureNoise4[x][y];
      elevation = elevation / (1 + 0.5 + 0.25);
      moisture = moisture / (1 + 0.5 + 0.25);
      SquareType type = SquareTypeExtension.getType(elevation, moisture);
      NaturalItem? naturalItem = NaturalItemExtension.getNaturalItem(type);
      row.add(Square(type, SquareVisibility.seen,
          ItemExtension.getRandomItems(type), naturalItem));
    }
    squares.add(row);
  }
  return Region(squares);
}

/// Increasing frequency adds details
List<List<double>> _getPerlinNoise(
        int w, int h, int startX, int startY, int seed, frequency) =>
    noise2(w, h, offset: Point(startX, startY),
        seed: seed,
        noiseType: NoiseType.Perlin,
        octaves: 5,
        frequency: frequency,
        cellularDistanceFunction: CellularDistanceFunction.Euclidean,
        cellularReturnType: CellularReturnType.Distance2Add);
