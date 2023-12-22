List<Coord3D> findTerrainHoles(List<List<int>> points) {
  final List<Coord3D> holes = [];
  final int width = points.length;
  final int height = points[0].length;
  for (var x = 0; x < width; x++) {
    final List<int> row = points[x];
    for (var y = 0; y < height; y++) {
      final List<int> neighbors = [];
      if (x > 0) {
        neighbors.add(points[x - 1][y]);
      }
      if (x < width - 1) {
        neighbors.add(points[x + 1][y]);
      }
      if (y > 0) {
        neighbors.add(points[x][y - 1]);
      }
      if (y < height - 1) {
        neighbors.add(points[x][y + 1]);
      }
      final int elevation = row[y];
      var lowest = elevation;
      for (var neighbor in neighbors) {
        if (neighbor < lowest) {
          lowest = neighbor;
        }
      }
      for (var i = lowest + 1; i < elevation; i++) {
        holes.add(Coord3D(x, y, i));
      }
    }
  }

  return holes;
}

class Coord3D {
  Coord3D(this.x, this.y, this.z);

  final int x;
  final int y;
  final int z;

  @override
  String toString() {
    return 'Coord3D{x: $x, y: $y, z: $z}';
  }
}





