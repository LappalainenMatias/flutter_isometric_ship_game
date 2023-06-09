import 'package:anki/map/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Find iso coordinate center', () {
    IsoCoordinate topLeft = const IsoCoordinate(0, 0);
    IsoCoordinate bottomRight = const IsoCoordinate(128, 128);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.isoX, 64);
    expect(center.isoY, 64);
  });

  test("Find iso coordinate center", () {
    IsoCoordinate topLeft = const IsoCoordinate(-2000, -1000);
    IsoCoordinate bottomRight = const IsoCoordinate(1000, 3000);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.isoX, -500);
    expect(center.isoY, 1000);
  });
}