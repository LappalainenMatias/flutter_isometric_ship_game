import 'package:anki/enum/item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'dart:math';
import '../character.dart';
import '../enum/square_type.dart';
import '../enum/task.dart' as player_action;
import '../square.dart';
import 'map.dart';

class PlayerModel extends ChangeNotifier implements Character {
  List<player_action.Task> actions = [];
  var _visibility = 1;
  var _x = 0;
  var _y = 0;
  var maxHearts = 3;
  @override
  var hearts = 1;

  PlayerModel(this._visibility, this._x, this._y);

  @override
  void setHearts(int val) {
    if (val <= 0) {
      hearts = 0;
    } else if (val > maxHearts) {
      hearts = maxHearts;
    } else {
      hearts = val;
    }
    notifyListeners();
  }

  void moveDown(MapModel map) {
    move(map, _x, y + 1);
  }

  void moveUp(MapModel map) {
    move(map, _x, y - 1);
  }

  void moveLeft(MapModel map) {
    move(map, _x - 1, y);
  }

  void moveRight(MapModel map) {
    move(map, _x + 1, y);
  }

  @override
  void move(MapModel map, int newX, int newY) {
    Square? s = map.squares[Point(newX, newY)];
    if (s == null) return;
    if (s.type.isVisitable()) {
      _x = newX;
      _y = newY;
      if (s.items.isNotEmpty) _collectItems(s);
      map.updateSquareVisibility(this);
      notifyListeners();
    }
  }

  void _collectItems(Square sq) {
    for (var item in sq.items) {
      item.collect(this, sq);
    }
  }

  set visibility(value) {
    _visibility = value;
    notifyListeners();
  }

  @override
  get y => _y;

  @override
  get x => _x;

  get visibility => _visibility;
}
