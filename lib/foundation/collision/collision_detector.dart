import '../game_object/game_object.dart';

/// Returns empty list if no collisions found
List<GameObject> findCollisions(
    List<GameObject> others, GameObject go) {
  List<GameObject> collisions = [];
  var isUnderWater = go.isUnderWater();
  for (var other in others) {
    // Optimizations
    if (isUnderWater != other.isUnderWater()) continue;

    // Check collision
    if (go.collision(other)) {
      collisions.add(other);
    }
  }
  return collisions;
}
