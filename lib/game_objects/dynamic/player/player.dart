import 'dart:convert';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../collision/collision_box.dart';
import '../../game_object.dart';
import 'dart:math';

import '../../game_objects_to_vertices.dart';

class Player extends GameObject {
  double elevation;
  IsoCoordinate isoCoordinate;
  final playerMover = PlayerMover();
  Player(this.isoCoordinate, this.elevation);

  factory Player.fromString(String json) {
    final data = jsonDecode(json);
    List<String> isoCoordinateData = data['isoCoordinate']!.split(',');
    return Player(
      IsoCoordinate.fromIso(
        double.parse(isoCoordinateData[0]),
        double.parse(isoCoordinateData[1]),
      ),
      data['elevation'] as double,
    );
  }

  @override
  getVertices() {
    return PlayerToVertices.toVertices(isoCoordinate, elevation);
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
    playerMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  @override
  bool isDynamic() {
    return false;
  }

  @override
  CollisionBox? getCollisionBox() {
    return CollisionBox(isoCoordinate, 2.0, 2.0);
  }

  @override
  String encode() {
    return jsonEncode({
      'gameObjectType': 'Player',
      'elevation': elevation,
      'isoCoordinate': '${isoCoordinate.isoX},${isoCoordinate.isoY}',
    });
  }

  _getWidth() {
    return 1.0;
  }
}

/// Todo we now have two movers. BoatMover and CameraMover which are the same
class PlayerMover {
  final double _movementDistance = 50.0;

  /// Moves the Boat in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left. Notice that the map is isometric which means that
  /// moving up in the map increases both the x and y coordinate
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
