import 'dart:math';
import 'package:anki/map/region/game_objects/ground/tile.dart';
import 'package:anki/map/region/game_objects/ground/tile_to_vertices.dart';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'package:test/test.dart';

void main() {
  test("Create vertices and positions from SingleTile", () {
    SingleTile tile =
        SingleTile(TileType.taiga, const Point(0, 0), 1);
    VerticeDTO verticeDTO = singleTilePosAndCols(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });

  test("Create vertices and positions from AreaTile", () {
    AreaTile tile =
        AreaTile(TileType.taiga, const Point(0, 0), 1, width: 3);
    VerticeDTO verticeDTO = areaTilePosAndCols(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });
}
