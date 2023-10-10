import 'dart:collection';

import '../game_objects/static/ground/tile.dart';

void visibilityChecker(List<Tile> tiles) {
  HashSet<String> points = HashSet<String>();

  // Populate the points set and set all tiles to visible
  for (var tile in tiles) {
    tile.setVisibility(true);
    var point = tile.isoCoordinate.toPoint();
    var pointStr = '${point.x.toInt()},${point.y.toInt()},${tile.elevation.toInt()}';
    points.add(pointStr);
  }

  // Set tiles that are surrounded by three tiles to invisible
  for (var tile in tiles) {
    var point = tile.isoCoordinate.toPoint();
    var x = point.x.toInt();
    var y = point.y.toInt();
    var z = tile.elevation.toInt();

    var left = '$x,${y - 1},$z';
    var right = '${x - 1},$y,$z';
    var top = '$x,$y,${z + 1}';

    if (points.contains(left) && points.contains(right) && points.contains(top)) {
      tile.setVisibility(false);
    }
  }
}
