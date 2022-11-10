import 'package:anki/square.dart';
import 'enum/square_types.dart';
import 'enum/square_visibility.dart';
import 'model/map.dart';
import 'dart:math';

class MapGenerator {
  MapModel generateRandomMap(int width, int height) {
    Map<Point, Square> squares = {};
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        squares[Point(x, y)] = Square(SquareTypeExtension.getRandomType, false,
            x, y, SquareVisibility.unseen);
      }
    }
    return MapModel(width, height, squares);
  }
}
