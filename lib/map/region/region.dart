import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_creator.dart';

class Region extends Comparable<Region> {
  int verticesCount = 0;
  IsoCoordinate coord;
  ui.Vertices? aboveWater;
  ui.Vertices? underWater;

  Region(
      this.verticesCount,
      this.coord,
      Float32List aboveWaterPositions,
      Int32List aboveWaterColors,
      Float32List underWaterPositions,
      Int32List underWaterColors) {
    aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      aboveWaterPositions,
      colors: aboveWaterColors,
    );
    underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      underWaterPositions,
      colors: underWaterColors,
    );
  }

  factory Region.fromRegionDTO(RegionDTO data) {
    return Region(
      data.verticesCount,
      data.regionCoordinate,
      data.aboveWaterPositions,
      data.aboveWaterColors,
      data.underWaterPositions,
      data.underWaterColors,
    );
  }

  int _nearness() {
    return coord.isoX.toInt() + coord.isoY.toDouble().toInt();
  }

  @override
  int compareTo(Region other) {
    if (_nearness() > other._nearness()) {
      return -1;
    }
    return 1;
  }
}
