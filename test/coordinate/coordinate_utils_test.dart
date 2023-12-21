import 'package:anki/constants.dart';
import 'package:anki/foundation/coordinates/coordinate_utils.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';
import 'dart:math';

import '../test_utils/test_objects.dart';

void main() {
  test("Region point to isoCoordinate", () {
    var iso = regionPointToIsoCoordinate(const Point(1, 1));
    expect(iso.isoX, 0);
    expect(iso.isoY, 2 * regionSideWidth);

    iso = regionPointToIsoCoordinate(const Point(-1, -1));
    expect(iso.isoX, 0);
    expect(iso.isoY, -2 * regionSideWidth);
  });

  test("IsoCoordinate to region point", () {
    var point = isoCoordinateToRegionPoint(const IsoCoordinate(0, 0));
    expect(const Point(0, 0), point);

    point = isoCoordinateToRegionPoint(
        IsoCoordinate(0, (8 * regionSideWidth).toDouble()));
    expect(const Point(0, 8), point);

    point = isoCoordinateToRegionPoint(
        IsoCoordinate((8 * regionSideWidth).toDouble(), 0));
    expect(const Point(8, 0), point);

    point = isoCoordinateToRegionPoint(IsoCoordinate(
        -(8 * regionSideWidth).toDouble(), -(8 * regionSideWidth).toDouble()));
    expect(const Point(-8, -8), point);
  });

  test('should return true if coordinate is within camera view', () {
    var camera = TestCamera();
    camera.topLeft = const IsoCoordinate.fromIso(0, 0);
    camera.bottomRight = const IsoCoordinate.fromIso(10, 10);
    var coordinate = const IsoCoordinate.fromIso(5, 5);

    bool result = isInView(coordinate, camera);

    expect(result, true);
  });

  test('should return false if coordinate is outside camera view', () {
    var camera = TestCamera();
    camera.topLeft = const IsoCoordinate.fromIso(0, 0);
    camera.bottomRight = const IsoCoordinate.fromIso(10, 10);
    var coordinate = const IsoCoordinate.fromIso(15, 15);

    bool result = isInView(coordinate, camera);

    expect(result, false);
  });

  test('should return true if coordinate is within camera view with padding', () {
    var camera = TestCamera();
    camera.topLeft = const IsoCoordinate.fromIso(0, 0);
    camera.bottomRight = const IsoCoordinate.fromIso(10, 10);
    var coordinate = const IsoCoordinate.fromIso(12, 12);
    double padding = 2.0;

    bool result = isInView(coordinate, camera, padding);

    expect(result, true);
  });

  test('should return false if coordinate is outside camera view even with padding', () {
    var camera = TestCamera();
    camera.topLeft = const IsoCoordinate.fromIso(0, 0);
    camera.bottomRight = const IsoCoordinate.fromIso(10, 10);
    var coordinate = const IsoCoordinate.fromIso(13, 13);
    double padding = 2.0;

    bool result = isInView(coordinate, camera, padding);

    expect(result, false);
  });
}
