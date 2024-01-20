import 'dart:math';
import 'package:anki/foundation/animation/animation.dart';
import 'package:anki/foundation/map/map.dart';
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

class Cannonball extends DynamicGameObject with Damage, Animation {
  IsoCoordinate _isoCoordinate;
  Projectile projectile;
  double _elevation = 0.0;
  double _width;
  bool _isVisible = true;
  late CollisionBox collisionBox;
  final int _id;

  Cannonball(
    this._isoCoordinate,
    this._elevation,
    this._width,
    this.projectile,
    this._id,
  ) {
    animationParts = animationCanonBall;
    animationLengthInSeconds = 0.25;
    collisionBox = CollisionBox(_isoCoordinate, _width, _elevation);
  }

  @override
  List gameObjectToList() {
    throw UnimplementedError();
  }

  @override
  double getElevation() {
    return _elevation;
  }

  @override
  IsoCoordinate getIsoCoordinate() {
    return _isoCoordinate;
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
    return (distance: _isoCoordinate.isoY, elevation: _elevation);
  }

  @override
  void setVisibility(bool isVisible) {
    _isVisible = isVisible;
  }

  @override
  CollisionBox getCollisionBox() {
    return collisionBox;
  }

  @override
  int getId() {
    return _id;
  }

  @override
  void setIsoCoordinate(IsoCoordinate isoCoordinate) {
    _isoCoordinate = isoCoordinate;
    collisionBox.update(_isoCoordinate, _width, _elevation);
  }

  double getWidth() => _width;
}

class Projectile {
  /// Cannonball moves to this direction
  IsoCoordinate unitVector;
  double speed;

  /// Makes sure that cannonballs don't fly forever
  double _flyingTimeSeconds;

  Projectile(this.unitVector, this._flyingTimeSeconds, [this.speed = 80]);

  void update(double dt, Cannonball cannonball) {
    if (_flyingTimeSeconds <= 0) {
      cannonball.destroy = true;
      return;
    }
    _flyingTimeSeconds -= dt;
    cannonball.setIsoCoordinate(
        cannonball.getIsoCoordinate() + unitVector * dt * speed);
  }
}

/// Shoots a cannonball from a ship to the target
void shootCannonball(GameMap gameMap, IsoCoordinate target, Ship shooter) {
  var unitVectorFromPlayerToTarget =
      (target - shooter.getIsoCoordinate()).toUnitVector();
  var cannonball = Cannonball(
    shooter.getIsoCoordinate(),
    shooter.getElevation(),
    1,
    Projectile(unitVectorFromPlayerToTarget, shooter.bulletFlightSeconds),
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
  gameMap.addGameObject(cannonball);
  shooter.lastShot = DateTime.now();
}
