import 'package:anki/map/region/game_objects/ground/create_tile.dart';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';
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

  test("Create tile from elevation and moisture", () {
    /// Get tile throws error if no tile rule matches
    /// Always one tile rule should match
    getTile(0.0, 0.0, const Point(0, 0));
    getTile(-1000000, -1000000, const Point(-1000000, -1000000));
    getTile(1000000, 1000000, const Point(1000000, 1000000));
    getTile(-1000000, 1000000, const Point(-1000000, 1000000));
    getTile(1000000, -1000000, const Point(1000000, -1000000));
  });
}
