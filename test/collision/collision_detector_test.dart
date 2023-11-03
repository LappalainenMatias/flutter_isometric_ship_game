import 'dart:collection';

import 'package:anki/collision/collision_detector.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Find collision", () {
    var others = [Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1)];
    var tile = Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1);
    expect(findCollisions(others, tile).length, 1);
  });

  test("No collision because game object should be skipped", () {
    var others = [Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1)];
    var tile = Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1);
    var skip = HashSet<GameObject>();
    skip.add(others.first);
    expect(findCollisions(others, tile, skip).length, 0);
  });
}
