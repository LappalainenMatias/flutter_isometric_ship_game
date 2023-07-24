import 'dart:convert';
import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/natural_items/natural_items.dart';
import '../../../utils/collision_box.dart';
import '../../../utils/vertice_dto.dart';
import 'dynamic/boat/boat.dart';

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

  CollisionBox? getCollisionBox() {
    return null;
  }

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

  /// Used for web concurrency and saving the game state.
  /// It seems like we cannot create and return game objects concurrently
  /// when using web workers, so we need to encode and decode them.
  String encode();

  static GameObject decode(String json) {
    final data = jsonDecode(json);
    switch (data["gameObjectType"] as String) {
      case 'NaturalItem':
        return NaturalItem.fromString(json);
      case 'SingleTile':
        return SingleTile.fromString(json);
      case 'AreaTile':
        return AreaTile.fromString(json);
      case 'Boat':
        return Boat.fromString(json);
    }
    throw Exception("Class did not implement decode method for $json");
  }
}

Map<String, VerticeDTO> toVertices(List<GameObject> gameObjects) {
  VerticeDTO underWater = VerticeDTO.empty();
  VerticeDTO aboveWater = VerticeDTO.empty();
  for (var gameObject in gameObjects) {
    if (gameObject.isUnderWater()) {
      underWater.addVerticeDTO(gameObject.getVertices());
    } else {
      aboveWater.addVerticeDTO(gameObject.getVertices());
    }
  }
  return {
    'underWater': underWater,
    'aboveWater': aboveWater,
  };
}
