import 'package:anki/character/player.dart';
import 'package:anki/character/task.dart';

import 'enemy.dart';
import '../map/map.dart';

class CharacterManager {
  MapModel map;
  PlayerModel player;
  List<Enemy> enemies;
  int speedMs;
  bool paused = true;

  CharacterManager(this.map, this.player, this.enemies, this.speedMs) {
    run();
  }

  void pause() {
    paused = true;
  }

  void start() {
    paused = false;
  }

  void run() {
    if (!paused) {
      _runPlayerActions();
      _runEnemyActions();
    }
    Future.delayed(Duration(milliseconds: speedMs), () {
      run();
    });
  }

  void _runPlayerActions() {
    for (var action in player.actions) {
      if (action.function(player, map)) {
        break;
      }
    }
  }

  void _runEnemyActions() {
    for (var enemy in enemies) {
      /// We do not want to simulate actions if the enemy is far away
      if ((enemy.x - player.x).abs() + (enemy.y - player.y).abs() >=
          player.visibility * 4) {
        continue;
      }
      for (var action in enemy.actions) {
        if (action.function(enemy, map)) {
          break;
        }
      }
    }
  }
}
