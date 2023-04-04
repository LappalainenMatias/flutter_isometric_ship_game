import 'dart:math';
import 'package:anki/map/map.dart';
import 'character.dart';

class PlayerMover {
  DateTime lastMovement = DateTime.now();
  int movementSpeedMs = 50;
  MapModel map;

  PlayerMover(this.map);

  void _move(int newX, int newY, Character character) {
    /// TODO check if the new position is valid
    /// for example you cannot walk on water
    character.setCoordinate(Point(newX, newY));
  }

  /// Moves the character in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void joyStickMovement(double joyStickX, double joyStickY, Character character) {
    if (movementSpeedMs > DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    lastMovement = DateTime.now();
    double angle = (atan2(joyStickX, joyStickY) * (180 / pi) + 360) % 360;
    int x = character.getCoordinate().x;
    int y = character.getCoordinate().y;
    if (angle > 337.5 || angle < 22.5) {
      _move(x, y + 1, character); // Up
    } else if (angle > 22.5 && angle < 67.5) {
      _move(x + 1, y + 1, character); // Up right
    } else if (angle > 67.5 && angle < 112.5) {
      _move(x + 1, y, character); // Right
    } else if (angle > 112.5 && angle < 157.5) {
      _move(x + 1, y - 1, character); // Down right
    } else if (angle > 157.5 && angle < 202.5) {
      _move(x, y - 1, character); // Down
    } else if (angle > 202.5 && angle < 247.5) {
      _move(x - 1, y - 1, character); // Down left
    } else if (angle > 247.5 && angle < 292.5) {
      _move(x - 1, y, character); // Left
    } else if (angle > 292.5 && angle < 337.5) {
      _move(x - 1, y + 1, character); // Up left
    }
  }

  /// Moves the character in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(double joyStickX, double joyStickY, Character character) {
    if (movementSpeedMs > DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    lastMovement = DateTime.now();
    double angle = (atan2(joyStickX, joyStickY) * (180 / pi) + 360) % 360;
    int x = character.getCoordinate().x;
    int y = character.getCoordinate().y;
    if (angle > 337.5 || angle < 22.5) {
      _move(x + 1, y + 1, character); // Up
    } else if (angle > 22.5 && angle < 67.5) {
      _move(x + 1, y, character); // Up right
    } else if (angle > 67.5 && angle < 112.5) {
      _move(x + 1, y - 1, character); // Right
    } else if (angle > 112.5 && angle < 157.5) {
      _move(x, y - 1, character); // Down right
    } else if (angle > 157.5 && angle < 202.5) {
      _move(x - 1, y - 1, character); // Down
    } else if (angle > 202.5 && angle < 247.5) {
      _move(x - 1, y, character); // Down left
    } else if (angle > 247.5 && angle < 292.5) {
      _move(x - 1, y + 1, character); // Left
    } else if (angle > 292.5 && angle < 337.5) {
      _move(x, y + 1, character); // Up left
    }
  }
}
