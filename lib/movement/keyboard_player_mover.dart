import 'package:anki/animation/animation.dart';
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
  final double _movementDistance = 50.0;
  final double speedMultiplier = 1;

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
    _updateAnimation();
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

  void _updateAnimation() {
    if (!_movingUp && !_movingDown && !_movingLeft && !_movingRight) {
      return;
    }
    if (_movingUp && _movingRight) {
      player.animation = redShipUpRight;
    } else if (_movingUp && _movingLeft) {
      player.animation = redShipUpLeft;
    } else if (_movingDown && _movingRight) {
      player.animation = redShipDownRight;
    } else if (_movingDown && _movingLeft) {
      player.animation = redShipDownLeft;
    } else if (_movingUp) {
      player.animation = redShipUp;
    } else if (_movingDown) {
      player.animation = redShipDown;
    } else if (_movingLeft) {
      player.animation = redShipLeft;
    } else if (_movingRight) {
      player.animation = redShipRight;
    } else {
      player.animation = redShipUp;
    }
  }

  IsoCoordinate nextCoordinate(double dt) {
    var nextPosition = player.isoCoordinate;
    if (_movingUp) {
      nextPosition +=
          IsoCoordinate.fromIso(0, _movementDistance * speedMultiplier * dt);
    }
    if (_movingDown) {
      nextPosition +=
          IsoCoordinate.fromIso(0, -_movementDistance * speedMultiplier * dt);
    }
    if (_movingLeft) {
      nextPosition +=
          IsoCoordinate.fromIso(-_movementDistance * speedMultiplier * dt, 0);
    }
    if (_movingRight) {
      nextPosition +=
          IsoCoordinate.fromIso(_movementDistance * speedMultiplier * dt, 0);
    }
    return nextPosition;
  }
}
