import 'package:anki/character/task.dart';
import 'package:anki/character/weapon.dart';
import 'package:anki/map/square_type.dart';
import '../map/map.dart';
import 'enemy.dart';
import 'dart:math';

/// probability is a value between 0 - 1. 1 means that there is a
/// 100 % change that square has an enemy if the square can contain the enemy.
List<Enemy> getEnemies(MapModel map, double probability) {
  List<Enemy> enemies = [];
  Random random = Random(1);
  for (int y = 0; y < map.height; y++) {
    for (int x = 0; x < map.width; x++) {
      if (!map.hasSquare(x, y)) continue;
      if (!map.getSquare(x, y).type.isVisitable()) continue;
      if (random.nextDouble() < probability) {
        enemies.add(Enemy(x, y, 1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection]));
      }
    }
  }
  return enemies;
}