import 'package:flutter/material.dart';
import 'dart:math';

class Tile extends Comparable<Tile> {
  final Type type;
  final Point<int> coordinate;
  int height;

  Tile(this.type, this.coordinate, this.height);

  int distance() {
    return coordinate.x + coordinate.y;
  }

  int nearness() {
    return coordinate.x + coordinate.y;
  }

  @override
  int compareTo(Tile other) {
    if (height > other.height) {
      return 1;
    }
    if (height < other.height) {
      return -1;
    }
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }
}

enum Type {
  taiga(Color.fromARGB(255, 83, 173, 93), Color.fromARGB(255, 67, 140, 75),
      Color.fromARGB(255, 53, 119, 60)),
  grass(Color.fromARGB(255, 132, 197, 126), Color.fromARGB(255, 110, 164, 106),
      Color.fromARGB(255, 93, 143, 89)),
  wall(Colors.black, Colors.black, Colors.black),
  tundra(Color.fromARGB(255, 146, 183, 144), Color.fromARGB(255, 116, 150, 114),
      Color.fromARGB(255, 96, 129, 94)),
  bare(Color.fromARGB(255, 153, 162, 151), Color.fromARGB(255, 122, 133, 120),
      Color.fromARGB(255, 100, 112, 98)),
  deepOcean(Color.fromARGB(255, 19, 93, 185), Color.fromARGB(255, 19, 93, 185),
      Color.fromARGB(255, 19, 93, 185)),
  ocean(Color.fromARGB(255, 21, 99, 197), Color.fromARGB(255, 21, 99, 197),
      Color.fromARGB(255, 21, 99, 197)),
  beach(Color.fromARGB(255, 194, 178, 128), Color.fromARGB(255, 161, 146, 100),
      Color.fromARGB(255, 138, 124, 82));

  const Type(this.color, this.lightShadowColor, this.darkShadowColor);

  final Color color;
  final Color lightShadowColor;
  final Color darkShadowColor;
}

extension TileExtension on Tile {
  static Tile? getTile(
      double elevation, double moisture, Point<int> coordinate) {
    int height = (elevation * 30).round();
    if (elevation < 0.0 && moisture < -0.25) {
      return Tile(Type.bare, coordinate, height);
    }
    if (elevation < 0.0) return Tile(Type.beach, coordinate, height);
    if (elevation < 0.05) {
      if (moisture < -0.15) return Tile(Type.bare, coordinate, height);
      return Tile(Type.beach, coordinate, height);
    }
    if (elevation < 0.20) {
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
