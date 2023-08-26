import 'package:anki/game_objects/game_object.dart';

/// Returns empty list if no collisions found
List<GameObject> findCollisions(
    List<GameObject> gameObjects, GameObject gameObject) {
  List<GameObject> collisions = [];
  for (var otherGameObject in gameObjects) {
    if (otherGameObject.collision(gameObject)) {
      collisions.add(otherGameObject);
    }
  }
  return collisions;
}