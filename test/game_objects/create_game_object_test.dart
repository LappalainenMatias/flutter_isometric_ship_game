import 'package:anki/game_objects/create_game_object.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("Tile rule limits", () {
    expect(TileRule(TileType.taiga, -1, 0).match(-1.1, -0.1), true);
    expect(TileRule(TileType.taiga, -1, 0).match(-0.9, 0), false);
    expect(TileRule(TileType.taiga, -1, 0).match(-1.1, 0.1), false);
    expect(TileRule(TileType.taiga, 0.1, 0.1).match(0.0, 0.0), true);
    expect(TileRule(TileType.taiga, null, 0.1).match(0.5, 0.0), true);
    expect(TileRule(TileType.taiga, null, null).match(1.0, 1.0), true);
  });

  test("Create tile from elevation and moisture for svalbard creation rules",
      () {
    /// Get tile throws error if no tile rule matches
    /// Always one tile rule should match
    SingleTileCreator.create(
        0.0, 0.0, const Point(0, 0), SvalbardCreationRules().tileRules());
    SingleTileCreator.create(-1000000, -1000000,
        const Point(-1000000, -1000000), SvalbardCreationRules().tileRules());
    SingleTileCreator.create(1000000, 1000000, const Point(1000000, 1000000),
        SvalbardCreationRules().tileRules());
    SingleTileCreator.create(-1000000, 1000000, const Point(-1000000, 1000000),
        SvalbardCreationRules().tileRules());
    SingleTileCreator.create(1000000, -1000000, const Point(1000000, -1000000),
        SvalbardCreationRules().tileRules());
  });

  test("Create tile from elevation and moisture for finland creation rules",
      () {
    /// Get tile throws error if no tile rule matches
    /// Always one tile rule should match
    SingleTileCreator.create(
        0.0, 0.0, const Point(0, 0), FinlandCreationRules().tileRules());
    SingleTileCreator.create(-1000000, -1000000,
        const Point(-1000000, -1000000), FinlandCreationRules().tileRules());
    SingleTileCreator.create(1000000, 1000000, const Point(1000000, 1000000),
        FinlandCreationRules().tileRules());
    SingleTileCreator.create(-1000000, 1000000, const Point(-1000000, 1000000),
        FinlandCreationRules().tileRules());
    SingleTileCreator.create(1000000, -1000000, const Point(1000000, -1000000),
        FinlandCreationRules().tileRules());
  });

  test("Check that elevation and coordinate stays the same", () {
    SingleTile tile = SingleTileCreator.create(
        1.0, 0.0, const Point(1, 1), SvalbardCreationRules().tileRules());
    expect(tile.elevation, 1.0);
    expect(tile.isoCoordinate, const IsoCoordinate(1, 1));
  });
}
