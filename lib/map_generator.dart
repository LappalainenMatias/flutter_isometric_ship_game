import 'package:anki/square.dart';
import 'package:anki/square_types.dart';

import 'map.dart';

class MapGenerator {
  Map generateRandomMap(var width, var height) {
    List<Square> squares = [];
    for (var i = 0; i < width * height; i++) {
      squares.add(Square(SquareTypeExtension.getRandomType, false));
    }
    return Map(width, height, squares);
  }
}