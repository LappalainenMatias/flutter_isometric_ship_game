import '../../../utils/vertice_dto.dart';

/// Everything at the screen is a game object (Ground, trees, rocks, etc.).
abstract class GameObject implements Comparable<GameObject> {
  /// Used for drawing
  VerticeDTO getVertices();
  /// Used for sorting the game object before drawing
  double nearness();
  /// If something is underwater, we draw it with water shader paint
  bool isUnderWater();

  @override
  int compareTo(GameObject other) {
    if (nearness() != other.nearness()) {
      return nearness() > other.nearness() ? -1 : 1;
    } else {
      /// This makes the order stay the same even if the nearness is the same.
      return other.hashCode.compareTo(other.hashCode);
    }
  }

  /// Dynamic means that it can change during the game like move.
  /// If region does not contain any dynamic game objects we can optimize the drawing
  /// by not updating the vertices.
  bool isDynamic();
}