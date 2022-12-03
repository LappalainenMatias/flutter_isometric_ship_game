import 'square_visibility.dart';
import 'square_type.dart';
import 'package:flutter/material.dart';
import '../character/item.dart';

class Square {
  final int x;
  final int y;
  List<Item> items = [];
  SquareType type;
  SquareVisibility visibility;

  /// Notice that we predefine colors so that get color function is fast.
  /// Get color gets called 1000s of times every second.
  late Color _colorInView;
  late Color _colorUnseen;
  late Color _colorSeen;

  Square(this.type, this.x, this.y, this.visibility, this.items) {
    _colorInView = type.color;
    _colorUnseen = Colors.black;
    _colorSeen =
        Color.alphaBlend(type.color.withAlpha(100), Colors.black.withAlpha(155))
            .withAlpha(255);
  }

  Color get color {
    switch (visibility) {
      case SquareVisibility.unseen:
        return _colorUnseen;
      case SquareVisibility.seen:
        return _colorSeen;
      case SquareVisibility.inView:
        return _colorInView;
    }
  }
}
