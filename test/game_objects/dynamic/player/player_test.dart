import 'package:anki/game_objects/dynamic/player/player.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Decode and encode player", () {
    Player boat = Player(const IsoCoordinate(1, 1), 0.0);
    String encoded = boat.encode();
    Player decoded = Player.fromString(encoded);
    expect(const IsoCoordinate(1, 1), decoded.isoCoordinate);
    expect(0.0, decoded.elevation);
  });
}
