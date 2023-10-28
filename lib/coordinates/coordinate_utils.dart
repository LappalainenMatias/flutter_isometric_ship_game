import 'dart:math';
import '../camera/camera.dart';
import '../constants.dart';
import 'iso_coordinate.dart';

/// Some regions are so tall that they are visible even when they are not in
/// the camera view. This padding fixes that.
const double _visibleRegionPadding = 128;

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

bool isInView(IsoCoordinate coordinate, Camera camera) {
  /// We add some extra padding because some regions can be so tall (tiles have
  /// large elevation) that they are visible even when they are not in the camera view.
  IsoCoordinate topLeft = camera.topLeft +
      const IsoCoordinate.fromIso(
          -_visibleRegionPadding, _visibleRegionPadding);
  IsoCoordinate bottomRight = camera.bottomRight +
      const IsoCoordinate.fromIso(
          _visibleRegionPadding, -_visibleRegionPadding);
  return coordinate.isBetween(topLeft, bottomRight);
}
