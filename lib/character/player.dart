import 'package:flutter/material.dart';
import '../item/inventory.dart';
import '../item/tool.dart';
import '../map/tile.dart';
import 'character.dart';
import 'dart:math';

class PlayerModel extends ChangeNotifier implements Character {
  var _visibility = 3;
  var maxHearts = 3;
  @override
  var hearts = 1;
  @override
  var color = const Color.fromARGB(255, 13, 229, 197);
  final Inventory _inventory = Inventory();
  late ValueNotifier<Point<int>> coordinate;

  PlayerModel(this._visibility, Point<int> coordinate) {
    this.coordinate = ValueNotifier(coordinate);
  }

  @override
  void setHearts(int val) {
    if (val <= 0) {
      hearts = 0;
    } else if (val > maxHearts) {
      hearts = maxHearts;
    } else {
      hearts = val;
    }
    notifyListeners();
  }

  void collectItems(Tile tile) {}

  set visibility(value) {
    _visibility = value;
    notifyListeners();
  }

  get visibility => _visibility;

  void addFood(int amount) {
    _inventory.addResource(Resource.food, amount);
  }

  void addWood(int amount) {
    _inventory.addResource(Resource.wood, amount);
  }

  void addStone(int amount) {
    _inventory.addResource(Resource.stone, amount);
  }

  void addGold(int amount) {
    _inventory.addResource(Resource.gold, amount);
  }

  void reduceStone(int amount) {
    _inventory.reduceResource(Resource.stone, amount);
  }

  void reduceGold(int amount) {
    _inventory.reduceResource(Resource.gold, amount);
  }

  void reduceFood(int amount) {
    _inventory.reduceResource(Resource.food, amount);
  }

  void reduceWood(int amount) {
    _inventory.reduceResource(Resource.wood, amount);
  }

  int getStone() {
    return _inventory.getResource(Resource.stone);
  }

  int getGold() {
    return _inventory.getResource(Resource.gold);
  }

  int getFood() {
    return _inventory.getResource(Resource.food);
  }

  int getWood() {
    return _inventory.getResource(Resource.wood);
  }

  void inventoryAddTool(Tool tool) {
    _inventory.addTool(tool);
    notifyListeners();
  }

  void inventoryRemoveTool(Tool tool) {
    _inventory.removeTool(tool);
    notifyListeners();
  }

  Set<Tool> inventoryGetTools() {
    return _inventory.getTools();
  }

  @override
  Point<int> getCoordinate() {
    return coordinate.value;
  }

  Point getIsometricCoordinate() {
    return Point(coordinate.value.x * 2 - coordinate.value.y * 2,
        coordinate.value.y + coordinate.value.x);
  }

  @override
  void setCoordinate(Point<int> coordinate) {
    if (coordinate.x == this.coordinate.value.x &&
        coordinate.y == this.coordinate.value.y) {
      return;
    }
    this.coordinate.value = coordinate;
  }
}
