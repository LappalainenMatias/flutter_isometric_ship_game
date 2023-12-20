import 'dart:collection';
import '../game_object/tile.dart';

/// TODO Tiles need to be 1x1x1 in size
void removeHiddenGameObjects(List<Tile> tiles) {
  HashSet<String> points = HashSet<String>();
  for (var tile in tiles) {
    var point = tile.getIsoCoordinate().toPoint();
    var elevation = tile.getElevation().toInt();
    points.add('${point.x.toInt()},${point.y.toInt()},$elevation');
  }

  tiles.removeWhere((tile) {
    var point = tile.getIsoCoordinate().toPoint();
    var x = point.x.toInt();
    var y = point.y.toInt();
    var z = tile.getElevation().toInt();

    var right = '$x,${y + 1},$z';
    var left = '${x + 1},$y,$z';
    var top = '$x,$y,${z + 1}';

    return points.contains(left) &&
        points.contains(top) &&
        points.contains(right);
  });
}
