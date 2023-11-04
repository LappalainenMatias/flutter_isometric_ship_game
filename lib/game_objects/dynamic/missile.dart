import 'dart:math';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:anki/mixin/damage.dart';
import '../../collision/collision_box.dart';

class Missile extends DynamicGameObject with Damage {
  late final CollisionAction? collisionAction;
  IsoCoordinate isoCoordinate = const IsoCoordinate(0, 0);
  Projectile? projectile;
  double elevation = 0.0;
  double width;
  late CollisionBox collisionBox;

  Missile(this.isoCoordinate, this.elevation, this.width) {
    collisionBox = CollisionBox(isoCoordinate, width, elevation);
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
    collisionBox.update(isoCoordinate, width, elevation);
    return collisionBox;
  }

  @override
  CollisionAction? getCollisionAction() {
    return collisionAction;
  }
}

class Projectile {
  /// Missile moves to this direction
  IsoCoordinate unitVector;
  double speed;

  /// Makes sure that missiles don't fly forever
  double flyingTime = 5;

  Projectile(this.unitVector, [this.speed = 100]);

  void update(double dt, Missile missile) {
    if (flyingTime <= 0) {
      missile.destroy = true;
      return;
    }
    flyingTime -= dt;
    missile.isoCoordinate += unitVector * dt * speed;
  }
}
