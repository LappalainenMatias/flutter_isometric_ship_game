import '../item/natural_item.dart';
import 'square_visibility.dart';
import 'square_type.dart';
import 'package:flutter/material.dart';
import '../item/special_item.dart';

class Square {
  final int x;
  final int y;
  List<SpecialItem> items = [];
  NaturalItem? naturalItem;
  SquareType type;
  SquareVisibility visibility;
  late Color colorInView;
  late Color colorSeen;

  Square(this.type, this.x, this.y, this.visibility, this.items,
      this.naturalItem) {
    colorInView = naturalItem != null ? naturalItem!.color : type.color;
    colorSeen = Color.alphaBlend(
        colorInView.withAlpha(100), Colors.black.withAlpha(155))
        .withAlpha(255);
  }

  void removeNaturalItem() {
    naturalItem = null;
    colorInView = type.color;
    colorSeen = Color.alphaBlend(
        colorInView.withAlpha(100), Colors.black.withAlpha(155))
        .withAlpha(255);
  }
}
