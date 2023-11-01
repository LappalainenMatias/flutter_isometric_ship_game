import 'package:flutter/services.dart';

import '../coordinates/iso_coordinate.dart';
import '../game_objects/dynamic/player.dart';

/// Moves player according to the delta time and the pressed keys.
class KeyboardPlayerMover {
  bool _movingUp = false;
  bool _movingDown = false;
  bool _movingLeft = false;
  bool _movingRight = false;
  final Player player;
  final double _movementDistance = 5.0;
  final double speedMultiplier = 10.0;

  KeyboardPlayerMover(this.player);

  void pressed(LogicalKeyboardKey logicalKey) {
    if (logicalKey == LogicalKeyboardKey.keyW) {
      _movingUp = true;
    }
    if (logicalKey == LogicalKeyboardKey.keyS) {
      _movingDown = true;
    }
    if (logicalKey == LogicalKeyboardKey.keyA) {
      _movingLeft = true;
    }
    if (logicalKey == LogicalKeyboardKey.keyD) {
      _movingRight = true;
    }
  }

  void unPressed(LogicalKeyboardKey logicalKey) {
    if (logicalKey == LogicalKeyboardKey.keyW) {
      _movingUp = false;
    }
    if (logicalKey == LogicalKeyboardKey.keyS) {
      _movingDown = false;
    }
    if (logicalKey == LogicalKeyboardKey.keyA) {
      _movingLeft = false;
    }
    if (logicalKey == LogicalKeyboardKey.keyD) {
      _movingRight = false;
    }
  }

  /// (0, 1) = up, (-1, 0) = left.
  void move(double dt) {
    if (_movingUp) {
      player.isoCoordinate +=
          IsoCoordinate.fromIso(0, _movementDistance * speedMultiplier * dt);
    }
    if (_movingDown) {
      player.isoCoordinate +=
          IsoCoordinate.fromIso(0, -_movementDistance * speedMultiplier * dt);
    }
    if (_movingLeft) {
      player.isoCoordinate +=
          IsoCoordinate.fromIso(-_movementDistance * speedMultiplier * dt, 0);
    }
    if (_movingRight) {
      player.isoCoordinate +=
          IsoCoordinate.fromIso(_movementDistance * speedMultiplier * dt, 0);
    }
  }
}