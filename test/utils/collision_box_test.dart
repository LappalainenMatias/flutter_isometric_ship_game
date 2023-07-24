import 'package:anki/map/region/game_objects/dynamic/boat/boat.dart';
import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Two boats should collide', () {
    var boat1 = Boat(const IsoCoordinate.fromIso(0, 0), 1);
    var boat2 = Boat(const IsoCoordinate.fromIso(1.0, 1.0), 1);

    /// todo change everywere to isTrue and isFalse
    expect(boat1.collision(boat2), isTrue);
  });

  test('Two boats should not collide', () {
    var boat1 = Boat(const IsoCoordinate.fromIso(0, 0), 1);
    var boat2 = Boat(const IsoCoordinate.fromIso(5, 5), 1);
    expect(boat1.collision(boat2), isFalse);
  });

  test('Boat and Tile should collide', () {
    var boat = Boat(const IsoCoordinate.fromIso(-2, -2), 1);
    var tile =
        SingleTile(TileType.sand, const IsoCoordinate.fromIso(-1, -1), 1);
    expect(boat.collision(tile), isTrue);
  });

  test('Boat and Tile should NOT collide', () {
    var boat = Boat(const IsoCoordinate.fromIso(0, 0), 1);
    var tile = SingleTile(TileType.sand, const IsoCoordinate.fromIso(4, 4), 1);
    expect(boat.collision(tile), isFalse);
  });
}
