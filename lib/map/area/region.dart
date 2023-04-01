import 'dart:math';
import 'dart:typed_data';
import 'dart:ui';
import '../creation/tile.dart';
import '../creation/tile_helper.dart';

class Region extends Comparable<Region> {
  Point<int> regionCoordinate;
  List<Tile> tiles;
  Float32List? positions;
  Int32List? colors;
  Vertices? verticesRaw;

  Region(this.tiles, this.regionCoordinate) {
    tiles.sort((a, b) => a.compareTo(b));
    List<double> v = [];
    List<int> c = [];
    for (var tile in tiles) {
      List<dynamic> verticeData = getVertices(tile.coordinate, tile);
      v.addAll(verticeData[0]);
      c.addAll(verticeData[1]);
    }
    positions = Float32List.fromList(v);
    colors = Int32List.fromList(c);
    verticesRaw = Vertices.raw(
      VertexMode.triangles,
      positions!,
      colors: colors,
    );
  }

  Region.empty()
      : tiles = [],
        regionCoordinate = const Point(0, 0);

  int nearness() {
    return regionCoordinate.x + regionCoordinate.y;
  }

  @override
  int compareTo(Region other) {
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }
}
