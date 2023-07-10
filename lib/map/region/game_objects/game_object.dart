/// Everything at the screen is a game object (Ground, trees, rocks, etc.).
abstract class GameObject implements Comparable<GameObject> {
  /// Used for drawing
  getVertices();
  /// Used for sorting the drawing order
  nearness();
  /// If something is underwater, we draw it with water shader paint
  isUnderWater();

  @override
  int compareTo(GameObject other) {
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }
}