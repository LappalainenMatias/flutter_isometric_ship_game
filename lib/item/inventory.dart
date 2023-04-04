import 'package:flutter/material.dart';
import 'tool.dart';

class Inventory {
  /// Value is the amount of the items
  final Map<Resource, int> _resources = {
    Resource.food: 0,
    Resource.wood: 0,
    Resource.stone: 0,
    Resource.gold: 0,
  };
  final Set<Tool> _tools = {};

  Set<Tool> getTools() {
    return _tools;
  }

  void addTool(Tool tool) {
    _tools.add(tool);
  }

  void removeTool(Tool tool) {
    _tools.remove(tool);
  }

  void addResource(Resource resource, int amount) {
    if (_resources[resource]! + amount > 99999) {
      _resources[resource] = 99999;
    } else {
      _resources[resource] = _resources[resource]! + amount;
    }
  }

  void reduceResource(Resource resource, int amount) {
    if (_resources[resource]! - amount < 0) {
      _resources[resource] = 0;
    } else {
      _resources[resource] = _resources[resource]! - amount;
    }
  }

  int getResource(Resource resource) {
    return _resources[resource]!;
  }
}

enum Resource {
  wood(Colors.brown),
  food(Colors.redAccent),
  stone(Colors.grey),
  gold(Colors.yellow);
  const Resource(this.color);
  final Color color;
}