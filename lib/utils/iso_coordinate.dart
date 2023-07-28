import 'dart:math';

/// Used for changing between isometric and cartesian coordinates
/// isoX-coordinate increases towards the top left
/// isoY-coordinate increases towards the top right
class IsoCoordinate {
  final double isoX;
  final double isoY;

  const IsoCoordinate(double pointX, double pointY)
      : isoX = pointX * 2 - 2 * pointY,
        isoY = pointX + pointY;

  const IsoCoordinate.fromIso(this.isoX, this.isoY);

  IsoCoordinate center(IsoCoordinate other) {
    return IsoCoordinate.fromIso(
        (isoX + other.isoX) / 2, (isoY + other.isoY) / 2);
  }

  double manhattanDistance(IsoCoordinate other) {
    return (isoX - other.isoX).abs() + (isoY - other.isoY).abs();
  }

  IsoCoordinate operator +(IsoCoordinate other) {
    return IsoCoordinate.fromIso(isoX + other.isoX, isoY + other.isoY);
  }

  Point<double> toPoint() {
    double y = isoY / 2 - isoX / 4;
    double x = isoY - y;
    return Point(x, y);
  }

  bool isBetween(IsoCoordinate topLeft, IsoCoordinate bottomRight) {
    return isoX >= topLeft.isoX &&
        isoX <= bottomRight.isoX &&
        isoY >= bottomRight.isoY &&
        isoY <= topLeft.isoY;
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is IsoCoordinate && other.isoX == isoX && other.isoY == isoY;
  }

  @override
  int get hashCode => isoX.hashCode ^ isoY.hashCode;

  @override
  String toString() {
    return "${isoX.toInt()}, ${isoY.toInt()}";
  }
}
