import '../item.dart';

class Inventory {
  /// Value is the amount of the items
  final Map<Item, int> _items = {};

  int count(Item item) {
    if (_items.containsKey(item)) {
      return _items[item]!;
    }
    return 0;
  }

  void add(Item item) {
    if (_items.containsKey(item)) {
      _items[item] = _items[item]! + 1;
    } else {
      _items[item] = 1;
    }
  }

  void use(Item item) {
    if (count(item) > 0) {
      _items[item] = _items[item]! - 1;
    }
  }

  List<Item> getAllTypes() {
    List<Item> types = [];
    for (var item in _items.keys) {
      if (_items[item]! > 0) types.add(item);
    }
    return types;
  }
}