import 'dart:typed_data';
import 'dart:ui';

import 'package:anki/map/area/ground_area.dart';

class Region {
  final List<GroundArea> areas;
  Vertices? verticesRaw;

  Region(this.areas) {
    List<double> vertices = [];
    List<int> colors = [];
    for (var area in areas) {
      vertices.addAll([
        area.topLeft.x.toDouble(),
        area.topLeft.y.toDouble(),
        area.bottomRight.x.toDouble(),
        area.topLeft.y.toDouble(),
        area.bottomRight.x.toDouble(),
        area.bottomRight.y.toDouble(),
        area.topLeft.x.toDouble(),
        area.bottomRight.y.toDouble(),
      ]);
      int color = area.type.color.value;
      colors.addAll([
        color,
        color,
        color,
        color,
      ]);
    }
    verticesRaw = Vertices.raw(
        VertexMode.triangles, Float32List.fromList(vertices),
        colors: Int32List.fromList(colors));
  }

  Region.empty() : areas = [];
}
