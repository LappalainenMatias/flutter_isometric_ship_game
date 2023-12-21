import 'dart:math';
import '../../constants.dart';
import '../camera/camera.dart';
import 'iso_coordinate.dart';

IsoCoordinate regionPointToIsoCoordinate(Point<int> regionCoordinate) {
  double x = regionCoordinate.x * regionSideWidth.toDouble();
  x = x - x % regionSideWidth;
  double y = regionCoordinate.y * regionSideWidth.toDouble();
  y = y - y % regionSideWidth;
  var isoCoordinate = IsoCoordinate(x, y);
  return isoCoordinate;
}

/// Returns the region coordinate which the isoCoordinate is part of
Point<int> isoCoordinateToRegionPoint(IsoCoordinate isoCoordinate) {
  Point isoPoint = isoCoordinate.toPoint();
  int regionX = (isoPoint.x / regionSideWidth).floor();
  int regionY = (isoPoint.y / regionSideWidth).floor();
  return Point(regionX, regionY);
}

bool isInView(IsoCoordinate coordinate, Camera camera, [double padding = 0.0]) {
  /// We often add some extra padding because some regions can be so tall (tiles have
  /// large elevation) that they are visible even when their bottom iso coordinate is not in view.
  var topLeft = camera.topLeft + IsoCoordinate.fromIso(-padding, -padding);
  var bottomRight =
      camera.bottomRight + IsoCoordinate.fromIso(padding, padding);
  return coordinate.isBetween(topLeft, bottomRight);
}
