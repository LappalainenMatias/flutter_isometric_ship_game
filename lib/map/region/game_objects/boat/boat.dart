import 'package:anki/map/region/game_objects/boat/create_boat.dart';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'dart:math';

class Boat extends GameObject {
  double elevation;
  IsoCoordinate coordinate;
  final boatMover = BoatMover();

  Boat(this.coordinate, this.elevation);

  @override
  getVertices() {
    return CreateBoat().positionsAndColors(coordinate.toPoint(), elevation);
  }

  @override
  double nearness() {
    Point<double> point = coordinate.toPoint();
    return point.x + point.y + 1;
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }

  void move(double joyStickX, double joyStickY) {
    boatMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  @override
  bool isDynamic() {
    return true;
  }
}

/// Todo we now have two movers. BoatMover and CameraMover which are the same
class BoatMover {
  final double _movementDistance = 1.0;

  /// Moves the Boat in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Boat boat,
  ) {
    boat.coordinate = IsoCoordinate.fromIso(
        boat.coordinate.isoX + joyStickX * _movementDistance,
        boat.coordinate.isoY + joyStickY * _movementDistance);
  }
}
