import 'dart:math';
import 'package:anki/foundation/animation/animation.dart';
import 'package:anki/game_specific/animation/canonball_animation.dart';
import 'package:anki/game_specific/dynamic_game_object_manager.dart';
import 'package:anki/game_specific/game_object/ship.dart';

import '../../foundation/collision/collision_action.dart';
import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/health_and_damage/damage.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../../foundation/utils/random_id.dart';
import 'game_object_to_rendering_data.dart';
import '../../foundation/game_object/game_object.dart';

class Cannonball extends DynamicGameObject
    with Damage, CollisionAction, Animation {
  IsoCoordinate isoCoordinate = const IsoCoordinate(0, 0);
  Projectile projectile;
  double elevation = 0.0;
  double width;
  bool _isVisible = true;
  late CollisionBox collisionBox;
  final int _id;

  Cannonball(
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
    // Cannonballs move a lot and because of that we create a new rendering data every frame.
    return CannonballToDrawingDTO.create(this);
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
    // We update collision box every frame because cannonballs move a lot.
    collisionBox.update(isoCoordinate, width, elevation);
    return collisionBox;
  }

  @override
  int getId() {
    return _id;
  }

  static defaultCannonball(int id) {
    return Cannonball(const IsoCoordinate(0, 0), 0, 0,
        Projectile(const IsoCoordinate(0, 0)), id);
  }
}

class Projectile {
  /// cannonball moves to this direction
  IsoCoordinate unitVector;
  double speed;

  /// Makes sure that cannonballs don't fly forever
  double flyingTime = 5;

  Projectile(this.unitVector, [this.speed = 80]);

  void update(double dt, Cannonball cannonball) {
    if (flyingTime <= 0) {
      cannonball.destroy = true;
      return;
    }
    flyingTime -= dt;
    cannonball.isoCoordinate += unitVector * dt * speed;
  }
}

/// Shoots a cannonball from a ship to a target
/// angleRange is used to make shooting more random
void shootCannonball(DynamicGameObjectManager dynamicGameObjectManager,
    IsoCoordinate target, Ship shooter, [double angleRange = 0]) {
  var unitVectorFromPlayerToTarget = (target - shooter.topLeft).toUnitVector();
  var cannonball = Cannonball(
    shooter.getIsoCoordinate(),
    shooter.elevation,
    1,
    Projectile(unitVectorFromPlayerToTarget),
    getRandomId(),
  );

  // Define what happens in collisions
  cannonball.actionTypes = {
    CollisionActionType.destroyItself,
    CollisionActionType.causeDamage
  };

  // You cannot shoot yourself
  shooter.skipCollisionAction.add(cannonball.getId());
  cannonball.skipCollisionAction.add(shooter.getId());

  // Add cannonball to dynamic game object manager which updates it every frame
  dynamicGameObjectManager.addDynamicGameObject(cannonball);
}
