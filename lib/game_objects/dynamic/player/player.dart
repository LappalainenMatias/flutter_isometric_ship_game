import 'package:anki/coordinates/iso_coordinate.dart';
import '../../../collision/collision_box.dart';
import '../../game_object.dart';
import 'dart:math';

import '../../game_objects_to_vertices.dart';

class Player extends GameObject {
  double elevation;

  /// Notice that this not the screen coordinate because elevation affects it
  IsoCoordinate isoCoordinate;
  final playerMover = PlayerMover();

  Player(this.isoCoordinate, this.elevation);

  @override
  getVertices() {
    return PlayerToVertices.toVertices(this);
  }

  @override
  double nearness() {
    Point point = isoCoordinate.toPoint();
    return -1 * (point.x + point.y + _getWidth() - elevation).toDouble();
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }

  void move(double joyStickX, double joyStickY) {
    playerMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  @override
  bool isDynamic() {
    return true;
  }

  @override
  CollisionBox getCollisionBox() {
    return CollisionBox(isoCoordinate, _getWidth(), _getWidth());
  }

  double _getWidth() {
    return 1.0;
  }

  @override
  List gameObjectToList() {
    // TODO: implement
    throw UnimplementedError();
  }
}

/// Todo we now have two movers. CameraMover and PlayerMover which are the same
class PlayerMover {
  final double _movementDistance = 5.0;

  /// (0, 1) = up, (-1, 0) = left.
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Player player,
  ) {
    player.isoCoordinate = IsoCoordinate.fromIso(
        player.isoCoordinate.isoX + joyStickX * _movementDistance,
        player.isoCoordinate.isoY + joyStickY * _movementDistance);
  }
}
