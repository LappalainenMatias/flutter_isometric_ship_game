import 'package:anki/game_specific/dynamic_game_object_manager.dart';
import 'package:anki/game_specific/game_object/cannonball.dart';
import 'package:anki/game_specific/game_object/ship.dart';

class AIShip extends Ship {
  late final EnemyAI enemyAI;

  AIShip(
    DynamicGameObjectManager dynamicGameObjectManager,
    Ship target,
    super.topLeft,
    super.elevation,
    super.id,
  ) {
    enemyAI = EnemyAI(this, target, dynamicGameObjectManager);
  }
  
  @override
  void update(double dt) {
    super.update(dt);
    enemyAI.update(dt);
  }
}

class EnemyAI {
  DateTime _lastShot = DateTime.now();
  final DynamicGameObjectManager _dynamicGameObjectManager;
  final Ship _itself;
  final Ship _target;

  EnemyAI(this._itself, this._target, this._dynamicGameObjectManager);

  void update(double dt) {
    if (_closeToPlayer() && _canShoot()) {
      shootCannonball(
        _dynamicGameObjectManager,
        _target.getIsoCoordinate(),
        _itself,
      );
      _lastShot = DateTime.now();
    }
  }
  
  bool _canShoot() {
    return DateTime.now().difference(_lastShot) > const Duration(seconds: 1);
  }

  bool _closeToPlayer() {
    return _itself.topLeft.manhattanDistanceTo(_target.topLeft) < 100;
  }
}
