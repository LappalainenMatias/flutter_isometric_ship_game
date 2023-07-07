import 'dart:math';
import 'package:anki/map/region/tile/natural_items/natural_items.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_to_vertices.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'package:test/test.dart';

void main() {
  test("Create vertices and positions from tile", () {
    Tile tile = Tile(TileType.taiga, const Point(0, 0), 1, NaturalItem.empty);
    List posAndCols = getPosAndCols(tile);
    expect(posAndCols[0].length, 36);
    expect(posAndCols[1].length, 18);
  });
}