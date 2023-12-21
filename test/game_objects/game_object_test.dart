
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Sort tiles in x-axis", () {
    Tile item1 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, getRandomId());
    Tile item2 =
        Tile(TileType.sand, const IsoCoordinate(2, 0), 0, 1, getRandomId());
    Tile item3 =
        Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, getRandomId());
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item1);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item2);
  });

  test("Sort tiles in y-axis", () {
    Tile item1 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, getRandomId());
    Tile item2 =
        Tile(TileType.sand, const IsoCoordinate(0, -2), 0, 1, getRandomId());
    Tile item3 =
        Tile(TileType.grass, const IsoCoordinate(0, -1), 0, 1, getRandomId());
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item2);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item1);
  });

  test("Sort tiles in z-axis", () {
    Tile item1 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, getRandomId());
    Tile item2 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), -2, 1, getRandomId());
    Tile item3 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, getRandomId());
    Tile item4 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), -1, 1, getRandomId());
    Tile item5 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, getRandomId());
    var gameObjects = [item1, item2, item3, item4, item5];
    gameObjects.sort();
    expect(gameObjects[0], item2);
    expect(gameObjects[1], item4);
    expect(gameObjects[2], item3);
    expect(gameObjects[3], item1);
    expect(gameObjects[4], item5);
  });

  test("Sort different types of game objects", () {
    var ship = Ship(const IsoCoordinate.fromIso(-1, -1), 1, getRandomId());
    var ship2 = Ship(
        const IsoCoordinate.fromIso(2, -2), 0, getRandomId());
    var tile = Tile(TileType.grass, const IsoCoordinate.fromIso(-10, -3), 1, 1,
        getRandomId());
    var tile2 = Tile(TileType.grass, const IsoCoordinate.fromIso(100, 100), 1,
        1, getRandomId());
    var list = <GameObject>[ship, ship2, tile, tile2];
    list.sort();
    expect(list[0], ship2);
    expect(list[1], tile);
    expect(list[2], ship);
    expect(list[3], tile2);
  });
}
