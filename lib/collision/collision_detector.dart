import 'dart:collection';

import 'package:anki/game_objects/game_object.dart';

/// Returns empty list if no collisions found
/// The skip can be used to skip collision detection with certain game objects
/// like missile cannot collide with the player who shot it.
List<GameObject> findCollisions(List<GameObject> others, GameObject gameObject,
    [HashSet<GameObject>? skip]) {
  skip ??= HashSet<GameObject>();
  List<GameObject> collisions = [];
  for (var other in others) {
    if (skip.contains(other)) {
      continue;
    }
    if (gameObject.collision(other)) {
      collisions.add(other);
    }
  }
  return collisions;
}
