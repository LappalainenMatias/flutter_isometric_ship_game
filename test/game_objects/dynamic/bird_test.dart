import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/bird.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Bird should move towards target", () {
    var flyingTo = Flying(const IsoCoordinate(1, 1), 2, 0.1);
    var bird = Bird(const IsoCoordinate(0, 0), 1, flyingTo);
    var oldIsoDiff = bird.isoCoordinate.manhattanDistanceTo(flyingTo.target);
    var oldElevationDiff = (bird.elevation - flyingTo.elevationTarget).abs();
    bird.update();
    var newIsoDiff = bird.isoCoordinate.manhattanDistanceTo(flyingTo.target);
    var newElevationDiff = (bird.elevation - flyingTo.elevationTarget).abs();
    expect(newIsoDiff < oldIsoDiff, isTrue);
    expect(newElevationDiff < oldElevationDiff, isTrue);
  });
}
