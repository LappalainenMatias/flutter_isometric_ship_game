import 'dart:ui';
import 'enum/square_visibility.dart';
import 'enum/square_types.dart';
import 'package:flutter/material.dart';

class Square {
  final int x;
  final int y;
  SquareType type;
  SquareVisibility visibility;

  Square(this.type, this.x, this.y, this.visibility);

  Color get color {
    if (visibility == SquareVisibility.unseen) return Colors.black;
    if (visibility == SquareVisibility.seen) {
      return Color.alphaBlend(type.color.withAlpha(100), Colors.black.withAlpha(155));
    }
    return type.color;
  }
}
