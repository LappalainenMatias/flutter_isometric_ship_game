import '../item/natural_item.dart';
import 'square_visibility.dart';
import 'square_type.dart';
import 'package:flutter/material.dart';
import '../item/special_item.dart';

class Square {
  final int x;
  final int y;
  List<SpecialItem> specialItems = [];
  NaturalItem? naturalItem;
  SquareType type;
  SquareVisibility visibility;
  late Color colorInView;
  late Color colorSeen;

  Square(this.type, this.x, this.y, this.visibility, this.specialItems,
      this.naturalItem) {
    defineColors();
  }

  void defineColors() {
    colorInView = specialItems.isNotEmpty
        ? specialItems.first.color
        : naturalItem != null
        ? naturalItem!.color
        : type.color;
    colorSeen = Color.alphaBlend(
        colorInView.withAlpha(100), Colors.black.withAlpha(155))
        .withAlpha(255);
  }

  void removeNaturalItem() {
    naturalItem = null;
    defineColors();
  }

  void removeSpecialItem(SpecialItem item) {
    specialItems.remove(item);
    defineColors();
  }
}
