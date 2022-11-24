import 'package:anki/enum/square_visibility.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/cupertino.dart';
import 'dart:math';
import '../square.dart';
import 'dart:math';

class MapModel extends ChangeNotifier {
  var width = 0;
  var height = 0;
  final Map<Point, Square> _squares;

  MapModel(this.width, this.height, this._squares);

  updateSquareVisibility(PlayerModel p) {
    /// We create keys for squares close to player so that we do not have to update
    /// visibility for all of the squares.
    Set<Point> keys = {};
    for (var y = p.y - p.visibility - 3; y < p.y + p.visibility + 3; y++) {
      for (var x = p.x - p.visibility - 3; x < p.x + p.visibility + 3; x++) {
        keys.add(Point(x, y));
      }
    }
    for (var key in keys) {
      if (!_squares.containsKey(key)) continue;
      var square = _squares[key]!;
      if ((p.x - key.x).abs() + (p.y - key.y).abs() <= p.visibility) {
        square.visibility = SquareVisibility.inView;
      } else {
        if (square.visibility == SquareVisibility.inView) {
          square.visibility = SquareVisibility.seen;
        }
      }
    }
    notifyListeners();
  }

  Map<Point, Square> get squares => _squares;

  void update() {
    notifyListeners();
  }
}
