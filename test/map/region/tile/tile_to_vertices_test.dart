import 'dart:math';
import 'package:anki/map/region/game_objects/ground/tile.dart';
import 'package:anki/map/region/game_objects/ground/tile_to_vertices.dart';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';
import 'package:test/test.dart';

void main() {
  test("Create vertices and positions from SingleTile", () {
    SingleTile tile =
        SingleTile(TileType.taiga, const Point(0, 0), 1);
    List posAndCols = singleTilePosAndCols(tile);
    expect(posAndCols[0].length, 36);
    expect(posAndCols[1].length, 18);
  });

  test("Create vertices and positions from AreaTile", () {
    AreaTile tile =
        AreaTile(TileType.taiga, const Point(0, 0), 1, width: 3);
    List posAndCols = areaTilePosAndCols(tile);
    expect(posAndCols[0].length, 36);
    expect(posAndCols[1].length, 18);
  });
}
