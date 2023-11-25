import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/utils/random_id.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Decode and encode", () {
    var naturalItem = NaturalItemCube(
        NaturalItemPart.rockCube, const IsoCoordinate(1, 1), 1, getRandomId(),
        isVisible: false);
    var encoded = naturalItem.gameObjectToList();
    var decoded = NaturalItemCube.fromList(encoded);
    expect(decoded.type, NaturalItemPart.rockCube);
    expect(decoded.isoCoordinate, const IsoCoordinate(1, 1));
    expect(decoded.elevation, 1);
    expect(decoded.isVisible(), false);
  });
}
