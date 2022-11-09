import 'package:anki/square_types.dart';

class Square {
  final int x;
  final int y;
  SquareType type;
  bool containsPlayer;

  Square(this.type, this.containsPlayer, this.x, this.y);
}