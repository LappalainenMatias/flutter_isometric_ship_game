import 'package:flutter/services.dart';

import '../../foundation/coordinates/iso_coordinate.dart';
import '../animation/ship_animation.dart';
import '../game_object/ship.dart';

/// Moves ship according to the delta time and the pressed keys.
class KeyboardShipMover {
  bool _movingUp = false;
  bool _movingDown = false;
  bool _movingLeft = false;
  bool _movingRight = false;
  final Ship ship;
  final double _movementDistance = 50.0;
  final double speedMultiplier = 1;

  KeyboardShipMover(this.ship);

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
      ship.isoCoordinate +=
          IsoCoordinate.fromIso(0, -_movementDistance * speedMultiplier * dt);
    }
    if (_movingDown) {
      ship.isoCoordinate +=
          IsoCoordinate.fromIso(0, _movementDistance * speedMultiplier * dt);
    }
    if (_movingLeft) {
      ship.isoCoordinate +=
          IsoCoordinate.fromIso(-_movementDistance * speedMultiplier * dt, 0);
    }
    if (_movingRight) {
      ship.isoCoordinate +=
          IsoCoordinate.fromIso(_movementDistance * speedMultiplier * dt, 0);
    }
  }

  void _updateAnimation() {
    if (!_movingUp && !_movingDown && !_movingLeft && !_movingRight) {
      return;
    }
    if (_movingUp && _movingRight) {
      ship.animationParts = animationRedShipUpRight;
    } else if (_movingUp && _movingLeft) {
      ship.animationParts = animationRedShipUpLeft;
    } else if (_movingDown && _movingRight) {
      ship.animationParts = animationRedShipDownRight;
    } else if (_movingDown && _movingLeft) {
      ship.animationParts = animationRedShipDownLeft;
    } else if (_movingUp) {
      ship.animationParts = animationRedShipUp;
    } else if (_movingDown) {
      ship.animationParts = animationRedShipDown;
    } else if (_movingLeft) {
      ship.animationParts = animationRedShipLeft;
    } else if (_movingRight) {
      ship.animationParts = animationRedShipRight;
    } else {
      ship.animationParts = animationRedShipUp;
    }
  }

  IsoCoordinate nextCoordinate(double dt) {
    var nextPosition = ship.isoCoordinate;
    if (_movingUp) {
      nextPosition +=
          IsoCoordinate.fromIso(0, -_movementDistance * speedMultiplier * dt);
    }
    if (_movingDown) {
      nextPosition +=
          IsoCoordinate.fromIso(0, _movementDistance * speedMultiplier * dt);
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
