import 'package:anki/square.dart';
import 'package:anki/square_types.dart';
import 'model/map.dart';

class MapGenerator {
  MapModel generateRandomMap(int width, int height) {
    List<Square> squares = [];
    for (var i = 0; i < width * height; i++) {
      squares.add(Square(SquareTypeExtension.getRandomType, false,
          i.remainder(width), (i / height).floor()));
    }
    return MapModel(width, height, squares);
  }
}
