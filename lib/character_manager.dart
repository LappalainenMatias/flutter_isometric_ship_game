import 'package:anki/enum/task.dart';
import 'package:anki/model/player.dart';

import 'enemy.dart';
import 'model/map.dart';

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
      for (var action in enemy.actions) {
        if (action.function(enemy, map)) {
          break;
        }
      }
    }
  }
}
