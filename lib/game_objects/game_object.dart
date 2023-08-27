
import 'package:anki/game_objects/static/ground/tile.dart';
import '../collision/collision_box.dart';
import '../dto/vertice_dto.dart';


/// A game object is something that is drawn on the screen.
abstract class GameObject implements Comparable<GameObject> {
  /// Returns the data that is needed for drawing the game object.
  VerticeDTO getVertices();

  /// Used for sorting the game objects before drawing.
  /// large nearness means that the object is drawn last because it is in front of
  /// the other game objects.
  double nearness();

  /// If something is underwater, we draw it with water shader paint
  bool isUnderWater();

  @override
  int compareTo(GameObject other) {
    return nearness() > other.nearness() ? 1 : -1;
  }

  /// Dynamic means that the object can change (move, change color, ...) during the game.
  /// If region does not contain any dynamic game objects, we can optimize the drawing
  /// because we do not need to update the region vertices.
  bool isDynamic();

  CollisionBox? getCollisionBox() => null;

  bool collision(GameObject other) {
    if (this == other) {
      return false;
    }
    final collisionBox1 = getCollisionBox();
    final collisionBox2 = other.getCollisionBox();
    if (collisionBox1 == null || collisionBox2 == null) {
      return false;
    }
    return collisionBox1.overlaps(collisionBox2);
  }

  /// Webworkers can only return basic data types like lists, int, string. Because of
  /// this we need to convert the game object into a list before sending it to the main thread.
  /// Encoding and decoding the game object to json is not an option because it is slow.
  /// [0] should always contain the game object type (Notice gameObjectFromList)
  List gameObjectToList();

  static GameObject gameObjectFromList(List gameObjects) {
    switch (gameObjects[0] as String) {
      case 'NaturalItem':
        throw Exception("Implement");
      case 'Tile':
        return Tile.fromList(gameObjects);
      case 'Player':
        throw Exception("Implement");
    }
    throw Exception("Not implemented for $gameObjects");
  }
}