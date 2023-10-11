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
}

enum CollisionActionType { hide, absorve }
