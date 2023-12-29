import 'dart:math';
import 'package:anki/foundation/animation/animation.dart';
import 'package:anki/game_specific/animation/canon_animation.dart';

import '../../foundation/collision/collision_action.dart';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/health_and_damage/damage.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import 'game_object_to_rendering_data.dart';
import '../../foundation/game_object/game_object.dart';

class Missile extends DynamicGameObject
    with Damage, CollisionAction, Animation {
  IsoCoordinate isoCoordinate = const IsoCoordinate(0, 0);
  Projectile projectile;
  double elevation = 0.0;
  double width;
  bool _isVisible = true;
  late CollisionBox collisionBox;
  final int _id;

  Missile(
    this.isoCoordinate,
    this.elevation,
    this.width,
    this.projectile,
    this._id,
  ) {
    animationParts = animationCanonBall;
    animationLengthInSeconds = 0.25;
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
  RenderingData getDrawingData() {
    // Missiles move a lot and because of that we create a new drawingDTO every frame.
    return MissileToDrawingDTO.create(this);
  }

  @override
  void update(double dt) {
    projectile.update(dt, this);
  }

  @override
  bool isVisible() {
    return _isVisible;
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
    _isVisible = isVisible;
  }

  @override
  CollisionBox getCollisionBox() {
    // We update collision box every frame because missiles move a lot.
    collisionBox.update(isoCoordinate, width, elevation);
    return collisionBox;
  }

  @override
  int getId() {
    return _id;
  }

  static defaultMissile(int id) {
    return Missile(const IsoCoordinate(0, 0), 0, 0,
        Projectile(const IsoCoordinate(0, 0)), id);
  }
}

class Projectile {
  /// Missile moves to this direction
  IsoCoordinate unitVector;
  double speed;

  /// Makes sure that missiles don't fly forever
  double flyingTime = 5;

  Projectile(this.unitVector, [this.speed = 80]);

  void update(double dt, Missile missile) {
    if (flyingTime <= 0) {
      missile.destroy = true;
      return;
    }
    flyingTime -= dt;
    missile.isoCoordinate += unitVector * dt * speed;
  }
}
