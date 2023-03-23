import 'package:anki/action/task.dart';
import 'package:anki/item/weapon.dart';
import 'package:anki/map/square_type.dart';
import '../item/inventory/inventory.dart';
import '../map/map.dart';
import 'enemy.dart';
import 'dart:math';

/// probability is a value between 0 - 1. 1 means that there is a
/// 100 % change that square has an enemy if the square can contain the enemy.
List<Enemy> getEnemies(MapModel map, double probability) {
  List<Enemy> enemies = [
    Enemy(1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection], const Point(1, 1))
  ];
  ///Todo add better coordinates to enemies
  return enemies;
}
