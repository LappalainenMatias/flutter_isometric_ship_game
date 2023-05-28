import 'package:anki/map/region/tile/tile_creator.dart';

import 'cube.dart';
import '../../iso_coordinate.dart';
import 'natural_items/natural_items.dart';

class Tile extends Comparable<Tile> {
  final TileType type;
  final IsoCoordinate coordinate;
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

  List getPositionsAndColors() {
    List groundPositionsAndColors = createCube(
      coordinate,
      height,
      type.top.value,
      type.left.value,
      type.right.value,
    );
    if (naturalItem.getPosAndCol != null) {
      var posAndCol = naturalItem.getPosAndCol!(this);
      groundPositionsAndColors[0].addAll(posAndCol[0]);
      groundPositionsAndColors[1].addAll(posAndCol[1]);
    }
    return groundPositionsAndColors;
  }
}