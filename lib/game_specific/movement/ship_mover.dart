import '../../foundation/coordinates/iso_coordinate.dart';
import '../animation/ship_animation.dart';
import '../game_object/ship.dart';

abstract class ShipMover {
  /// (0, 1) = up, (-1, 0) = left.
  void move(double dt) {
    setCorrectAnimation();
    getShip().topLeft = nextCoordinate(dt);
  }

  void setCorrectAnimation() {
    if (getMovingDirections().isEmpty) {
      return;
    }
    var movingUp = getMovingDirections().contains(Direction.up);
    var movingDown = getMovingDirections().contains(Direction.down);
    var movingLeft = getMovingDirections().contains(Direction.left);
    var movingRight = getMovingDirections().contains(Direction.right);
    if (movingUp && movingRight) {
      getShip().animationParts = animationRedShipUpRight;
    } else if (movingUp && movingLeft) {
      getShip().animationParts = animationRedShipUpLeft;
    } else if (movingDown && movingRight) {
      getShip().animationParts = animationRedShipDownRight;
    } else if (movingDown && movingLeft) {
      getShip().animationParts = animationRedShipDownLeft;
    } else if (movingUp) {
      getShip().animationParts = animationRedShipUp;
    } else if (movingDown) {
      getShip().animationParts = animationRedShipDown;
    } else if (movingLeft) {
      getShip().animationParts = animationRedShipLeft;
    } else if (movingRight) {
      getShip().animationParts = animationRedShipRight;
    } else {
      getShip().animationParts = animationRedShipUp;
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
