import 'dart:math';

class IsoCoordinate {
  final double isoX;
  final double isoY;

  const IsoCoordinate(double x, double y)
      : isoX = x * 2 - 2 * y,
        isoY = x + y;

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
