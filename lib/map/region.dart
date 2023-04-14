import 'dart:math';
import 'dart:typed_data';
import 'dart:ui';
import 'tile.dart';

class Region extends Comparable<Region> {
  Point<int> regionCoordinate;
  List<Tile> tiles;
  Vertices? groundVertices;
  Vertices? underWaterVertices;

  Region(this.tiles, this.regionCoordinate) {
    tiles.sort((a, b) => a.compareTo(b));
    List<double> groundPositions = [];
    List<int> groundColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var tile in tiles) {
      List<dynamic> pc = tile.getPositionsAndColors();
      if (tile.height < 0) {
        underWaterPositions.addAll(pc[0]);
        underWaterColors.addAll(pc[1]);
      } else {
        groundPositions.addAll(pc[0]);
        groundColors.addAll(pc[1]);
      }
    }
    groundVertices = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(groundPositions),
      colors: Int32List.fromList(groundColors),
    );
    underWaterVertices = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(underWaterPositions),
      colors: Int32List.fromList(underWaterColors),
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
