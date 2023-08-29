import 'package:anki/dto/vertice_dto.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Create tile vertices", () {
    Tile tile = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1);
    VerticeDTO verticeDTO = TileToVertices.toVertices(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.textures.length, 36);
  });

  test("Create tile vertices for large tile", () {
    Tile tile =
    Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3);
    VerticeDTO verticeDTO = TileToVertices.toVertices(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.textures.length, 36);
  });
}
