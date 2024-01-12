import 'dart:collection';
import 'package:anki/game_specific/game_object/ship.dart';
import '../game_object/game_object.dart';
import '../health_and_damage/damage.dart';
import '../health_and_damage/health.dart';

/// Defines what happens when a collision occurs
mixin CollisionAction {
  Set<CollisionActionType> actionTypes = {};

  /// Skip collision detection with these game object ids
  HashSet<int> skipCollisionAction = HashSet<int>();

  void executeCollisionAction(GameObject collider, List<GameObject> collisions) {
    if (skipCollisionAction.isNotEmpty) {
      collisions.removeWhere(
          (element) => skipCollisionAction.contains(element.getId()));
    }
    if (collisions.isEmpty) {
      return;
    }
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.destroyItself:
          _destroyItself(collider);
          break;
        case CollisionActionType.causeDamage:
          _causeDamage(collider, collisions);
          break;
        case CollisionActionType.collectItem:
          _collectItem(collider, collisions);
          break;
      }
    }
  }

  /// Todo we now have reference to game specific bottle so we need to refactor
  void _collectItem(GameObject collider, List<GameObject> collisions) {
    for (var collision in collisions) {
      if (collider is Ship && collision is Collectable) {
        collision.collectItem(collider);
        collision.destroy = true;
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

enum CollisionActionType { destroyItself, causeDamage, collectItem }
