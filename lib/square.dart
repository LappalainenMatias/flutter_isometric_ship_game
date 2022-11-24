import 'enum/square_visibility.dart';
import 'enum/square_type.dart';
import 'package:flutter/material.dart';
import 'enum/item.dart';

class Square {
  final int x;
  final int y;
  List<Item> items = [];
  SquareType type;
  SquareVisibility visibility;

  Square(this.type, this.x, this.y, this.visibility, this.items);

  Color get color {
    switch (visibility) {
      case SquareVisibility.unseen:
        return Colors.black;
      case SquareVisibility.seen:
        return Color.alphaBlend(type.color.withAlpha(100), Colors.black.withAlpha(155)).withAlpha(255);
      default:
        return type.color;
    }
  }
}
