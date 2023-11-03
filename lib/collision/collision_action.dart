import 'dart:collection';

import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object.dart';

/// Does the defined actions when collision happens
/// Todo refactor this. Could we use mixin?
class CollisionAction {
  final List<CollisionActionType> actionTypes;
  final DynamicGameObject gameObject;

  /// Skip collision detection with these game objects
  HashSet<GameObject> skip = HashSet<GameObject>();

  CollisionAction(this.actionTypes, this.gameObject,
      [HashSet<GameObject>? skip]) {
    if (skip != null) {
      this.skip = skip;
    }
  }

  void execute(List<GameObject> collisions) {
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.moveAbove:
          _moveAbove(collisions);
          break;
        case CollisionActionType.destroyItself:
          _destroyItself();
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
}

enum CollisionActionType { moveAbove, destroyItself }
