import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/movement/keyboard_player_mover.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("With high dt player should move more", () {
    var player = Player(const IsoCoordinate(0, 0), 0);
    var playerMover = KeyboardPlayerMover(player);
    playerMover.pressed(LogicalKeyboardKey.keyW);
    playerMover.pressed(LogicalKeyboardKey.keyD);
    var firstX = player.isoCoordinate.isoX;
    var firstY = player.isoCoordinate.isoY;
    playerMover.move(1);
    var secondX = player.isoCoordinate.isoX;
    var secondY = player.isoCoordinate.isoY;
    playerMover.move(2);
    var thirdX = player.isoCoordinate.isoX;
    var thirdY = player.isoCoordinate.isoY;

    var firstDiff = (secondX - firstX).abs() + (secondY - firstY).abs();
    var secondDiff = (thirdX - secondX).abs() + (thirdY - secondY).abs();
    expect(firstDiff * 2, secondDiff);
  });
}
