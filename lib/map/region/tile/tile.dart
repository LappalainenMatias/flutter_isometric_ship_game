import 'dart:math';
import 'package:anki/map/region/tile/tile_type.dart';
import 'natural_items/natural_items.dart';

class Tile extends Comparable<Tile> {
  final TileType type;
  Point<double> coordinate;
  late NaturalItem naturalItem;
  double elevation;
  double width;

  Tile(this.type, this.coordinate, this.elevation, this.naturalItem, {this.width = 1});

  double nearness() {
    return coordinate.x + coordinate.y + width;
  }

  @override
  int compareTo(Tile other) {
    if (nearness() > other.nearness()) {
      return -1;
    }
    return 1;
  }
}