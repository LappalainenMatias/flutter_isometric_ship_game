class IsoCoordinate {
  double x;
  double y;
  double isoX;
  double isoY;

  IsoCoordinate(this.x, this.y)
      : isoX = x * 2 - 2 * y,
        isoY = x + y;

  void setX(double newX) {
    x = newX;
    isoX = newX * 2 - 2 * y;
    isoY = newX + y;
  }

  void setY(double newY) {
    y = newY;
    isoX = x * 2 - 2 * newY;
    isoY = x + newY;
  }

  @override
  String toString() {
    return 'IsoCoordinate{x: $isoX, y: $isoY}';
  }
}
