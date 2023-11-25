import 'dart:collection';

import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object.dart';
import '../health_and_damage/damage.dart';
import '../health_and_damage/health.dart';

/// Defines what happens when a collision occurs
mixin CollisionAction {
  Set<CollisionActionType> actionTypes = {};

  /// Skip collision detection with these game objects
  HashSet<int> skipCollisionAction = HashSet<int>();

  void execute(GameObject collider, List<GameObject> collisions) {
    if (skipCollisionAction.isNotEmpty) {
      collisions.removeWhere(
          (element) => skipCollisionAction.contains(element.getId()));
    }
    if (collisions.isEmpty) {
      return;
    }
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.moveAbove:
          _moveAbove(collider, collisions);
          break;
        case CollisionActionType.destroyItself:
          _destroyItself(collider);
          break;
        case CollisionActionType.causeDamage:
          _causeDamage(collider, collisions);
          break;
      }
    }
  }

  void _moveAbove(GameObject go, List<GameObject> collisions) {
    for (var colliding in collisions) {
      if (go is Player) {
        go.elevation = colliding.getElevation() + 1;
      }
    }
  }

  void _destroyItself(GameObject collider) {
    if (collider is DynamicGameObject) {
      collider.destroy = true;
    } else {
      throw Exception('Only dynamic game objects can be destroyed');
    }
  }

  void _causeDamage(GameObject collider, List<GameObject> collisions) {
    if (collider is Damage) {
      for (var colliding in collisions) {
        if (colliding is Health) {
          (colliding as Health).takeDamage(collider as Damage);
        }
      }
    } else {
      throw Exception('Collider does not have damage');
    }
  }
}

enum CollisionActionType { moveAbove, destroyItself, causeDamage }
