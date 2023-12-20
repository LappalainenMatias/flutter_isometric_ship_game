import '../collision/collision_box.dart';
import '../coordinates/iso_coordinate.dart';
import '../rendering_data/rendering_data.dart';

abstract class GameObject implements Comparable<GameObject> {
  /// Used for identifying the game object
  int getId();

  /// The z-coordinate of the game object.
  /// The screen coordinate is defined by the elevation + IsoCoordinate
  double getElevation();

  /// x and y coordinates of the game object. This is not the screen coordinate.
  /// The screen coordinate is calculated from the IsoCoordinate + elevation.
  IsoCoordinate getIsoCoordinate();

  /// Returns the data that is needed for drawing the game object.
  RenderingData getDrawingData();

  /// Used for sorting the game objects (painter's algorithm).
  /// If game object has larger elevation, it is drawn last because
  /// it is on top of the other game objects.
  /// If game object has smaller distance it is drawn last because
  /// it is closer to the camera.
  ({double distance, double elevation}) nearness();

  /// If true the game object is drawn under the water plane
  bool isUnderWater();

  bool isVisible();

  @override
  int compareTo(GameObject other) {
    // we use this to sort game objects in a way that the last game object
    // is bottom most item in the screen. (Painter's algorithm)
    final nearness = this.nearness();
    final otherNearness = other.nearness();
    if (nearness.elevation != otherNearness.elevation) {
      return nearness.elevation > otherNearness.elevation ? 1 : -1;
    }
    return nearness.distance > otherNearness.distance ? 1 : -1;
  }

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
}

/// Static game objects cannot change. This allows faster rendering and other
/// optimizations.
abstract class StaticGameObject extends GameObject {
  /// Currently there is no need for invisible static game objects.
  /// Invisble static game, for example tiles which are behind other tiles
  /// should be deleted from the game.
  /// Todo this is not actually true. There can be invisible game objects. Tile behind a mountain should be invisble but is
  /// also needed for collision detection.
  @override
  isVisible() => true;
}

/// Dynamic game objects can change. This allows for example moving game objects.
abstract class DynamicGameObject extends GameObject {
  /// If false, the gameObject will not be drawn
  void setVisibility(bool isVisible);

  void update(double dt);

  /// When changed to true the game object will be removed from the game.
  bool destroy = false;
}
