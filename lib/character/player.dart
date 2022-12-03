import 'package:anki/character/item.dart';
import 'package:flutter/material.dart';
import 'character.dart';
import '../map/square_type.dart';
import 'task.dart' as player_action;
import '../map/square.dart';
import '../map/map.dart';

class PlayerModel extends ChangeNotifier implements Character {
  List<player_action.Task> actions = [];
  var _visibility = 1;
  var _x = 0;
  var _y = 0;
  var maxHearts = 3;
  @override
  var hearts = 1;
  @override
  var color = Colors.red;

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
    move(map, _x, _y + 1);
  }

  void moveUp(MapModel map) {
    move(map, _x, _y - 1);
  }

  void moveLeft(MapModel map) {
    move(map, _x - 1, _y);
  }

  void moveRight(MapModel map) {
    move(map, _x + 1, _y);
  }

  @override
  void move(MapModel map, int newX, int newY) {
    if (!map.hasSquare(newX, newY)) return;
    Square s = map.getSquare(newX, newY);
    if (s.type.isVisitable) {
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
