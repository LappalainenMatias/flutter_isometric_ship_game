import 'package:anki/map/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Find iso coordinate center', () {
    IsoCoordinate topLeft = const IsoCoordinate(0, 0);
    IsoCoordinate bottomRight = const IsoCoordinate(128, 128);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.x, 64);
    expect(center.y, 64);
  });

  test("Find iso coordinate center", () {
    IsoCoordinate topLeft = const IsoCoordinate(-2000, -1000);
    IsoCoordinate bottomRight = const IsoCoordinate(1000, 3000);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.x, -500);
    expect(center.y, 1000);
  });

  test("Euclidean isometric distance", () {
    IsoCoordinate topLeft = const IsoCoordinate(0, 0);
    IsoCoordinate bottomRight = const IsoCoordinate(1, 1);
    double distance = topLeft.euclideanIsoDistance(bottomRight);
    expect(distance, 2);
  });

  test("Euclidean isometric distance", () {
    IsoCoordinate topLeft = const IsoCoordinate(-10, 5); // -30, -5
    IsoCoordinate bottomRight = const IsoCoordinate(5, 4); // 2, 9
    double distance = topLeft.euclideanIsoDistance(bottomRight);
    expect(distance, 32 + 14);
  });
}