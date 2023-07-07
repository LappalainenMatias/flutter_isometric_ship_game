import 'dart:math';

import 'package:anki/map/region/tile/natural_items/natural_items.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'package:test/test.dart';

void main() {
  test("Sort tiles", () {
    Tile t1 = Tile(TileType.taiga, const Point(1, 1), 1, NaturalItem.empty);
    Tile t2 = Tile(TileType.taiga, const Point(0, 1), 1, NaturalItem.empty);
    Tile t3 = Tile(TileType.taiga, const Point(0, 0), 1, NaturalItem.empty);
    Tile t4 = Tile(TileType.taiga, const Point(-1, 0), 1, NaturalItem.empty);
    Tile t5 = Tile(TileType.taiga, const Point(-1, -1), 1, NaturalItem.empty);
    List tiles = [t4, t5, t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1], t2);
    expect(tiles[2], t3);
    expect(tiles[3], t4);
    expect(tiles[4], t5);
  });
}
