import 'package:anki/coordinates/iso_coordinate.dart';
import 'camera.dart';

class CameraMover {
  final double _movementDistance = 0.01;

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left.
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Camera camera,
  ) {
    camera.center = IsoCoordinate.fromIso(
      camera.center.isoX + joyStickX * _movementDistance * camera.width(),
      camera.center.isoY + joyStickY * _movementDistance * camera.width(),
    );
  }
}
