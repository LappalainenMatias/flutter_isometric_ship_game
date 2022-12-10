import 'package:anki/character/player.dart';
import '../map/map_helper.dart';
import 'enemy.dart';
import '../map/map.dart';

class CharacterManager {
  MapModel map;
  PlayerModel player;
  List<Enemy> enemies;
  int speedMs;
  bool paused = true;

  CharacterManager(this.map, this.player, this.enemies, this.speedMs) {
    _run();
  }

  void pause() {
    paused = true;
  }

  void start() {
    paused = false;
  }

  void _run() {
    if (!paused) {
      _runPlayerActions();
      _runEnemyActions();
    }
    Future.delayed(Duration(milliseconds: speedMs), () {
      _run();
    });
  }

  void _runPlayerActions() {
    for (var action in player.actions) {
      if (action.f(player, map)) {
        break;
      }
    }
  }

  void _runEnemyActions() {
    for (var enemy in enemies) {
      /// We do not want to simulate actions if the enemy is far away
      if (manhattanDistance(enemy.x, enemy.y, player.x, player.y) >=
          player.visibility * 4) {
        continue;
      }
      for (var action in enemy.actions) {
        if (action.f(enemy, map)) {
          break;
        }
      }
    }
  }
}
