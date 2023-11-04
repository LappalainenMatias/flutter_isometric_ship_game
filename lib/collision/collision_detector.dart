import 'package:anki/game_objects/game_object.dart';

/// Returns empty list if no collisions found
/// The skip can be used to skip collision detection with certain game objects
/// like missile cannot collide with the player who shot it.
List<GameObject> findCollisions(
    List<GameObject> others, GameObject gameObject) {
  List<GameObject> collisions = [];
  for (var other in others) {
    if (gameObject.collision(other)) {
      collisions.add(other);
    }
  }
  return collisions;
}
