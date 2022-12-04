import 'package:anki/map/square_visibility.dart';
import 'package:anki/character/player.dart';
import 'package:flutter/cupertino.dart';
import 'square.dart';

class MapModel extends ChangeNotifier {
  var width = 0;
  var height = 0;

  /// Notice that squares[0][0] would return the top left square in the screen
  /// [[(0,0), (1,0)],
  ///  [(0,1), (1,1)]]
  final List<List<Square>> _squares;

  MapModel(this.width, this.height, this._squares);

  updateSquareVisibility(PlayerModel p) {
    for (var y = p.y - p.visibility - 3; y < p.y + p.visibility + 3; y++) {
      for (var x = p.x - p.visibility - 3; x < p.x + p.visibility + 3; x++) {
        if (!hasSquare(x, y)) continue;
        var square = getSquare(x, y);
        if ((p.x - x).abs() + (p.y - y).abs() <= p.visibility) {
          square.visibility = SquareVisibility.inView;
        } else {
          if (square.visibility == SquareVisibility.inView) {
            square.visibility = SquareVisibility.seen;
          }
        }
      }
    }
    notifyListeners();
  }

  Square getSquare(int x, int y) {
    return _squares[y][x];
  }

  bool hasSquare(int x, int y) {
    if (x < 0 || x >= width) return false;
    if (y < 0 || y >= height) return false;
    return true;
  }
}
