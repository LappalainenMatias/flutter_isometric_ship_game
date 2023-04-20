import 'dart:typed_data';
import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'tile/tile.dart';

class Region extends Comparable<Region> {
  IsoCoordinate coord;
  List<Tile> tiles;
  Vertices? aboveWater;
  Vertices? underWater;

  Region(this.tiles, this.coord) {
    tiles.sort((a, b) => a.compareTo(b));
    List<double> aboveWaterPositions = [];
    List<int> aboveWaterColors = [];
    List<double> underWaterPositions = [];
    List<int> underWaterColors = [];
    for (var tile in tiles) {
      List<dynamic> pc = tile.getPositionsAndColors();
      if (tile.height < 0) {
        underWaterPositions.addAll(pc[0]);
        underWaterColors.addAll(pc[1]);
      } else {
        aboveWaterPositions.addAll(pc[0]);
        aboveWaterColors.addAll(pc[1]);
      }
    }
    aboveWater = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(aboveWaterPositions),
      colors: Int32List.fromList(aboveWaterColors),
    );
    underWater = Vertices.raw(
      VertexMode.triangles,
      Float32List.fromList(underWaterPositions),
      colors: Int32List.fromList(underWaterColors),
    );
  }

  int _nearness() {
    return coord.x.toInt() + coord.y.toInt();
  }

  @override
  int compareTo(Region other) {
    if (_nearness() > other._nearness()) {
      return -1;
    }
    return 1;
  }
}
