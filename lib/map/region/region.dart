import 'dart:typed_data';
import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region_data_creator.dart';
import 'tile/tile.dart';

class Region extends Comparable<Region> {
  int verticesCount = 0;
  IsoCoordinate coord;
  List<Tile> tiles;
  Vertices? aboveWater;
  Vertices? underWater;

  Region(this.verticesCount, this.coord, this.tiles, var aboveWaterPositions,
      var aboveWaterColors, var underWaterPositions, var underWaterColors) {
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

  factory Region.fromRegionDTO(RegionDTO data) {
    return Region(
      data.verticesCount,
      data.regionCoordinate,
      data.tiles,
      data.aboveWaterPositions,
      data.aboveWaterColors,
      data.underWaterPositions,
      data.underWaterColors,
    );
  }

  int _nearness() {
    return coord.isoX.toInt() + coord.isoY.toInt();
  }

  @override
  int compareTo(Region other) {
    if (_nearness() > other._nearness()) {
      return -1;
    }
    return 1;
  }
}
