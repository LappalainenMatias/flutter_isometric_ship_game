import '../game_object/game_object.dart';
import 'iso_coordinate.dart';

class Rectangle {
  final double top;
  final double bottom;
  final double left;
  final double right;

  Rectangle(
      {required this.top,
      required this.bottom,
      required this.left,
      required this.right});

  // Check if this rectangle overlaps with another rectangle
  bool overlaps(Rectangle other) {
    return (left < other.right &&
        right > other.left &&
        top > other.bottom &&
        bottom < other.top);
  }

  @override
  toString() {
    return 'Rectangle: top: $top, bottom: $bottom, left: $left, right: $right';
  }
}

Rectangle createRectangle(List<GameObject> gameObjects) {
  assert(gameObjects.isNotEmpty);
  var elevation = IsoCoordinate(
      gameObjects[0].getElevation(), gameObjects[0].getElevation());
  var top = gameObjects[0].getIsoCoordinate() + elevation;
  var bottom = gameObjects[0].getIsoCoordinate() + elevation;
  var left = gameObjects[0].getIsoCoordinate() + elevation;
  var right = gameObjects[0].getIsoCoordinate() + elevation;
  for (var gameObject in gameObjects) {
    elevation =
        IsoCoordinate(gameObject.getElevation(), gameObject.getElevation());
    var coordinate = gameObject.getIsoCoordinate() + elevation;
    if (coordinate.isoX > right.isoX) {
      right = coordinate;
    }
    if (coordinate.isoX < left.isoX) {
      left = coordinate;
    }
    if (coordinate.isoY > top.isoY) {
      top = coordinate;
    }
    if (coordinate.isoY < bottom.isoY) {
      bottom = coordinate;
    }
  }
  return Rectangle(
      top: top.isoY, bottom: bottom.isoY, left: left.isoX, right: right.isoX);
}
