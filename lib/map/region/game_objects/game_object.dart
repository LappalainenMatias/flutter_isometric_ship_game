import 'dart:convert';

import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/natural_items/natural_items.dart';

import '../../../utils/collision_box.dart';
import '../../../utils/vertice_dto.dart';
import 'dynamic/boat/boat.dart';

/// Almost everything at the screen is a game object (ground, trees, rocks, etc.).
abstract class GameObject implements Comparable<GameObject> {
  /// Used for drawing
  VerticeDTO getVertices();

  /// Used for sorting the game objects before drawing
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

  /// Dynamic means that the object can change (move, change color, ...) during the game.
  /// If region does not contain any dynamic game objects, we can optimize the drawing
  /// because we do not need to sort the drawing order of the game objects.
  bool isDynamic();

  CollisionBox? getCollisionBox() {
    return null;
  }

  bool collision(GameObject other) {
    if (this == other) {
      /// Game objects cannot collide with themselves
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
  /// so we need to encode and decode them.
  String encode();

  static GameObject decode(String json) {
    /// Todo this decode and encode does not seem nice
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
