import '../game_object/tile.dart';

/// TODO Tiles need to be 1x1x1 in size
void removeHiddenGameObjects(List<Tile> tiles) {
  var points = <int>{};
  for (var tile in tiles) {
    var point = tile.getIsoCoordinate().toPoint();
    var elevation = tile.getElevation().toInt();
    points.add(encodePoint(point.x.toInt(), point.y.toInt(), elevation));
  }

  tiles.removeWhere((tile) {
    var point = tile.getIsoCoordinate().toPoint();
    var x = point.x.toInt();
    var y = point.y.toInt();
    var z = tile.getElevation().toInt();

    var right = encodePoint(x, y + 1, z);
    var left = encodePoint(x + 1, y, z);
    var top = encodePoint(x, y, z + 1);

    return points.contains(left) && points.contains(top) && points.contains(right);
  });
}

/// Using encoded point is faster than using a point class or string. Check performance test
int encodePoint(int x, int y, int z) {
  return x * 1000000 + y * 1000 + z;
}
