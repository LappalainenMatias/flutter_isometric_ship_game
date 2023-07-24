import 'dart:convert';

import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/utils/iso_coordinate.dart';

import '../../../../../utils/collision_box.dart';
import 'create_boat.dart';
import 'dart:math';

class Boat extends GameObject {
  double elevation;
  IsoCoordinate isoCoordinate;
  final boatMover = BoatMover();
  Boat(this.isoCoordinate, this.elevation);

  factory Boat.fromString(String json) {
    final data = jsonDecode(json);
    List<String> isoCoordinateData = data['isoCoordinate']!.split(',');
    return Boat(
      IsoCoordinate.fromIso(
        double.parse(isoCoordinateData[0]),
        double.parse(isoCoordinateData[1]),
      ),
      data['elevation'] as double,
    );
  }

  @override
  getVertices() {
    return CreateBoat().positionsAndColors(isoCoordinate, elevation);
  }

  @override
  double nearness() {
    Point point = isoCoordinate.toPoint();
    return -1 * (point.x + point.y + _getWidth()).toDouble();
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

  @override
  CollisionBox? getCollisionBox() {
    return CollisionBox(isoCoordinate, 2.0, 2.0);
  }

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'Boat',
      'elevation': elevation,
      'isoCoordinate': '${isoCoordinate.isoX},${isoCoordinate.isoY}',
    });
  }

  _getWidth() {
    return 1.0;
  }
}

/// Todo we now have two movers. BoatMover and CameraMover which are the same
class BoatMover {
  final double _movementDistance = 5.0;

  /// Moves the Boat in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
  void joyStickIsometricMovement(
    double joyStickX,
    double joyStickY,
    Boat boat,
  ) {
    boat.isoCoordinate = IsoCoordinate.fromIso(
        boat.isoCoordinate.isoX + joyStickX * _movementDistance,
        boat.isoCoordinate.isoY + joyStickY * _movementDistance);
  }
}
