import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import 'camera.dart';

class CameraMover {
  final double _movementDistance = 0.01;

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Camera camera,
  ) {
    camera.center = IsoCoordinate.fromIso(
      camera.center.isoX + joyStickX * _movementDistance * camera.width(),
      camera.center.isoY + joyStickY * _movementDistance * camera.width()
    );
  }
}
