import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/optimization/remove_hidden_tiles.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Tile should not be visible', () {
    // This tile should be hidden because there is a tile on the left, right and top of it
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, 0);
    var tiles = [hideThis, left, right, top];
    removeHiddenGameObjects(tiles);
    expect(tiles.contains(hideThis), false);
    expect(tiles.contains(left), true);
    expect(tiles.contains(right), true);
    expect(tiles.contains(top), true);
  });

  test('Tile should be visible', () {
    /// No tile on the left side
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, 0);
    var tiles = [hideThis, left, right, top];
    removeHiddenGameObjects(tiles);
    expect(tiles.contains(hideThis), true);
    expect(tiles.contains(right), true);
    expect(tiles.contains(left), true);
    expect(tiles.contains(top), true);
  });

  test('Tile should be visible', () {
    /// No tile on top
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, 0);
    var tiles = [hideThis, left, right, top];
    removeHiddenGameObjects(tiles);
    expect(tiles.contains(hideThis), true);
    expect(tiles.contains(right), true);
    expect(tiles.contains(left), true);
    expect(tiles.contains(top), true);
  });

  test('Tile should be visible', () {
    /// No tile on right side
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, 0);
    var tiles = [hideThis, left, right, top];
    removeHiddenGameObjects(tiles);
    expect(tiles.contains(hideThis), true);
    expect(tiles.contains(right), true);
    expect(tiles.contains(left), true);
    expect(tiles.contains(top), true);
  });
}
