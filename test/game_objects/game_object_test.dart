import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
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

  test("Sort different types of game objects", () {
    /*
    SingleTile item1 = SingleTile(TileType.bare, const IsoCoordinate(1, 0), 0);
    SingleTile item2 = SingleTile(TileType.sand, const IsoCoordinate(-1, 0), 0);
    AreaTile item3 = AreaTile(TileType.bare, const IsoCoordinate(-1, -1), 0);
    AreaTile item4 = AreaTile(TileType.grass, const IsoCoordinate(-1, 1), 0);
    NaturalItem item5 =
        NaturalItem(NaturalItemType.rock, const IsoCoordinate(-1, -2), 1);
    NaturalItem item6 =
        NaturalItem(NaturalItemType.birch, const IsoCoordinate(0, -1), 1);
    Boat item7 = Boat(const IsoCoordinate(0, 0), 0);
    Boat item8 = Boat(const IsoCoordinate(1, 1), 0);
    List<GameObject> gameObjects = [
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8
    ];
    gameObjects.sort();
    for (GameObject gameObject in gameObjects) {
      print(gameObject);
    }
    expect(gameObjects[0], item8);
    expect(gameObjects[1], item1);
    expect(gameObjects[2] == item7 || gameObjects[2] == item4, true);
    expect(gameObjects[3] == item7 || gameObjects[3] == item4, true);
    expect(gameObjects[4] == item6 || gameObjects[4] == item2, true);
    expect(gameObjects[5] == item6 || gameObjects[5] == item2, true);
    expect(gameObjects[6], item3);
    expect(gameObjects[7], item5);
     */

    /// Todo update this test
  });

  test("Change game objects to vertices", () {
    List<GameObject> gameObjects = [
      Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1),
      Tile(TileType.grass, const IsoCoordinate(-1, -1), -1, 2),
    ];
    Map<String, VerticeDTO> vertices = gameObjectsToVertices(gameObjects);
    expect(vertices.isEmpty, isFalse);
    expect(vertices["underWater"]!.positions.length, 36);
    expect(vertices["aboveWater"]!.positions.length, 36);
  });
}
