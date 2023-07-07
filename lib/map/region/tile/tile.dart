import 'dart:math';
import 'package:anki/map/region/tile/tile_type.dart';
import 'natural_items/natural_items.dart';

class Tile extends Comparable<Tile> {
  final TileType type;
  final Point<double> coordinate;
  late NaturalItem naturalItem;
  double height;

  Tile(this.type, this.coordinate, this.height, this.naturalItem);

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
}