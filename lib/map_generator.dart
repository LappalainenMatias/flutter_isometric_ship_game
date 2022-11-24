import 'package:anki/square.dart';
import 'package:fast_noise/fast_noise.dart';
import 'enum/square_type.dart';
import 'enum/square_visibility.dart';
import 'model/map.dart';
import 'enum/item.dart';
import 'dart:math';

class MapGenerator {
  MapModel generateRandomMap(int width, int height) {
    Map<Point, Square> squares = {};
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        squares[Point(x, y)] = Square(SquareTypeExtension.getRandomType, x, y,
            SquareVisibility.unseen, []);
      }
    }
    return MapModel(width, height, squares);
  }

  MapModel realisticRandomMap(int width, int height) {
    final noise = _getPerlinNoise(width, height);
    Map<Point, Square> squares = {};
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        SquareType st =
            SquareTypeExtension.getValueBasedOnHeight(noise[x][y]);
        squares[Point(x, y)] = Square(st, x, y, SquareVisibility.unseen,
            ItemExtension.getRandomItems(st));
      }
    }
    return MapModel(width, height, squares);
  }

  List<List<double>> _getPerlinNoise(int w, int h) => noise2(w, h,
      noiseType: NoiseType.Perlin,
      octaves: 5,
      frequency: 0.015,
      cellularDistanceFunction: CellularDistanceFunction.Euclidean,
      cellularReturnType: CellularReturnType.Distance2Add);
}
