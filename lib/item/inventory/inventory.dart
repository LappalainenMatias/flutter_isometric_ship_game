import '../item.dart';
import '../tool.dart';

class Inventory {
  /// Value is the amount of the items
  final Map<Item, int> _items = {};
  final Set<Tool> _tools = {};

  int countItem(Item item) {
    if (_items.containsKey(item)) {
      return _items[item]!;
    }
    return 0;
  }

  Set<Tool> getTools() {
    return _tools;
  }

  void addTool(Tool tool) {
    _tools.add(tool);
  }

  void removeTool(Tool tool) {
    _tools.remove(tool);
  }

  void addItem(Item item) {
    if (_items.containsKey(item)) {
      _items[item] = _items[item]! + 1;
    } else {
      _items[item] = 1;
    }
  }

  void useItem(Item item) {
    if (countItem(item) > 0) {
      _items[item] = _items[item]! - 1;
    }
  }

  List<Item> getItemTypes() {
    List<Item> types = [];
    for (var item in _items.keys) {
      if (_items[item]! > 0) types.add(item);
    }
    return types;
  }
}