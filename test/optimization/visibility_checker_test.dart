import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/optimization/visibility_checker.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Tile should not be visible', () {
    // This tile should be hidden because there is a tile on the left, right and top of it
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, 0);
    visibilityChecker([hideThis, left, right, top]);
    expect(hideThis.isVisible(), false);
    expect(left.isVisible(), true);
    expect(right.isVisible(), true);
    expect(top.isVisible(), true);
  });

  test('Tile should be visible', () {
    /// No tile on the left side
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, 0);
    visibilityChecker([hideThis, left, right, top]);
    expect(hideThis.isVisible(), true);
    expect(left.isVisible(), true);
    expect(right.isVisible(), true);
    expect(top.isVisible(), true);
  });

  test('Tile should be visible', () {
    /// No tile on top
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(0, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, 0);
    visibilityChecker([hideThis, left, right, top]);
    expect(hideThis.isVisible(), true);
    expect(left.isVisible(), true);
    expect(right.isVisible(), true);
    expect(top.isVisible(), true);
  });

  test('Tile should be visible', () {
    /// No tile on right side
    var hideThis = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, 0);
    var right = Tile(TileType.grass, const IsoCoordinate(1, 1), 0, 1, 0);
    var left = Tile(TileType.grass, const IsoCoordinate(1, 0), 0, 1, 0);
    var top = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, 0);
    visibilityChecker([hideThis, left, right, top]);
    expect(hideThis.isVisible(), true);
    expect(left.isVisible(), true);
    expect(right.isVisible(), true);
    expect(top.isVisible(), true);
  });
}
