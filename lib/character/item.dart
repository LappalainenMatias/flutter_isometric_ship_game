import 'dart:math';
import 'package:flutter/material.dart';
import 'character.dart';
import '../map/square.dart';
import '../map/square_type.dart';

enum Item {
  heart,
}

extension ItemExtension on Item {
  String character() {
    switch (this) {
      case Item.heart:
        return "h";
    }
  }

  static List<Item> getRandomItems(SquareType type) {
    if (!type.supportsItems) return [];
    List<Item> items = [];
    var num = Random().nextDouble();
    if (num < 0.02) items.add(Item.heart);
    return items;
  }

  Color get color {
    switch (this) {
      case Item.heart:
        return Colors.deepPurpleAccent;
      default: return Colors.teal;
    }
  }

  void collect(Character character, Square square) {
    if (this == Item.heart) {
      character.setHearts(character.hearts + 1);
      square.items.remove(Item.heart);
    }
  }
}
