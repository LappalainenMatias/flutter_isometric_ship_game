import 'dart:math';

import '../coordinates/iso_coordinate.dart';

class CollisionBox {
  /// Bottom left point of the collision box
  late Point<double> _point;
  double _sideWidth;
  double _elevation;

  late double leftX;
  late double rightX;
  late double bottomY;
  late double topY;
  late double bottomZ;
  late double topZ;

  CollisionBox(IsoCoordinate isoCoordinate, this._sideWidth, this._elevation) {
    _point = isoCoordinate.toPoint();
    leftX = _point.x;
    rightX = _point.x + _sideWidth;
    bottomY = _point.y;
    topY = _point.y + _sideWidth;
    bottomZ = _elevation;
    topZ = _elevation + _sideWidth;
  }

  bool overlaps(CollisionBox other) {
    bool xOverlap = (leftX < other.rightX) && (other.leftX < rightX);
    bool yOverlap = (bottomY < other.topY) && (other.bottomY < topY);
    bool zOverlap = (bottomZ < other.topZ) && (other.bottomZ < topZ);
    return xOverlap && yOverlap && zOverlap;
  }

  void update(
      IsoCoordinate newIsoCoordinate, double newWidth, double newElevation) {
    _point = newIsoCoordinate.toPoint();
    _sideWidth = newWidth;
    _elevation = newElevation;
    leftX = _point.x;
    rightX = _point.x + _sideWidth;
    bottomY = _point.y;
    topY = _point.y + _sideWidth;
    bottomZ = _elevation;
    topZ = _elevation + _sideWidth;
  }
}
