import 'package:anki/item/special_item.dart';
import 'package:anki/action/task.dart';
import 'package:anki/map/map_helper.dart';
import 'package:flutter/material.dart';
import '../item/inventory/inventory.dart';
import '../item/item.dart';
import '../item/tool.dart';
import 'character.dart';
import '../map/square_type.dart';
import '../map/square.dart';
import '../map/map.dart';
import 'dart:math';

class PlayerModel extends ChangeNotifier implements Character {
  List<Task> actions = [];
  var _visibility = 3;
  var _x = 0;
  var _y = 0;
  var maxHearts = 3;
  @override
  var hearts = 1;
  @override
  var color = Color.fromARGB(255, 13, 229, 197);
  double movementSpeedMS = 1000;
  DateTime lastMovement = DateTime.now();
  final Inventory _inventory = Inventory();

  PlayerModel(this._visibility, this._x, this._y);

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

  /// Moves the player in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void moveJoyStick(double x, double y, MapModel map) {
    double distance = euclideanDistance(0, 0, x, y);
    if (distance > 1.1) throw Exception("Too large distance: $distance");
    movementSpeedMS = 500 - (400 * distance).abs();
    if (movementSpeedMS >
        DateTime.now().difference(lastMovement).inMilliseconds) {
      return;
    }
    if (movementSpeedMS < 100) movementSpeedMS = 100;
    lastMovement = DateTime.now();
    double angle = (atan2(x, y) * (180 / pi) + 360) % 360;
    if (angle > 337.5 || angle < 22.5) {
      move(map, _x, _y - 1); // Up
    } else if (angle > 22.5 && angle < 67.5) {
      move(map, _x + 1, _y - 1); // Up right
    } else if (angle > 67.5 && angle < 112.5) {
      move(map, _x + 1, _y); // Right
    } else if (angle > 112.5 && angle < 157.5) {
      move(map, _x + 1, _y + 1); // Down right
    } else if (angle > 157.5 && angle < 202.5) {
      move(map, _x, _y + 1); // Down
    } else if (angle > 202.5 && angle < 247.5) {
      move(map, _x - 1, _y + 1); // Down left
    } else if (angle > 247.5 && angle < 292.5) {
      move(map, _x - 1, _y); // Left
    } else if (angle > 292.5 && angle < 337.5) {
      move(map, _x - 1, _y - 1); // Up left
    }
  }

  @override
  void move(MapModel map, int newX, int newY) {
    if (!map.hasSquare(newX, newY)) return;
    Square square = map.getSquare(newX, newY);
    if (square.type.isVisitable) {
      _x = newX;
      _y = newY;
      for (Square neighbour in map.getNeighbours(_x, _y)) {
        if (neighbour.specialItems.isNotEmpty) collectItems(neighbour);
      }
      map.updateSquareVisibility(this);
      notifyListeners();
    }
  }

  void collectItems(Square square) {
    for (var i = 0; i < square.specialItems.length; i++) {
      square.specialItems[i].collect(this, square);
      i--;
    }
  }

  set visibility(value) {
    _visibility = value;
    notifyListeners();
  }

  @override
  get y => _y;

  @override
  get x => _x;

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
}
