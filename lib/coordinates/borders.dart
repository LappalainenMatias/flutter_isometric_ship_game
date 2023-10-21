import 'dart:ui';
import '../game_objects/game_object.dart';
import 'iso_coordinate.dart';

/// Used for storing the top, bottom, left and right most coordinates of the regions game objects.
/// This is used for determining which regions are visible.
/// Because of this borders are the real screen coordinates of the game objects.
/// In isometric coordinates elevation increases x and y by 1.
class Borders {
  IsoCoordinate top;
  IsoCoordinate bottom;
  IsoCoordinate left;
  IsoCoordinate right;

  Borders(this.top, this.bottom, this.left, this.right);
  Rect getRect() {
    return Rect.fromLTRB(left.isoX, top.isoY, right.isoX, bottom.isoY);
  }
}

Borders createBorders(List<GameObject> gameObjects) {
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
  return Borders(top, bottom, left, right);
}
