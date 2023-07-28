import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/utils/custom_color.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'package:test/test.dart';

void main() {
  test("Create single tile vertices", () {
    SingleTile tile = SingleTile(TileType.taiga, const IsoCoordinate(0, 0), 1);
    VerticeDTO verticeDTO = SingleTileToVertices.toVertices(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });

  test("Create areatile vertices", () {
    AreaTile tile =
        AreaTile(TileType.taiga, const IsoCoordinate(0, 0), 1, width: 3);
    VerticeDTO verticeDTO = AreaTileToVertices.toVertices(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });

  test("Create rock vertices", () {
    NaturalItemType rock = NaturalItemType.rock;
    VerticeDTO vertices = rock.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });

  test("Create spruce vertices", () {
    NaturalItemType spruce = NaturalItemType.spruce;
    VerticeDTO vertices =
        spruce.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });

  test("Create birch vertices", () {
    NaturalItemType birch = NaturalItemType.birch;
    VerticeDTO vertices = birch.toVertices!(const IsoCoordinate(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });

  test('Cube should have 18 vertices and 18 colors', () {
    VerticeDTO verticeDTO = CubeVerticeCreator.toVertices(
      const IsoCoordinate(0, 0),
      1,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 101, 101, 101),
      const CustomColor.fromARGB(255, 102, 102, 102),
    );
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });

  test('Cube color should be solid blue when it is deep underwater', () {
    VerticeDTO verticeDTO = CubeVerticeCreator.toVertices(
      const IsoCoordinate(0, 0),
      -10,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 105, 105, 105),
      const CustomColor.fromARGB(255, 110, 110, 110),
    );
    for (int i = 0; i < verticeDTO.colors.length - 1; i++) {
      expect(verticeDTO.colors[i], verticeDTO.colors[i + 1]);
    }
  });
}
