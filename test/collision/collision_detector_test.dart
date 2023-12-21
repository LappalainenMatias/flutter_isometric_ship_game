import 'package:anki/foundation/collision/collision_detector.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Find collision", () {
    var others = [Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, getRandomId())];
    var tile = Tile(TileType.grass, const IsoCoordinate(0, 0), 0, 1, getRandomId());
    expect(findCollisions(others, tile).length, 1);
  });
}
