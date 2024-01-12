import 'dart:math';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/game_specific/game_object/cannonball.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/noise/noise.dart';
import '../movement/joystick_ship_mover.dart';

/// Moves towards the target and starts shooting when the target is close enough.
class BasicAIShip extends Ship {
  final Ship _target;
  final int _accuracy = 10; // This value was created by trial and error.
  final double _speed = 20; // This value was created by trial and error.

  BasicAIShip(
    super.topLeft,
    super.elevation,
    super.id,
    super.gameMap,
    this._target,
  ) {
    shipMover = JoyStickShipMover(this, _speed);
  }

  @override
  void update(double dt) {
    super.update(dt);
    _logic(dt);
  }

  void _logic(double dt) {
    if (_isCloseToTarget() && _canSeeTarget()) {
      if (isAbleToShoot()) {
        shootCannonball(
          gameMap,
          _targetWithInaccuracy(_target.getIsoCoordinate()),
          this,
        );
      }
      _moveTowards(dt, _target.getIsoCoordinate());
    }
  }

  void _moveTowards(double dt, IsoCoordinate coordinate) {
    var unitVector = (coordinate - getIsoCoordinate()).toUnitVector();
    // Currently all ai ships uses the joystick ship mover.
    (shipMover as JoyStickShipMover)
        .setJoystick(unitVector.isoX, unitVector.isoY);
  }

  IsoCoordinate _targetWithInaccuracy(IsoCoordinate target) {
    var inaccuracy = Random().nextInt(_accuracy) - _accuracy / 2;
    return target + const IsoCoordinate.fromIso(1, 1) * inaccuracy;
  }

  bool _isCloseToTarget() {
    return getIsoCoordinate().manhattanDistanceTo(_target.getIsoCoordinate()) <
        150;
  }

  bool _canSeeTarget() {
    return !NoiseCreator().isLineOfSightBlocked(
      getElevation(),
      getIsoCoordinate().toPoint(),
      _target.getIsoCoordinate().toPoint(),
    );
  }
}

/// Follows path and shoots when the target is in sight.
class FollowPathAIShip extends BasicAIShip {
  bool _movingUpInPath = true;
  int _currentPathIndex = 0;
  final List<IsoCoordinate> _path;

  FollowPathAIShip(super.topLeft, super.elevation, super.id, super._target,
      super.gameMap, this._path);

  @override
  void _logic(double dt) {
    if (_isCloseToTarget() && _canSeeTarget() && isAbleToShoot()) {
      shootCannonball(
        gameMap,
        _targetWithInaccuracy(_target.getIsoCoordinate()),
        this,
      );
    }
    if (_isCloseToPathPoint()) {
      if (_currentPathIndex == _path.length - 1) {
        _movingUpInPath = false;
      } else if (_currentPathIndex == 0) {
        _movingUpInPath = true;
      }

      if (_movingUpInPath) {
        _currentPathIndex++;
      } else {
        _currentPathIndex--;
      }
    }
    _moveTowards(dt, _path[_currentPathIndex]);
  }

  bool _isCloseToPathPoint() {
    return getIsoCoordinate().manhattanDistanceTo(_path[_currentPathIndex]) < 1;
  }
}
