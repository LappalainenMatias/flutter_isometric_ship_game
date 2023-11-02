import 'dart:math';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import '../../collision/collision_box.dart';

class Missile extends DynamicGameObject {
  List<CollisionAction> collisionActions = [];
  IsoCoordinate isoCoordinate = const IsoCoordinate(0, 0);
  Projectile? projectile;
  double elevation = 0.0;
  double width;
  bool isDestroyed = false;
  late CollisionBox collisionBox;

  Missile(this.isoCoordinate, this.elevation, this.width) {
    collisionBox = CollisionBox(isoCoordinate, width, width, elevation);
  }

  @override
  List gameObjectToList() {
    throw UnimplementedError();
  }

  @override
  double getElevation() {
    return elevation;
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return isoCoordinate;
  }

  @override
  DrawingDTO getDrawingData() {
    // Missiles move a lot and because of that we create a new drawingDTO every frame.
    return MissileToDrawingDTO.create(this);
  }

  @override
  void update(double dt) {
    projectile?.update(dt, this);
  }

  void addProjectile(Projectile projectile) {
    this.projectile = projectile;
  }

  @override
  bool isUnderWater() {
    return elevation < 0;
  }

  @override
  bool isVisible() {
    return true;
  }

  @override
  ({double distance, double elevation}) nearness() {
    Point point = isoCoordinate.toPoint();
    return (
      distance: -1 * (point.x + point.y + width).toDouble(),
      elevation: elevation
    );
  }

  @override
  void setVisibility(bool isVisible) {
    // Does nothing because missiles are always visible until they are destroyed.
  }

  @override
  CollisionBox getCollisionBox() {
    // We update collision box every frame because missiles move a lot.
    collisionBox.update(isoCoordinate, width, width, elevation);
    return collisionBox;
  }

  @override
  List<CollisionAction> getCollisionActions() {
    return collisionActions;
  }
}

class Projectile {
  /// Missile moves to this direction
  IsoCoordinate unitVector;
  double speed;
  Projectile(this.unitVector, [this.speed = 50]);
  void update(double dt, Missile missile) {
    missile.isoCoordinate += unitVector * dt * speed;
  }
}
