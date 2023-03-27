import 'type.dart';

class Square {
  Type type;

  Square(this.type);

  factory Square.empty() {
    return Square(Type.wall);
  }

  factory Square.grass() {
    return Square(Type.grass);
  }
}
