import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../collision/collision_box.dart';
import '../../dto/drawing_dto.dart';
import '../game_object.dart';
import 'dart:math';
import '../game_objects_to_vertices.dart';

class Player extends DynamicGameObject {
  IsoCoordinate isoCoordinate;
  final playerMover = PlayerMover();
  bool isColliding = false;
  double elevation;
  late CollisionBox collisionBox;
  CollisionAction? collisionAction;
  double sideWidth = 1;
  bool _isVisible = true;
  late DrawingDTO dto;

  Player(this.isoCoordinate, this.elevation) {
    collisionBox = CollisionBox(isoCoordinate, sideWidth, sideWidth, elevation);
    dto = PlayerToDrawingDTO.create(this);
  }

  @override
  getDrawingData() {
    return dto;
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + 1).toDouble(),
      elevation: elevation
    );
  }

  @override
  isUnderWater() {
    return elevation < 0;
  }

  void move(double joyStickX, double joyStickY,
      [double speedMultiplier = 1.0]) {
    playerMover.joyStickIsometricMovement(
        joyStickX, joyStickY, this, speedMultiplier);
  }

  @override
  CollisionBox getCollisionBox() {
    collisionBox.update(isoCoordinate, sideWidth, sideWidth, elevation);
    return collisionBox;
  }

  @override
  List gameObjectToList() {
    // TODO: if we implement this then the game becomes savable because we can save
    // all the game objects as a list of values
    throw UnimplementedError();
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  bool isVisible() {
    return _isVisible;
  }

  @override
  void setVisibility(bool isVisible) {
    _isVisible = isVisible;
  }

  void addCollisionAction(CollisionAction collisionAction) {
    this.collisionAction = collisionAction;
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  void update() {
    dto = PlayerToDrawingDTO.create(this);
  }
}

/// Todo we now have two movers. CameraMover and PlayerMover which are the same
class PlayerMover {
  final double _movementDistance = 5.0;

  /// (0, 1) = up, (-1, 0) = left.
  void joyStickIsometricMovement(double joyStickX, double joyStickY,
      Player player, double speedMultiplier) {
    player.isoCoordinate = IsoCoordinate.fromIso(
        player.isoCoordinate.isoX +
            joyStickX * _movementDistance * speedMultiplier,
        player.isoCoordinate.isoY +
            joyStickY * _movementDistance * speedMultiplier);
  }
}
