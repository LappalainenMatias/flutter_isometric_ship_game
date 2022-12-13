import 'package:anki/character/character.dart';

import '../action/task.dart';
import '../item/inventory/inventory.dart';
import '../item/weapon.dart';
import 'package:flutter/material.dart';

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

  Enemy(this.visibility, this.maxHearts, this.hearts,
      this.weapon, this.actions);

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
