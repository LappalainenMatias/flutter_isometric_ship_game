import '../map/map.dart';

abstract class Character {
  get x => null;

  get y => null;

  get hearts => null;

  void move(MapModel map, int x, int y);

  void setHearts(int hearts);
}
