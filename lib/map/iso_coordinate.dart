class IsoCoordinate {
  final double x;
  final double y;
  final double isoX;
  final double isoY;

  const IsoCoordinate(this.x, this.y)
      : isoX = x * 2 - 2 * y,
        isoY = x + y;

  @override
  String toString() {
    return 'IsoCoordinate{x: $isoX, y: $isoY}';
  }

  IsoCoordinate operator +(IsoCoordinate other) {
    return IsoCoordinate(x + other.x, y + other.y);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is IsoCoordinate && other.x == x && other.y == y;
  }

  @override
  int get hashCode => x.hashCode ^ y.hashCode;
}
