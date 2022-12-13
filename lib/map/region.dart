import 'package:anki/map/square.dart';

class Region {
  /// Notice that squares[0][0] would return the top left square in the screen
  /// [[(0,0), (1,0)],
  ///  [(0,1), (1,1)]]
  late final List<List<Square>> _squares;
  Region(List<List<Square>> squares) {
    _squares = squares;
  }

  Square getSquare(int x, int y) {
    return _squares[y][x];
  }
}