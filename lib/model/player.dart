import 'package:flutter/cupertino.dart';
import 'dart:math';
import '../enum/square_types.dart';
import 'map.dart';

class PlayerModel extends ChangeNotifier {
  var _visibility = 2;
  var _x = 0;
  var _y = 0;


  PlayerModel(this._visibility, this._x, this._y);

  void moveDown(MapModel mapModel) {
    if (!mapModel.squares.containsKey(Point(_x, _y + 1))) return;
    if (mapModel.squares[Point(_x, _y + 1)]!.type != SquareType.water) {
      _y += 1;
      notifyListeners();
    }
  }

  void moveUp(MapModel mapModel) {
    if (!mapModel.squares.containsKey(Point(_x, _y - 1))) return;
    if (mapModel.squares[Point(_x, _y - 1)]!.type != SquareType.water) {
      _y -= 1;
      notifyListeners();
    }
  }

  void moveLeft(MapModel mapModel) {
    if (!mapModel.squares.containsKey(Point(_x - 1, _y))) return;
    if (mapModel.squares[Point(_x - 1, _y)]!.type != SquareType.water) {
      _x -= 1;
      notifyListeners();
    }
  }

  void moveRight(MapModel mapModel) {
    if (!mapModel.squares.containsKey(Point(_x + 1, _y))) return;
    if (mapModel.squares[Point(_x + 1, _y)]!.type != SquareType.water) {
      _x += 1;
      notifyListeners();
    }
  }

  set visibility(value) {
    _visibility = value;
    notifyListeners();
  }

  get y => _y;

  get x => _x;

  get visibility => _visibility;
}
