import 'dart:math';
import '../model/player.dart';
import '../square.dart';
import 'square_type.dart';

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
    var random = Random();
    var num = random.nextInt(100);
    if (num < 2) items.add(Item.heart);
    return items;
  }

  void collect(PlayerModel player, Square square) {
    if (this == Item.heart) {
      player.setHearts(player.hearts + 1);
      square.items.remove(Item.heart);
    }
  }
}
