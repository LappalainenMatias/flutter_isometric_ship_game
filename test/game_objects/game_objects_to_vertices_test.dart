import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/utils/custom_color.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
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

  test("Create rock vertices", () {
    NaturalItemType rock = NaturalItemType.rock;
    VerticeDTO vertices = rock.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.textures.length >= 36, true);
  });

  test("Create spruce vertices", () {
    NaturalItemType spruce = NaturalItemType.spruce;
    VerticeDTO vertices =
        spruce.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.textures.length >= 36, true);
  });

  test("Create birch vertices", () {
    NaturalItemType birch = NaturalItemType.birch;
    VerticeDTO vertices = birch.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.textures.length >= 36, true);
  });

  test('Cube color should be solid blue when it is deep underwater', () {
    throw Exception("Implement this feature back in");
  });
}
