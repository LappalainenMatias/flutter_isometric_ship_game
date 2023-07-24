import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Find isocoordinate center', () {
    IsoCoordinate topLeft = const IsoCoordinate.fromIso(0, 0);
    IsoCoordinate bottomRight = const IsoCoordinate.fromIso(128, 128);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.isoX, 64);
    expect(center.isoY, 64);
  });

  test("Find isocoordinate center", () {
    IsoCoordinate topLeft = const IsoCoordinate.fromIso(-2000, -1000);
    IsoCoordinate bottomRight = const IsoCoordinate.fromIso(1000, 3000);
    IsoCoordinate center = topLeft.center(bottomRight);
    expect(center.isoX, -500);
    expect(center.isoY, 1000);
  });

  test("Manhattan distance", () {
    IsoCoordinate topLeft = const IsoCoordinate.fromIso(-1, -1);
    IsoCoordinate bottomRight = const IsoCoordinate.fromIso(3, 2);
    double distance = topLeft.manhattanDistance(bottomRight);
    expect(distance, 7.0);
  });

  test("Isocoordinate sum", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(-1, -1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(2, 3);
    var res = c1 + c2;
    expect(res.isoX, 1.0);
    expect(res.isoY, 2.0);
  });

  test("Isocoordinate equals", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(-1, -1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(2, 3);
    IsoCoordinate c3 = const IsoCoordinate.fromIso(-1, -1);
    expect(c1 == c2, false);
    expect(c1 == c3, true);
  });

  test("Point to isometric coordinate and back to point", () {
    double x = -2;
    double y = 2;
    IsoCoordinate c1 = IsoCoordinate(x, y);
    Point p1 = c1.toPoint();
    expect(p1.x, x);
    expect(p1.y, y);
  });

  test('IsoCoordinate correctly converts to point', () {
    const pointX = 3.0;
    const pointY = 4.0;
    const isoCoordinate = IsoCoordinate(pointX, pointY);

    const expectedIsoX = pointX * 2 - 2 * pointY;
    const expectedIsoY = pointX + pointY;

    expect(isoCoordinate.isoX, expectedIsoX);
    expect(isoCoordinate.isoY, expectedIsoY);
  });
}