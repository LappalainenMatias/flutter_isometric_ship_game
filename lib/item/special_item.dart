import 'dart:math';
import 'package:flutter/material.dart';
import '../character/character.dart';
import '../map/square.dart';
import '../map/square_type.dart';
import 'item.dart';

enum SpecialItem implements Item{
  heart(Colors.deepPurpleAccent, collectHeart, "heart");

  const SpecialItem(this.color, this.collect, this.name);
  @override
  final Color color;
  final Function collect;
  @override
  final String name;
}

void collectHeart(Character character, Square square) {
  character.setHearts(character.hearts + 1);
  square.specialItems.remove(SpecialItem.heart);
}

extension ItemExtension on SpecialItem {
  static List<SpecialItem> getRandomItems(SquareType type) {
    if (!type.supportsSpecialItems) return [];
    List<SpecialItem> items = [];
    var num = Random().nextDouble();
    if (num < 0.002) items.add(SpecialItem.heart);
    return items;
  }
}
