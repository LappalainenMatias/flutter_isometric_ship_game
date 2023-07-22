import 'package:anki/map/region/game_objects/dynamic/boat/boat.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Decode and encode boat object", () {
    Boat boat = Boat(const IsoCoordinate(1, 1), 0.0);
    String encoded = boat.encode();
    Boat decoded = Boat.fromString(encoded);
    expect(const IsoCoordinate(1, 1), decoded.coordinate);
    expect(0.0, decoded.elevation);
  });
}
