import '../item/natural_item.dart';
import 'square_visibility.dart';
import 'square_type.dart';
import 'package:flutter/material.dart';
import '../item/special_item.dart';

class Square {
  List<SpecialItem> specialItems = [];
  NaturalItem? naturalItem;
  SquareType type;
  SquareVisibility visibility;
  late Color colorInView;
  late Color colorSeen;

  Square(this.type, this.visibility, [specialItems = const [], naturalItem]) {
    defineColors();
  }

  factory Square.empty() {
    return Square(SquareType.wall, SquareVisibility.unseen);
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
