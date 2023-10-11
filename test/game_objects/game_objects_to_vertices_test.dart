import 'package:anki/dto/vertice_dto.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
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
    Tile tile = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3);
    VerticeDTO verticeDTO = TileToVertices.toVertices(tile);
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.textures.length, 36);
  });

  test("Hide cube sides", () {
    var onlyLeftSide = CubeVerticesCreator.toVertices(
      TileType.ice,
      const IsoCoordinate(0, 0),
      0,
      leftSideVisible: true,
      topSideVisible: false,
      rightSideVisible: false,
    );
    var onlyTopSide = CubeVerticesCreator.toVertices(
      TileType.ice,
      const IsoCoordinate(0, 0),
      0,
      leftSideVisible: false,
      topSideVisible: true,
      rightSideVisible: false,
    );
    var onlyRightSide = CubeVerticesCreator.toVertices(
      TileType.ice,
      const IsoCoordinate(0, 0),
      0,
      leftSideVisible: false,
      topSideVisible: false,
      rightSideVisible: true,
    );
    expect(onlyLeftSide.positions.length, 12);
    expect(onlyLeftSide.textures.length, 12);
    expect(onlyTopSide.positions.length, 12);
    expect(onlyTopSide.textures.length, 12);
    expect(onlyRightSide.positions.length, 12);
    expect(onlyRightSide.textures.length, 12);
  });
}
