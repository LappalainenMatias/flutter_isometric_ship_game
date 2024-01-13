import 'package:anki/game_specific/movement/ship_mover.dart';
import 'package:flutter/services.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../game_object/ship.dart';

/// Moves ship according to the delta time and the pressed keys.
class KeyboardShipMover extends ShipMover {
  bool _movingUp = false;
  bool _movingDown = false;
  bool _movingLeft = false;
  bool _movingRight = false;

  KeyboardShipMover();

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

  @override
  Set<Direction> getMovingDirections() {
    var directions = <Direction>{};
    if (_movingUp) {
      directions.add(Direction.up);
    }
    if (_movingDown) {
      directions.add(Direction.down);
    }
    if (_movingLeft) {
      directions.add(Direction.left);
    }
    if (_movingRight) {
      directions.add(Direction.right);
    }
    return directions;
  }

  @override
  IsoCoordinate nextCoordinate(double dt, Ship ship) {
    var nextCoordinate = ship.getIsoCoordinate().copy();
    var speed = 50;
    if (getMovingDirections().contains(Direction.up)) {
      nextCoordinate += IsoCoordinate.fromIso(0, -speed * dt);
    }
    if (getMovingDirections().contains(Direction.down)) {
      nextCoordinate += IsoCoordinate.fromIso(0, speed * dt);
    }
    if (getMovingDirections().contains(Direction.left)) {
      nextCoordinate += IsoCoordinate.fromIso(-speed * dt, 0);
    }
    if (getMovingDirections().contains(Direction.right)) {
      nextCoordinate += IsoCoordinate.fromIso(speed * dt, 0);
    }
    return nextCoordinate;
  }
}
