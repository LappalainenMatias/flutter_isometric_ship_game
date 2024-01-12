import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/game_specific/game_object/tile_creator.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:anki/game_specific/terrain/terrain_creation_rules.dart';
import 'package:test/test.dart';
import 'dart:math';

import '../test_utils/test_objects.dart';

void main() {
  test("Tile rule limits", () {
    expect(TileRule(TileType.grass, -1, 0).match(-1.1, -0.1), true);
    expect(TileRule(TileType.grass, -1, 0).match(-0.9, 0), false);
    expect(TileRule(TileType.grass, -1, 0).match(-1.1, 0.1), false);
    expect(TileRule(TileType.grass, 0.1, 0.1).match(0.0, 0.0), true);
    expect(TileRule(TileType.grass, null, 0.1).match(0.5, 0.0), true);
    expect(TileRule(TileType.grass, null, null).match(1.0, 1.0), true);
  });

  test("Create tile from elevation and moisture for svalbard creation rules",
      () {
    /// Get tile throws error if no tile rule matches
    /// Always one tile rule should match
    TileCreator.create(
        0.0, 0.0, const Point(0, 0), DefaultTerrainCreationRules().tileRules());
    TileCreator.create(-1000000, -1000000, const Point(-1000000, -1000000),
        DefaultTerrainCreationRules().tileRules());
    TileCreator.create(1000000, 1000000, const Point(1000000, 1000000),
        DefaultTerrainCreationRules().tileRules());
    TileCreator.create(-1000000, 1000000, const Point(-1000000, 1000000),
        DefaultTerrainCreationRules().tileRules());
    TileCreator.create(1000000, -1000000, const Point(1000000, -1000000),
        DefaultTerrainCreationRules().tileRules());
  });

  test("Create tile from elevation and moisture for finland creation rules",
      () {
    /// Get tile throws error if no tile rule matches
    /// Always one tile rule should match
    TileCreator.create(
        0.0, 0.0, const Point(0, 0), TestMapCreationRules().tileRules());
    TileCreator.create(-1000000, -1000000, const Point(-1000000, -1000000),
        TestMapCreationRules().tileRules());
    TileCreator.create(1000000, 1000000, const Point(1000000, 1000000),
        TestMapCreationRules().tileRules());
    TileCreator.create(-1000000, 1000000, const Point(-1000000, 1000000),
        TestMapCreationRules().tileRules());
    TileCreator.create(1000000, -1000000, const Point(1000000, -1000000),
        TestMapCreationRules().tileRules());
  });

  test("Check that elevation and coordinate stays the same", () {
    Tile tile = TileCreator.create(
        1.0, 0.0, const Point(1, 1), DefaultTerrainCreationRules().tileRules());
    expect(tile.elevation, 1.0);
    expect(tile.topLeft, const IsoCoordinate(1, 1));
  });
}
