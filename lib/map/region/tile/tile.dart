import 'dart:math';
import 'package:anki/map/region/tile/tile_creator.dart';

import 'cube.dart';
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

  List getPosAndCols() {
    List? posAndCols = createCube(
      coordinate,
      height,
      type.top.value,
      type.left.value,
      type.right.value,
    );
    var function = naturalItem.getPosAndCol;
    if (function != null) {
      var posAndCol = function(this);
      posAndCols[0].addAll(posAndCol[0]);
      posAndCols[1].addAll(posAndCol[1]);
    }
    return posAndCols;
  }
}