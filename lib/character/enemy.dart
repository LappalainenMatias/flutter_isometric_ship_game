import 'package:anki/character/character.dart';

import '../action/task.dart';
import '../item/inventory/inventory.dart';
import '../item/weapon.dart';
import 'package:flutter/material.dart';
import 'dart:math';

class Enemy implements Character {
  int visibility;
  int maxHearts;
  Weapon weapon;
  Inventory inventory = Inventory();
  List<Task> actions;
  @override
  int hearts;
  @override
  var color = Colors.red;
  Point<int> _coordinate;

  Enemy(this.visibility, this.maxHearts, this.hearts,
      this.weapon, this.actions, this._coordinate);

  @override
  void setHearts(int hearts) {
    if (hearts <= 0) {
      this.hearts = 0;
    } else if (hearts > maxHearts) {
      this.hearts = maxHearts;
    } else {
      this.hearts = hearts;
    }
  }

  @override
  void setCoordinate(Point<int> coordinate) {
    _coordinate = coordinate;
  }

  @override
  Point<int> getCoordinate() {
    return _coordinate;
  }
}
