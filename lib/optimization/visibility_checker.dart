import 'dart:collection';
import 'package:anki/game_objects/game_object.dart';

/// Goes through all game objects and sets their visibility.
/// This hides game objects that are completele invisible.
void visibilityChecker(List<GameObject> gameObjects) {
  HashSet<String> points = HashSet<String>();
  for (var tile in gameObjects) {
    var point = tile.getIsoCoordinate().toPoint();
    var elevation = tile.getElevation().toInt();
    points.add('${point.x.toInt()},${point.y.toInt()},$elevation');
  }

  for (var tile in gameObjects) {
    var point = tile.getIsoCoordinate().toPoint();
    var x = point.x.toInt();
    var y = point.y.toInt();
    var z = tile.getElevation().toInt();

    var right = '$x,${y + 1},$z';
    var left = '${x + 1},$y,$z';
    var top = '$x,$y,${z + 1}';

    tile.setVisibility(!(points.contains(left) &&
        points.contains(top) &&
        points.contains(right)));
  }
}
