import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object.dart';

/// Does the defined actions when collision happens
/// Todo refactor this. Could we use mixin?
class CollisionAction {
  final List<CollisionActionType> actionTypes;
  final GameObject gameObject;

  CollisionAction(this.actionTypes, this.gameObject);

  void execute(List<GameObject> collisions) {
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.moveAbove:
          _moveAbove(collisions);
          break;
        case CollisionActionType.destroyItself:
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

  }
}

enum CollisionActionType { moveAbove, destroyItself }
