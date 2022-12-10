import 'package:anki/character/character.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import '../action/task.dart';
import '../item/inventory/inventory.dart';
import '../item/weapon.dart';
import 'package:flutter/material.dart';

class Enemy implements Character {
  @override
  int x;
  @override
  int y;
  int visibility;
  int maxHearts;
  Weapon weapon;
  Inventory inventory = Inventory();
  List<Task> actions;
  @override
  int hearts;
  @override
  var color = Colors.red;

  Enemy(this.x, this.y, this.visibility, this.maxHearts, this.hearts,
      this.weapon, this.actions);

  @override
  void move(MapModel map, int newX, int newY) {
    if (!map.hasSquare(newX, newY)) return;
    Square square = map.getSquare(newX, newY);
    if (square.type.isVisitable) {
      x = newX;
      y = newY;
    }
  }

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
}
