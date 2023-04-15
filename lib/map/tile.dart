import 'package:flutter/material.dart';
import 'dart:math';

import 'cube.dart';
import 'iso_coordinate.dart';
import 'natural_items/spruce.dart';

class Tile extends Comparable<Tile> {
  final Type type;
  final IsoCoordinate coordinate;
  bool containsTree;
  double height;

  Tile(this.type, this.coordinate, this.height, [this.containsTree = false]) {
    int val = Random().nextInt(100);
    if (type == Type.grass && val < 2) {
      containsTree = true;
    }
    if (type == Type.taiga && val < 10) {
      containsTree = true;
    }
    if (type == Type.tundra && val < 1) {
      containsTree = true;
    }
  }

  double distance() {
    return coordinate.x + coordinate.y;
  }

  double nearness() {
    return coordinate.x + coordinate.y;
  }

  @override
  int compareTo(Tile other) {
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }

  List getPositionsAndColors() {
    List positionsAndColors = createCube(
      coordinate,
      height,
      type.top.value,
      type.left.value,
      type.right.value,
    );
    if (containsTree) {
      List tree = spruce(this);
      positionsAndColors[0].addAll(tree[0]);
      positionsAndColors[1].addAll(tree[1]);
    }
    return positionsAndColors;
  }
}

enum Type {
  taiga(
    Color.fromARGB(255, 83, 173, 93),
    Color.fromARGB(255, 67, 140, 75),
    Color.fromARGB(255, 53, 119, 60),
  ),
  grass(
    Color.fromARGB(255, 132, 197, 126),
    Color.fromARGB(255, 110, 164, 106),
    Color.fromARGB(255, 93, 143, 89),
  ),
  tundra(
    Color.fromARGB(255, 146, 183, 144),
    Color.fromARGB(255, 116, 150, 114),
    Color.fromARGB(255, 96, 129, 94),
  ),
  bare(
    Color.fromARGB(255, 153, 162, 151),
    Color.fromARGB(255, 122, 133, 120),
    Color.fromARGB(255, 100, 112, 98),
  ),
  lakeFloorPlants(
    Color.fromARGB(255, 85, 107, 47),
    Color.fromARGB(255, 67, 86, 35),
    Color.fromARGB(255, 56, 72, 29),
  ),
  ocean(
    Color.fromARGB(255, 21, 99, 197),
    Color.fromARGB(255, 21, 99, 197),
    Color.fromARGB(255, 21, 99, 197),
  ),
  beach(
    Color.fromARGB(255, 194, 178, 128),
    Color.fromARGB(255, 161, 146, 100),
    Color.fromARGB(255, 138, 124, 82),
  );

  const Type(this.top, this.left, this.right);

  // These are the cube's side colors. Top is often brighter because it is in the light.
  final Color top;
  final Color left;
  final Color right;
}

extension TileExtension on Tile {
  static Tile? getTile(
      double elevation, double moisture, IsoCoordinate coordinate) {
    double height = (elevation * 30).round().toDouble();
    if (elevation < 0.0 && moisture < -0.25) {
      return Tile(Type.bare, coordinate, height);
    }
    if (elevation < -0.1 && moisture < 0.0) {
      return Tile(Type.lakeFloorPlants, coordinate, height);
    }
    if (elevation < 0.0) return Tile(Type.beach, coordinate, height);
    if (elevation < 0.02) {
      if (moisture < -0.15) return Tile(Type.bare, coordinate, height);
      return Tile(Type.beach, coordinate, height);
    }
    if (elevation < 0.20) {
      if (moisture < -0.20) return Tile(Type.bare, coordinate, height);
      if (moisture < 0.00) return Tile(Type.grass, coordinate, height);
      return Tile(Type.taiga, coordinate, height);
    }
    if (elevation < 0.4) {
      if (moisture < -0.2) return Tile(Type.bare, coordinate, height);
      if (moisture < 0.2) return Tile(Type.tundra, coordinate, height);
      return Tile(Type.taiga, coordinate, height);
    }
    return Tile(Type.bare, coordinate, height);
  }
}
