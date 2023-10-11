import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import '../collision/collision_box.dart';
import '../dto/vertice_dto.dart';

abstract class GameObject implements Comparable<GameObject> {
  IsoCoordinate getIsoCoordinate();

  /// Returns the data that is needed for drawing the game object.
  VerticeDTO getVertices();

  /// Used for sorting the game objects (painter's algorithm).
  /// If object has larger elevation it is drawn last because
  /// it is on top of the other game objects.
  /// If object has smaller distance it is drawn last because
  /// it is closer to the camera.
  ({double distance, double elevation}) nearness();

  bool isUnderWater();

  @override
  int compareTo(GameObject other) {
    final nearness = this.nearness();
    final otherNearness = other.nearness();
    if (nearness.elevation != otherNearness.elevation) {
      return nearness.elevation > otherNearness.elevation ? 1 : -1;
    }
    return nearness.distance > otherNearness.distance ? 1 : -1;
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

  static GameObject gameObjectFromList(List gameObjectData) {
    switch (gameObjectData[0] as String) {
      case 'NaturalItem':
        throw Exception("Implement");
      case 'Tile':
        return Tile.fromList(gameObjectData);
      case 'Player':
        throw Exception("Implement");
    }
    throw Exception("Not implemented for $gameObjectData");
  }

  /// If false then gameObject should not be drawn
  bool isVisible();

  /// set all sides to false to hide game object compeletely
  /// todo make this more flexible because now the game object can only be a cube
  void setVisibility({required bool leftIsVisible,
    required bool topIsVisible,
    required bool rightIsVisible});
}

abstract class Absortable extends GameObject {
  double size();
}

abstract class Growable extends GameObject {
  /// Makes game object large.
  /// For example if you add volume of 1 m^3 to 1 m^3 object, it becomes 2 m^3
  void addVolume(double volume);
}
