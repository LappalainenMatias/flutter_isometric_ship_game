import 'package:anki/enum/item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'dart:math';
import '../enum/square_type.dart';
import '../enum/action.dart' as player_action;
import '../square.dart';
import 'map.dart';

class PlayerModel extends ChangeNotifier {
  List<player_action.Action> actions = [];
  var _visibility = 1;
  var _x = 0;
  var _y = 0;
  var movementSpeedMs = 1000;
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
      if (!stopped) {
        if (action.function(this, map)) {
          break;
        }
      }
    }
    Future.delayed(Duration(milliseconds: movementSpeedMs), () {
      doActions(map);
    });
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

  void move(MapModel map, int x, int y) {
    Square? s = map.squares[Point(x, y)];
    if (s == null) return;
    if (s.type.isVisitable()) {
      _x = x;
      _y = y;
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

  get y => _y;

  get x => _x;

  get visibility => _visibility;
}
