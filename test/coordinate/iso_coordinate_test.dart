import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("isoCoordinate sum", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(-1, -1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(2, 3);
    var res = c1 + c2;
    expect(res.isoX, 1.0);
    expect(res.isoY, 2.0);
  });

  test("isoCoordinate equals", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(-1, -1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(2, 3);
    IsoCoordinate c3 = const IsoCoordinate.fromIso(-1, -1);
    expect(c1 == c2, false);
    expect(c1 == c3, true);
  });

  test("Point to isoCoordinate and back to point", () {
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

  test("IsoCoordinate is between two iso coordinates", () {
    IsoCoordinate topLeft = const IsoCoordinate.fromIso(-1, 1);
    IsoCoordinate bottomRight = const IsoCoordinate.fromIso(3, -2);
    IsoCoordinate c1 = const IsoCoordinate.fromIso(-1, 1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(3, -2);
    IsoCoordinate c3 = const IsoCoordinate.fromIso(1, -1);
    IsoCoordinate c4 = const IsoCoordinate.fromIso(-1, 2);
    IsoCoordinate c5 = const IsoCoordinate.fromIso(4, -2);
    expect(c1.isBetween(topLeft, bottomRight), true);
    expect(c2.isBetween(topLeft, bottomRight), true);
    expect(c3.isBetween(topLeft, bottomRight), true);
    expect(c4.isBetween(topLeft, bottomRight), false);
    expect(c5.isBetween(topLeft, bottomRight), false);
  });

  test("Isocoordinate distance to", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(0, 0);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(0, 1);
    IsoCoordinate c3 = const IsoCoordinate.fromIso(-1, -1);
    expect(c1.manhattanDistanceTo(c2), 1);
    expect(c2.manhattanDistanceTo(c3), 3);
  });

  test("Multiple isoCoordinate", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(1, 1);
    var c2 = c1 * 0.5;
    var c3 = c1 * -2.0;
    expect(c2.isoX, 0.5);
    expect(c2.isoY, 0.5);
    expect(c3.isoX, -2.0);
    expect(c3.isoY, -2.0);
  });

  test("Minus isoCoordinate", () {
    IsoCoordinate c1 = const IsoCoordinate.fromIso(1, 1);
    IsoCoordinate c2 = const IsoCoordinate.fromIso(2, 2);
    IsoCoordinate c3 = const IsoCoordinate.fromIso(-1, -1);
    var c4 = c2 - c1;
    var c5 = c3 - c1;
    expect(c4.isoX, 1.0);
    expect(c4.isoY, 1.0);
    expect(c5.isoX, -2.0);
    expect(c5.isoY, -2.0);
  });

  test("Isocoordinate to unit vector", () {
    var c1 = const IsoCoordinate.fromIso(1, 1);
    var c2 = const IsoCoordinate.fromIso(0, 0);
    var c3 = const IsoCoordinate.fromIso(-0.5, -1);
    var c4 = c1.toUnitVector();
    var c5 = c2.toUnitVector();
    var c6 = c3.toUnitVector();
    expect(c4.isoX - 0.707 < 0.01, isTrue);
    expect(c4.isoY - 0.707 < 0.01, isTrue);
    expect(c5.isoX, 1.0);
    expect(c5.isoY, 0.0);
    expect(c6.isoX + 0.224 < 0.01, isTrue);
    expect(c6.isoY + 0.497 < 0.01, isTrue);
  });
}
