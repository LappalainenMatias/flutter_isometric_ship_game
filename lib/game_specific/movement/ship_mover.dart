import 'dart:typed_data';

import '../../foundation/coordinates/iso_coordinate.dart';
import '../animation/ship_animation.dart';
import '../game_object/ship.dart';

abstract class ShipMover {
  void update(double dt, Ship ship) {
    _setCorrectAnimation(ship);
  }

  List<Float32List> getAnimationUp() {
    return animationRedShipUp;
  }

  List<Float32List> getAnimationDown() {
    return animationRedShipDown;
  }

  List<Float32List> getAnimationLeft() {
    return animationRedShipLeft;
  }

  List<Float32List> getAnimationRight() {
    return animationRedShipRight;
  }

  List<Float32List> getAnimationUpLeft() {
    return animationRedShipUpLeft;
  }

  List<Float32List> getAnimationUpRight() {
    return animationRedShipUpRight;
  }

  List<Float32List> getAnimationDownLeft() {
    return animationRedShipDownLeft;
  }

  List<Float32List> getAnimationDownRight() {
    return animationRedShipDownRight;
  }

  void _setCorrectAnimation(Ship ship) {
    if (getMovingDirections().isEmpty) {
      return;
    }
    var movingUp = getMovingDirections().contains(Direction.up);
    var movingDown = getMovingDirections().contains(Direction.down);
    var movingLeft = getMovingDirections().contains(Direction.left);
    var movingRight = getMovingDirections().contains(Direction.right);
    if (movingUp && movingRight) {
      ship.animationParts = getAnimationUpRight();
    } else if (movingUp && movingLeft) {
      ship.animationParts = getAnimationUpLeft();
    } else if (movingDown && movingRight) {
      ship.animationParts = getAnimationDownRight();
    } else if (movingDown && movingLeft) {
      ship.animationParts = getAnimationDownLeft();
    } else if (movingUp) {
      ship.animationParts = getAnimationUp();
    } else if (movingDown) {
      ship.animationParts = getAnimationDown();
    } else if (movingLeft) {
      ship.animationParts = getAnimationLeft();
    } else if (movingRight) {
      ship.animationParts = getAnimationRight();
    } else {
      ship.animationParts = getAnimationUp();
    }
  }

  Set<Direction> getMovingDirections();

  IsoCoordinate nextCoordinate(double dt, Ship ship);
}

enum Direction {
  up,
  right,
  down,
  left,
}
