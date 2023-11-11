import 'dart:collection';

import '../game_objects/dynamic/gold_coin.dart';
import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object.dart';
import '../health_and_damage/damage.dart';
import '../health_and_damage/health.dart';

/// Does the defined actions when collision happens
/// Todo refactor this. Could we use mixin?
class CollisionAction {
  final List<CollisionActionType> actionTypes;
  final DynamicGameObject gameObject;

  /// Skip collision detection with these game objects
  HashSet<GameObject> _skip = HashSet<GameObject>();

  CollisionAction(this.actionTypes, this.gameObject,
      [HashSet<GameObject>? skip]) {
    if (skip != null) {
      _skip = skip;
    }
  }

  void execute(List<GameObject> collisions) {
    if (_skip.isNotEmpty) {
      collisions.removeWhere((element) => _skip.contains(element));
    }
    if (collisions.isEmpty) {
      return;
    }
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.moveAbove:
          _moveAbove(collisions);
          break;
        case CollisionActionType.destroyItself:
          _destroyItself();
          break;
        case CollisionActionType.causeDamage:
          _causeDamage(collisions);
          break;
        case CollisionActionType.collectGoldCoin:
          _collectGoldCoin(collisions);
          break;
      }
    }
  }

  void _moveAbove(List<GameObject> collisions) {
    for (var colliding in collisions) {
      if (gameObject is Player) {
        (gameObject as Player).elevation = colliding.getElevation() + 1;
      }
    }
  }

  void _destroyItself() {
    gameObject.destroy = true;
  }

  void _causeDamage(List<GameObject> collisions) {
    for (var colliding in collisions) {
      if (colliding is Health && gameObject is Damage) {
        (colliding as Health).takeDamage((gameObject as Damage));
      }
    }
  }

  void _collectGoldCoin(List collisions) {
    for (var colliding in collisions) {
      if (colliding is GoldCoin) {
        colliding.destroy;
      }
    }
  }
}

enum CollisionActionType {
  moveAbove,
  destroyItself,
  causeDamage,
  collectGoldCoin
}
