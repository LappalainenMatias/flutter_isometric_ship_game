import '../map/map.dart';

abstract class Character {
  get hearts => null;

  get color => null;

  void setHearts(int hearts);
}
