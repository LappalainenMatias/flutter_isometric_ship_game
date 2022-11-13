import 'package:anki/enum/item.dart';
import 'package:flutter/cupertino.dart';
import 'dart:math';
import '../enum/square_type.dart';
import '../enum/action.dart' as GameAction;
import '../square.dart';
import 'map.dart';

class PlayerModel extends ChangeNotifier {
  List<GameAction.Action> actions = [];
  var _visibility = 1;
  var _x = 0;
  var _y = 0;
  var movementSpeedMs = 200;
  var maxHearts = 3;
  var hearts = 1;
  var stopped = true;
  var startedDoActions = false;

  PlayerModel(this._visibility, this._x, this._y);

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

  void stopMovement() {
    stopped = true;
    notifyListeners();
  }

  void startMovement() {
    stopped = false;
    notifyListeners();
  }

  void doActions(MapModel map) {
    for (var action in actions) {
      if (!stopped) action.function(this, map);
    }
    Future.delayed(Duration(milliseconds: movementSpeedMs), () {
      doActions(map);
    });
  }

  void moveDown(MapModel map) {
    _move(map, _x, y + 1);
  }

  void moveUp(MapModel map) {
    _move(map, _x, y - 1);
  }

  void moveLeft(MapModel map) {
    _move(map, _x - 1, y);
  }

  void moveRight(MapModel map) {
    _move(map, _x + 1, y);
  }

  void _move(MapModel map, int x, int y) {
    if (!map.squares.containsKey(Point(x, y))) return;
    var sq = map.squares[Point(x, y)]!;
    if (sq.type.isMovable()) {
      _x = x;
      _y = y;
      if (sq.items.isNotEmpty) _collectItems(sq);
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

  get y => _y;

  get x => _x;

  get visibility => _visibility;
}
