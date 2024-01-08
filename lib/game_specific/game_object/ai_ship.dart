import 'dart:math';

import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/game_specific/dynamic_game_object_manager.dart';
import 'package:anki/game_specific/game_object/cannonball.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import '../movement/joystick_ship_mover.dart';

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
  final int _accuracy = 25; // This value was created by trial and error.
  final double _speed = 20; // This value was created by trial and error.
  late final JoyStickShipMover _joyStickShipMover;

  EnemyAI(this._itself, this._target, this._dynamicGameObjectManager) {
    _joyStickShipMover = JoyStickShipMover(_itself, _speed);
  }

  void update(double dt) {
    if (_closeToPlayer()) {
      if (_isAbleToShoot()) {
        shootCannonball(
          _dynamicGameObjectManager,
          _targetWithInaccuracy(_target.topLeft),
          _itself,
        );
        _lastShot = DateTime.now();
      }
      _moveTowardsPlayer(dt);
    }
  }

  void _moveTowardsPlayer(double dt) {
    var unitVector =
        (_target.topLeft - _itself.getIsoCoordinate()).toUnitVector();
    _joyStickShipMover.updateJoystick(unitVector.isoX, unitVector.isoY);
    var nextCoordinate = _joyStickShipMover.nextCoordinate(dt);
    if (_dynamicGameObjectManager.isAbleToMove(_itself, nextCoordinate)) {
      _joyStickShipMover.move(dt);
    }
  }

  IsoCoordinate _targetWithInaccuracy(IsoCoordinate target) {
    var inaccuracy = Random().nextInt(_accuracy) - _accuracy / 2;
    return target + const IsoCoordinate.fromIso(1, 1) * inaccuracy;
  }

  bool _isAbleToShoot() {
    return DateTime.now().difference(_lastShot) > const Duration(seconds: 1);
  }

  bool _closeToPlayer() {
    return _itself.topLeft.manhattanDistanceTo(_target.topLeft) < 150;
  }
}
