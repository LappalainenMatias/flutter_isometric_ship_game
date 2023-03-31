import 'dart:math';
import 'package:flutter/material.dart';
import '../character/character.dart';
import '../map/creation/square.dart';
import '../map/creation/tile.dart';
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
  /*
  character.setHearts(character.hearts + 1);
  square.removeSpecialItem(SpecialItem.heart);
  ///TODO
   */
}

extension ItemExtension on SpecialItem {
  static List<SpecialItem> getRandomItems(Tile type) {
    if (!type.supportsSpecialItems) return [];
    List<SpecialItem> items = [];
    var num = Random().nextDouble();
    if (num < 0.002) items.add(SpecialItem.heart);
    return items;
  }
}
