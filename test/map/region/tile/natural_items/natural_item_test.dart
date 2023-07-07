import 'package:anki/map/region/tile/natural_items/natural_items.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("Create rock", () {
    NaturalItem rock = NaturalItem.rock;
    Tile tile = Tile(TileType.taiga, const Point(0, 0), 1, rock);
    List posAndCols = rock.positionsAndColors!(tile);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });

  test("Create spruce", () {
    NaturalItem spruce = NaturalItem.spruce;
    Tile tile = Tile(TileType.taiga, const Point(0, 0), 1, spruce);
    List posAndCols = spruce.positionsAndColors!(tile);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });

  test("Create birch", () {
    NaturalItem birch = NaturalItem.birch;
    Tile tile = Tile(TileType.taiga, const Point(0, 0), 1, birch);
    List posAndCols = birch.positionsAndColors!(tile);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });

  test("Create flower", () {
    NaturalItem flower = NaturalItem.flower;
    Tile tile = Tile(TileType.taiga, const Point(0, 0), 1, flower);
    List posAndCols = flower.positionsAndColors!(tile);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });
}