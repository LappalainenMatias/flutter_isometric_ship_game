import '../coordinates/iso_coordinate.dart';
import '../game_objects/dynamic/player.dart';

class JoyStickPlayerMover {
  final Player player;
  final double _movementDistance = 5.0;
  final double speedMultiplier = 30.0;
  double joystickX = 0;
  double joystickY = 0;

  JoyStickPlayerMover(this.player);

  void updateJoystick(double x, double y) {
    joystickX = x;
    joystickY = y;
  }

  /// (0, 1) = up, (-1, 0) = left.
  void move(double dt) {
    player.isoCoordinate += IsoCoordinate.fromIso(
        joystickX * _movementDistance * speedMultiplier * dt,
        joystickY * _movementDistance * speedMultiplier * dt);
  }
}
