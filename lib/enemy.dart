import 'package:anki/character.dart';
import 'package:anki/enum/item.dart';
import 'package:anki/enum/square_type.dart';
import 'package:anki/model/map.dart';
import 'package:anki/square.dart';
import 'dart:math';
import 'enum/task.dart';
import 'enum/weapon.dart';

class Enemy implements Character {
  @override
  int x;
  @override
  int y;
  int visibility;
  int maxHearts;
  Weapon weapon;
  List<Task> actions;
  @override
  int hearts;

  Enemy(this.x, this.y, this.visibility, this.maxHearts, this.hearts,
      this.weapon, this.actions);

  @override
  void move(MapModel map, int newX, int newY) {
    Square? s = map.squares[Point(newX, newY)];
    if (s == null) return;
    if (s.type.isVisitable()) {
      x = newX;
      y = newY;
      map.update();
    }
  }

  @override
  void setHearts(int hearts) {
    if (hearts <= 0) {
      hearts = 0;
    } else if (hearts > maxHearts) {
      hearts = maxHearts;
    } else {
      hearts = hearts;
    }
  }
}