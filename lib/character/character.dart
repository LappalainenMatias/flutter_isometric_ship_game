import 'dart:math';

abstract class Character {
  get hearts => null;

  get color => null;

  Point<int> getCoordinate();

  void setCoordinate(Point<int> coordinate);

  void setHearts(int hearts);
}
