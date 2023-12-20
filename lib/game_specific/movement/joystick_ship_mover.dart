import '../../foundation/coordinates/iso_coordinate.dart';
import '../game_object/ship.dart';

class JoyStickShipMover {
  final Ship ship;
  final double _movementDistance = 5.0;
  final double speedMultiplier = 30.0;
  double joystickX = 0;
  double joystickY = 0;

  JoyStickShipMover(this.ship);

  void updateJoystick(double x, double y) {
    joystickX = x;
    joystickY = y;
  }

  /// (0, 1) = up, (-1, 0) = left.
  void move(double dt) {
    ship.isoCoordinate += IsoCoordinate.fromIso(
        joystickX * _movementDistance * speedMultiplier * dt,
        joystickY * _movementDistance * speedMultiplier * dt);
  }
}
