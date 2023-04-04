import 'dart:math';
import 'dart:typed_data';
import 'dart:ui';
import 'tile.dart';
import 'tile_helper.dart';

class Region extends Comparable<Region> {
  Point<int> regionCoordinate;
  List<Tile> tiles;
  Vertices? ground;
  Map<int, List<Vertices>> underWaterByHeight = {};

  Region(this.tiles, this.regionCoordinate) {
    tiles.sort((a, b) => a.compareTo(b));
    List<double> vGround = [];
    List<int> cGround = [];
    Map<int, List<double>> vWater = {};
    Map<int, List<int>> cWater = {};
    for (var tile in tiles) {
      List<dynamic> vs = getVertices(tile.coordinate, tile);
      if (tile.height >= 0) {
        vGround.addAll(vs[0]);
        cGround.addAll(vs[1]);
      } else {
        if (vWater.containsKey(tile.height)) {
          vWater[tile.height]!.addAll(vs[0]);
          cWater[tile.height]!.addAll(vs[1]);
        } else {
          vWater[tile.height] = vs[0];
          cWater[tile.height] = vs[1];
        }
      }
    }
    ground = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(vGround),
      colors: Int32List.fromList(cGround),
    );
    List keys = vWater.keys.toList();
    for (var key in keys) {
      if (underWaterByHeight.containsKey(key)) {
        underWaterByHeight[key]!.add(Vertices.raw(
          VertexMode.triangles,
          Float32List.fromList(vWater[key]!),
          colors: Int32List.fromList(cWater[key]!),
        ));
      } else {
        underWaterByHeight[key] = [
          Vertices.raw(
            VertexMode.triangles,
            Float32List.fromList(vWater[key]!),
            colors: Int32List.fromList(cWater[key]!),
          )
        ];
      }
    }
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
