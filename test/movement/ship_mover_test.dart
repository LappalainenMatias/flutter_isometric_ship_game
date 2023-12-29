import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/movement/keyboard_ship_mover.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("With high dt player should move more", () {
    var ship = Ship(const IsoCoordinate(0, 0), 0, 0);
    var shipMover = KeyboardShipMover(ship);
    shipMover.pressed(LogicalKeyboardKey.keyW);
    shipMover.pressed(LogicalKeyboardKey.keyD);
    var firstX = ship.topLeft.isoX;
    var firstY = ship.topLeft.isoY;
    shipMover.move(1);
    var secondX = ship.topLeft.isoX;
    var secondY = ship.topLeft.isoY;
    shipMover.move(2);
    var thirdX = ship.topLeft.isoX;
    var thirdY = ship.topLeft.isoY;

    var firstDiff = (secondX - firstX).abs() + (secondY - firstY).abs();
    var secondDiff = (thirdX - secondX).abs() + (thirdY - secondY).abs();
    expect(firstDiff * 2, secondDiff);
  });
}
