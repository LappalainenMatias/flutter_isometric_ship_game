import 'package:anki/collision/collision_detector.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/random_id.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Find collision", () {
    var others = [Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1, getRandomId())];
    var tile = Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1, getRandomId());
    expect(findCollisions(others, tile).length, 1);
  });
}
