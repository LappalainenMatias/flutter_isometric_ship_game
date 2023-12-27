import 'dart:math';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/game_specific/movement/ship_mover.dart';
import '../game_object/ship.dart';

class JoyStickShipMover extends ShipMover {
  final Ship _ship;
  final double _maxSpeed = 50;
  double _joystickX = 0;
  double _joystickY = 0;
  bool _movingUp = false;
  bool _movingDown = false;
  bool _movingLeft = false;
  bool _movingRight = false;

  JoyStickShipMover(this._ship);

  /// (0,0) = center, (1, 0) = right.
  void updateJoystick(double x, double y) {
    _joystickX = x;
    _joystickY = y;
    if (x.abs() + y.abs() < 0.02) {
      // We do not udpate moving direction for small values because that would
      // flip the the animation when we let go of the joystick.
      return;
    }
    var angle = atan2(_joystickY, _joystickX);
    if (angle >= -pi / 8 && angle < pi / 8) {
      // Moving Right
      _movingRight = true;
      _movingLeft = false;
      _movingUp = false;
      _movingDown = false;
    } else if (angle >= pi / 8 && angle < 3 * pi / 8) {
      // Moving Down-Right
      _movingRight = true;
      _movingLeft = false;
      _movingUp = false;
      _movingDown = true;
    } else if (angle >= 3 * pi / 8 && angle < 5 * pi / 8) {
      // Moving down
      _movingRight = false;
      _movingLeft = false;
      _movingUp = false;
      _movingDown = true;
    } else if (angle >= 5 * pi / 8 && angle < 7 * pi / 8) {
      // Moving down-Left
      _movingRight = false;
      _movingLeft = true;
      _movingUp = false;
      _movingDown = true;
    } else if (angle >= 7 * pi / 8 || angle < -7 * pi / 8) {
      // Moving Left
      _movingRight = false;
      _movingLeft = true;
      _movingUp = false;
      _movingDown = false;
    } else if (angle >= -7 * pi / 8 && angle < -5 * pi / 8) {
      // Moving up-Left
      _movingRight = false;
      _movingLeft = true;
      _movingUp = true;
      _movingDown = false;
    } else if (angle >= -5 * pi / 8 && angle < -3 * pi / 8) {
      // Moving up
      _movingRight = false;
      _movingLeft = false;
      _movingUp = true;
      _movingDown = false;
    } else if (angle >= -3 * pi / 8 && angle < -pi / 8) {
      // Moving up-Right
      _movingRight = true;
      _movingLeft = false;
      _movingUp = true;
      _movingDown = false;
    }
  }

  @override
  IsoCoordinate nextCoordinate(double dt) {
    var copy = _ship.getIsoCoordinate().copy();
    var speed = min(
        sqrt(_joystickX * _joystickX + _joystickY * _joystickY) * _maxSpeed,
        _maxSpeed);
    copy += IsoCoordinate.fromIso(speed * _joystickX * dt, speed * _joystickY * dt);
    return copy;
  }

  @override
  Set<Direction> getMovingDirections() {
    var directions = <Direction>{};
    if (_movingUp) {
      directions.add(Direction.up);
    }
    if (_movingDown) {
      directions.add(Direction.down);
    }
    if (_movingLeft) {
      directions.add(Direction.left);
    }
    if (_movingRight) {
      directions.add(Direction.right);
    }
    return directions;
  }

  @override
  Ship getShip() {
    return _ship;
  }
}
