import 'dart:typed_data';

import '../../foundation/coordinates/iso_coordinate.dart';
import '../animation/ship_animation.dart';
import '../game_object/ship.dart';

abstract class ShipMover {
  void update(double dt) {
    _setCorrectAnimation();
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

  void _setCorrectAnimation() {
    if (getMovingDirections().isEmpty) {
      return;
    }
    var movingUp = getMovingDirections().contains(Direction.up);
    var movingDown = getMovingDirections().contains(Direction.down);
    var movingLeft = getMovingDirections().contains(Direction.left);
    var movingRight = getMovingDirections().contains(Direction.right);
    if (movingUp && movingRight) {
      getShip().animationParts = getAnimationUpRight();
    } else if (movingUp && movingLeft) {
      getShip().animationParts = getAnimationUpLeft();
    } else if (movingDown && movingRight) {
      getShip().animationParts = getAnimationDownRight();
    } else if (movingDown && movingLeft) {
      getShip().animationParts = getAnimationDownLeft();
    } else if (movingUp) {
      getShip().animationParts = getAnimationUp();
    } else if (movingDown) {
      getShip().animationParts = getAnimationDown();
    } else if (movingLeft) {
        getShip().animationParts = getAnimationLeft();
    } else if (movingRight) {
      getShip().animationParts = getAnimationRight();
    } else {
      getShip().animationParts = getAnimationUp();
    }
  }

  Ship getShip();

  Set<Direction> getMovingDirections();

  IsoCoordinate nextCoordinate(double dt);
}

enum Direction {
  up,
  right,
  down,
  left,
}
