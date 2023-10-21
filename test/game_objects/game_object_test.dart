import 'package:anki/dto/vertice_dto.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Sort tiles in x-axis", () {
    Tile item1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1);
    Tile item2 = Tile(TileType.sand, const IsoCoordinate(2, 0), 0, 1);
    Tile item3 = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1);
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item2);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item1);
  });

  test("Sort tiles in y-axis", () {
    Tile item1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1);
    Tile item2 = Tile(TileType.sand, const IsoCoordinate(0, -2), 0, 1);
    Tile item3 = Tile(TileType.grass, const IsoCoordinate(0, -1), 0, 1);
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item1);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item2);
  });

  test("Sort tiles in z-axis", () {
    Tile item1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1);
    Tile item2 = Tile(TileType.grass, const IsoCoordinate(0, 0), -2, 1);
    Tile item3 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1);
    Tile item4 = Tile(TileType.grass, const IsoCoordinate(0, 0), -1, 1);
    Tile item5 = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1);
    var gameObjects = [item1, item2, item3, item4, item5];
    gameObjects.sort();
    expect(gameObjects[0], item2);
    expect(gameObjects[1], item4);
    expect(gameObjects[2], item3);
    expect(gameObjects[3], item1);
    expect(gameObjects[4], item5);
  });

  test("Change game objects to draw atlas data", () {
    List<GameObject> gameObjects = [
      Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1),
      Tile(TileType.grass, const IsoCoordinate(-1, -1), -1, 2),
    ];
    ({VerticeDTO aboveWater, VerticeDTO underWater}) vertices =
        gameObjectsToVertices(gameObjects);
    expect(vertices.underWater.positions.length, 4);
    expect(vertices.aboveWater.positions.length, 4);
  });
}
