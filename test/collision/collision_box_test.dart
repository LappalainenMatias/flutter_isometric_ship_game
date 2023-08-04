import 'package:anki/game_objects/dynamic/player/player.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Two players should collide', () {
    var player1 = Player(const IsoCoordinate.fromIso(0, 0), 1);
    var player2 = Player(const IsoCoordinate.fromIso(1.0, 1.0), 1);
    expect(player1.collision(player2), isTrue);
  });

  test('Two players should not collide', () {
    var player1 = Player(const IsoCoordinate.fromIso(0, 0), 1);
    var player2 = Player(const IsoCoordinate.fromIso(5, 5), 1);
    expect(player1.collision(player2), isFalse);
  });

  test('Player and Tile should collide', () {
    var player = Player(const IsoCoordinate.fromIso(-2, -2), 1);
    var tile = Tile(TileType.sand, const IsoCoordinate.fromIso(-1, -1), 1, 1);
    expect(player.collision(tile), isTrue);
  });

  test('Player and Tile should NOT collide', () {
    var player = Player(const IsoCoordinate.fromIso(0, 0), 1);
    var tile = Tile(TileType.sand, const IsoCoordinate.fromIso(4, 4), 1, 1);
    expect(player.collision(tile), isFalse);
  });
}
