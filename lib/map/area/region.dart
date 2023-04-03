import 'dart:math';
import 'dart:typed_data';
import 'dart:ui';
import '../creation/tile.dart';
import '../creation/tile_helper.dart';

class Region extends Comparable<Region> {
  Point<int> regionCoordinate;
  List<Tile> tiles;
  Vertices? verticesGround;
  List<Vertices> verticesUnderWater = [];
  Vertices? verticesShallowWater;
  Vertices? verticesDeepWater;

  Region(this.tiles, this.regionCoordinate) {
    tiles.sort((a, b) => a.compareTo(b));
    List<double> vGround = [];
    List<int> cGround = [];
    List<double> vShallowWater = [];
    List<int> cShallowWater = [];
    List<double> vDeepWater = [];
    List<int> cDeepWater = [];
    for (var tile in tiles) {
      List<dynamic> vs = getVertices(tile.coordinate, tile);
      if (tile.height >= 0) {
        vGround.addAll(vs[0]);
        cGround.addAll(vs[1]);
      } else if (tile.height > -3) {
        vShallowWater.addAll(vs[0]);
        cShallowWater.addAll(vs[1]);
      } else {
        vDeepWater.addAll(vs[0]);
        cDeepWater.addAll(vs[1]);
      }
    }
    verticesGround = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(vGround),
      colors: Int32List.fromList(cGround),
    );
    verticesShallowWater = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(vShallowWater),
      colors: Int32List.fromList(cShallowWater),
    );
    verticesDeepWater = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(vDeepWater),
      colors: Int32List.fromList(cDeepWater),
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
