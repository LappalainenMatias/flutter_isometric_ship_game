import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/map_creation_rules.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Tile rule limits", () {
    expect(TileRule(TileType.grass, -1, 0).match(-1.1, -0.1), true);
    expect(TileRule(TileType.grass, -1, 0).match(-0.9, 0), false);
    expect(TileRule(TileType.grass, -1, 0).match(-1.1, 0.1), false);
    expect(TileRule(TileType.grass, 0.1, 0.1).match(0.0, 0.0), true);
    expect(TileRule(TileType.grass, null, 0.1).match(0.5, 0.0), true);
    expect(TileRule(TileType.grass, null, null).match(1.0, 1.0), true);
  });
}
