import 'dart:math';
import 'package:anki/map/map.dart';
import 'package:anki/map/map_helper.dart';
import 'character.dart';

class PlayerMover {
  DateTime lastMovement = DateTime.now();
  double movementDistance = 0.2;
  int movementSpeedMs = 15;
  MapModel map;

  PlayerMover(this.map);

  void _move(double newX, double newY, Character character) {
    /// TODO check if the new position is valid
    /// for example you cannot walk on water
    character.setCoordinate(Point(newX, newY));
  }

  /// Moves the character in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void joyStickMovement(
      double joyStickX, double joyStickY, Character character) {
    if (movementSpeedMs >
        DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    lastMovement = DateTime.now();
    double angle = (atan2(joyStickX, joyStickY) * (180 / pi) + 360) % 360;
    double x = character.getCoordinate().x;
    double y = character.getCoordinate().y;
    if (angle > 337.5 || angle < 22.5) {
      // Up
      _move(x, y + movementDistance, character);
    } else if (angle > 22.5 && angle < 67.5) {
      // Up right
      _move(x + movementDistance, y + movementDistance, character);
    } else if (angle > 67.5 && angle < 112.5) {
      // Right
      _move(x + movementDistance, y, character);
    } else if (angle > 112.5 && angle < 157.5) {
      // Down right
      _move(x + movementDistance, y - movementDistance, character);
    } else if (angle > 157.5 && angle < 202.5) {
      // Down
      _move(x, y - movementDistance, character);
    } else if (angle > 202.5 && angle < 247.5) {
      // Down left
      _move(x - movementDistance, y - movementDistance, character);
    } else if (angle > 247.5 && angle < 292.5) {
      // Left
      _move(x - movementDistance, y, character);
    } else if (angle > 292.5 && angle < 337.5) {
      // Up left
      _move(x - movementDistance, y + movementDistance, character);
    }
  }

  /// Moves the character in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(
      double joyStickX, double joyStickY, Character character) {
    if (movementSpeedMs >
        DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    lastMovement = DateTime.now();
    double angle = (atan2(joyStickX, joyStickY) * (180 / pi) + 360) % 360;
    double x = character.getCoordinate().x;
    double y = character.getCoordinate().y;
    double md = movementDistance;
    if (euclideanDistance(0, 0, joyStickX, joyStickY) > 0.5) {
      md = movementDistance * 2;
    }
    if (angle > 337.5 || angle < 22.5) {
      // Up
      _move(x + md, y + md, character);
    } else if (angle > 22.5 && angle < 67.5) {
      // Up right
      _move(x + md, y, character);
    } else if (angle > 67.5 && angle < 112.5) {
      // Right
      _move(x + md, y - md, character);
    } else if (angle > 112.5 && angle < 157.5) {
      // Down right
      _move(x, y - md, character);
    } else if (angle > 157.5 && angle < 202.5) {
      // Down
      _move(x - md, y - md, character);
    } else if (angle > 202.5 && angle < 247.5) {
      // Down left
      _move(x - md, y, character);
    } else if (angle > 247.5 && angle < 292.5) {
      // Left
      _move(x - md, y + md, character);
    } else if (angle > 292.5 && angle < 337.5) {
      // Up left
      _move(x, y + md, character);
    }
  }
}
