import 'dart:collection';
import '../game_objects/static/ground/tile.dart';

/// Goes through all tiles and sets their visibility.
/// If there is a tile on the left side of the tile, we hide the left side of the tile
/// We do this for the right and top side as well
/// This also hides tiles that are completele invisible
/// This optimization can reduce vertices even by 90% in some cases.
void visibilityChecker(List<Tile> tiles, int tileWidth) {
  HashSet<String> points = HashSet<String>();
  for (var tile in tiles) {
    var point = tile.isoCoordinate.toPoint();
    var elevation = tile.elevation.toInt();
    points.add('${point.x.toInt()},${point.y.toInt()},$elevation');
  }

  for (var tile in tiles) {
    var point = tile.isoCoordinate.toPoint();
    var x = point.x.toInt();
    var y = point.y.toInt();
    var z = tile.elevation.toInt();

    var right = '$x,${y - tileWidth},$z';
    var left = '${x - tileWidth},$y,$z';
    var top = '$x,$y,${z + tileWidth}';

    tile.setVisibility(
        leftIsVisible: !points.contains(left),
        topIsVisible: !points.contains(top),
        rightIsVisible: !points.contains(right));
  }
}
