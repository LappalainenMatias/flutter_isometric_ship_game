import 'dart:math';

/// Used for changing between isometric and cartesian coordinates
/// isoX-coordinate increases towards bottom right
/// isoY-coordinate increases towards bottom left
class IsoCoordinate {
  final double isoX;
  final double isoY;

  /// Use this only when changing from "normal" cartesian coordinates
  /// to isometric coordinates because it does the projection
  /// Most of the time you should use [IsoCoordinate.fromIso]
  const IsoCoordinate(double pointX, double pointY)
      : isoX = pointX * 2 - 2 * pointY,
        isoY = pointX + pointY;

  /// Does not do the projection and works like a normal 2D point
  const IsoCoordinate.fromIso(this.isoX, this.isoY);

  IsoCoordinate operator +(IsoCoordinate other) {
    return IsoCoordinate.fromIso(isoX + other.isoX, isoY + other.isoY);
  }

  /// Does the projection to opposite direction
  Point<double> toPoint() {
    var pointData = isoToCartesian();
    return Point(pointData.$1, pointData.$2);
  }

  (double x, double y) isoToCartesian() {
    double y = isoY / 2 - isoX / 4;
    double x = isoY - y;
    return (x, y);
  }

  double manhattanDistanceTo(IsoCoordinate other) {
    return (isoX - other.isoX).abs() + (isoY - other.isoY).abs();
  }

  bool isBetween(IsoCoordinate topLeft, IsoCoordinate bottomRight) {
    return !(isoX < topLeft.isoX ||
        isoX > bottomRight.isoX ||
        isoY > bottomRight.isoY ||
        isoY < topLeft.isoY);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is IsoCoordinate && other.isoX == isoX && other.isoY == isoY;
  }

  IsoCoordinate operator *(double dt) {
    return IsoCoordinate.fromIso(isoX * dt, isoY * dt);
  }

  IsoCoordinate operator -(IsoCoordinate other) {
    return IsoCoordinate.fromIso(isoX - other.isoX, isoY - other.isoY);
  }

  @override
  int get hashCode => isoX.hashCode ^ isoY.hashCode;

  @override
  String toString() {
    return "$isoX, $isoY";
  }

  /// (0,0) returns (1,0) vector
  IsoCoordinate toUnitVector() {
    var res = sqrt(isoX * isoX + isoY * isoY);
    if (res == 0) return const IsoCoordinate.fromIso(1, 0);
    return this * (1 / res);
  }

  IsoCoordinate copy() {
    return IsoCoordinate.fromIso(isoX, isoY);
  }
}
