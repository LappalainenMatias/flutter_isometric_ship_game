import 'dart:math';
import 'package:anki/map/iso_coordinate.dart';
import 'camera.dart';

class CameraMover {
  double movementDistance = 0.001;

  void _move(double newX, double newY, Camera camera) {
    camera.centralize(IsoCoordinate(newX, newY));
  }

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Camera camera,
  ) {
    double angle = (atan2(joyStickX, joyStickY) * (180 / pi) + 360) % 360;
    double x = camera.center.x;
    double y = camera.center.y;
    double md = movementDistance * camera.width;
    if (euclideanDistance(0, 0, joyStickX, joyStickY) > 0.5) {
      md = md * 2;
    }
    if (angle > 337.5 || angle < 22.5) {
      // Up
      _move(x + md, y + md, camera);
    } else if (angle > 22.5 && angle < 67.5) {
      // Up right
      _move(x + md, y, camera);
    } else if (angle > 67.5 && angle < 112.5) {
      // Right
      _move(x + md, y - md, camera);
    } else if (angle > 112.5 && angle < 157.5) {
      // Down right
      _move(x, y - md, camera);
    } else if (angle > 157.5 && angle < 202.5) {
      // Down
      _move(x - md, y - md, camera);
    } else if (angle > 202.5 && angle < 247.5) {
      // Down left
      _move(x - md, y, camera);
    } else if (angle > 247.5 && angle < 292.5) {
      // Left
      _move(x - md, y + md, camera);
    } else if (angle > 292.5 && angle < 337.5) {
      // Up left
      _move(x, y + md, camera);
    }
  }

  double euclideanDistance(double x1, double y1, double x2, double y2) {
    return sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }
}
