import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/online/multiplayer.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Sort tiles in x-axis", () {
    Tile item1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1);
    Tile item2 = Tile(TileType.sand, const IsoCoordinate(2, 0), 0, 1);
    Tile item3 = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1);
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item1);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item2);
  });

  test("Sort tiles in y-axis", () {
    Tile item1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1);
    Tile item2 = Tile(TileType.sand, const IsoCoordinate(0, -2), 0, 1);
    Tile item3 = Tile(TileType.grass, const IsoCoordinate(0, -1), 0, 1);
    List<GameObject> gameObjects = [item1, item2, item3];
    gameObjects.sort();
    expect(gameObjects[0], item2);
    expect(gameObjects[1], item3);
    expect(gameObjects[2], item1);
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

  test("Sort different types of game objects", () {
    var player = Player(const IsoCoordinate.fromIso(-1, -1), 1);
    var multiplayer =
        MultiplayerGameObject(1, const IsoCoordinate.fromIso(2, -2), 1);
    var tile = Tile(TileType.grass, const IsoCoordinate.fromIso(-10, -3), 1, 1);
    var tile2 = Tile(TileType.grass, const IsoCoordinate.fromIso(100, 100), 1, 1);
    var list = [player, multiplayer, tile, tile2];
    list.sort();
    expect(list[0], tile);
    expect(list[1], multiplayer);
    expect(list[2], player);
    expect(list[3], tile2);
  });
}
