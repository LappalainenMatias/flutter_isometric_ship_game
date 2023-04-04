import 'dart:math';

abstract class Character {
  get hearts => null;

  get color => null;

  Point<double> getCoordinate();

  void setCoordinate(Point<double> coordinate);

  void setHearts(int hearts);
}
