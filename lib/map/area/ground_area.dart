import 'dart:math';
import '../creation/type.dart';

class GroundArea {
  Point<int> topLeft;
  Point<int> bottomRight;
  Type type;

  GroundArea(this.topLeft, this.bottomRight, this.type);
}
