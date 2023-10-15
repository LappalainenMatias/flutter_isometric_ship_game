import '../game_objects/dynamic/player.dart';
import '../game_objects/game_object.dart';

/// Does the defined actions when collision happens
class CollisionAction {
  final List<CollisionActionType> actionTypes;
  final GameObject gameObject;

  CollisionAction(this.actionTypes, this.gameObject);

  void execute(List<GameObject> collisions) {
    for (var type in actionTypes) {
      switch (type) {
        case CollisionActionType.hide:
          _hide(collisions);
        case CollisionActionType.absorve:
          _absorve(collisions);
        case CollisionActionType.moveAbove:
          _moveAbove(collisions);
      }
    }
  }

  void _hide(List<GameObject> collisions) {
    for (var colliding in collisions) {
      colliding.setVisibility(
          leftIsVisible: false, topIsVisible: false, rightIsVisible: false);
    }
  }

  void _absorve(List<GameObject> collisions) {
    for (var colliding in collisions) {
      if (colliding is Absortable && gameObject is Growable) {
        var volume = colliding.size();
        (gameObject as Growable).addVolume(volume);
        colliding.setVisibility(
            leftIsVisible: false, topIsVisible: false, rightIsVisible: false);
      }
    }
  }

  void _moveAbove(List<GameObject> collisions) {
    for (var colliding in collisions) {
      if (gameObject is Player && gameObject is Growable) {
        (gameObject as Player).elevation = colliding.getElevation() + 1;
      }
    }
  }
}

enum CollisionActionType { hide, absorve, moveAbove }
