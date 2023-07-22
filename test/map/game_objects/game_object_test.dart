import 'package:anki/map/region/game_objects/dynamic/boat/boat.dart';
import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/region/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';
import 'dart:math';

void main() {
  test("Sort different types of game objects", () {
    SingleTile item1 = SingleTile(TileType.bare, const Point<double>(1, 0), 0);
    SingleTile item2 = SingleTile(TileType.sand, const Point<double>(-1, 0), 0);
    AreaTile item3 = AreaTile(TileType.bare, const Point<double>(-1, -1), 0);
    AreaTile item4 = AreaTile(TileType.grass, const Point<double>(-1, 1), 0);
    NaturalItem item5 =
        NaturalItem(NaturalItemType.rock, const Point<double>(-1, -2), 0);
    NaturalItem item6 =
        NaturalItem(NaturalItemType.birch, const Point<double>(0, -1), 0);
    Boat item7 = Boat(const IsoCoordinate(0, 0), 0);
    Boat item8 = Boat(const IsoCoordinate(1, 1), 0);
    List<GameObject> gameObjects = [item1, item2, item3, item4, item5, item6, item7, item8];
    gameObjects.sort();
    expect(gameObjects[0], item8);
    expect(gameObjects[1], item1);
    expect(gameObjects[2] == item7 || gameObjects[2] == item4, true);
    expect(gameObjects[3] == item7 || gameObjects[3] == item4, true);
    expect(gameObjects[4] == item6 || gameObjects[4] == item2, true);
    expect(gameObjects[5] == item6 || gameObjects[5] == item2, true);
    expect(gameObjects[6], item3);
    expect(gameObjects[7], item5);
  });
}
