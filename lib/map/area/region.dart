import 'dart:math';
import 'dart:typed_data';
import 'dart:ui';
import 'package:flutter/material.dart';
import '../creation/tile.dart';
import '../creation/tile_helper.dart';

class Region {
  List<Tile> tiles;
  Float32List? positions;
  Int32List? colors;
  Vertices? verticesRaw;

  Region(this.tiles) {
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

  Region.empty() : tiles = [];
}
