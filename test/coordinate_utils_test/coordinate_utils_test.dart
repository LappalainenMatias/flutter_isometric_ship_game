import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/constants.dart';
import 'package:anki/coordinates/coordinate_utils.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';
import 'dart:math';

void main() {
  test("Region point to isoCoordinate", () {
    var iso = regionPointToIsoCoordinate(
        const Point(1, 1), LevelOfDetail.zoomlevel_19);
    expect(iso.isoX, 0);
    expect(iso.isoY, 2 * regionSideWidth);

    iso = regionPointToIsoCoordinate(
        const Point(1, 1), LevelOfDetail.zoomlevel_18);
    expect(iso.isoX, 0);
    expect(iso.isoY, 0);

    iso = regionPointToIsoCoordinate(
        const Point(3, 3), LevelOfDetail.zoomlevel_17);
    expect(iso.isoX, 0);
    expect(iso.isoY, 0);

    iso = regionPointToIsoCoordinate(
        const Point(-3, -3), LevelOfDetail.zoomlevel_17);
    expect(iso.isoX, 0);
    expect(iso.isoY, -256);
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
}
