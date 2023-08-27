import 'dart:math';
import '../camera/camera.dart';
import '../constants.dart';
import 'iso_coordinate.dart';

/// Some regions are so tall that they are visible even when they are not in
/// the camera view. This padding fixes that.
const double _visibleRegionPadding = 64;

IsoCoordinate coordinateToRegionBottomCoordinate(IsoCoordinate isoCoordinate) {
  Point<int> regionPoint = isoCoordinateToRegionPoint(isoCoordinate);
  return regionPointToIsoCoordinate(regionPoint);
}

IsoCoordinate regionPointToIsoCoordinate(Point<int> regionCoordinate) {
  var isoCoordinate = IsoCoordinate(
    regionCoordinate.x * regionSideWidth.toDouble(),
    regionCoordinate.y * regionSideWidth.toDouble(),
  );
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
  /// We add some extra padding because some regions can be so tall that
  /// they are visible even when they are not in the camera view.
  IsoCoordinate topLeft = camera.topLeft +
      const IsoCoordinate.fromIso(
          -_visibleRegionPadding, _visibleRegionPadding);
  IsoCoordinate bottomRight = camera.bottomRight +
      const IsoCoordinate.fromIso(
          _visibleRegionPadding, -_visibleRegionPadding);
  return coordinate.isBetween(topLeft, bottomRight);
}
