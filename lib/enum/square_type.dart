import 'package:flutter/material.dart';
import 'dart:math';

enum SquareType {
  mountain,
  rock,
  trees,
  grass,
  water,
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.grass:
        return Colors.green;
      case SquareType.trees:
        return Colors.green;
      case SquareType.mountain:
        return Colors.grey;
      case SquareType.rock:
        return Colors.grey;
      case SquareType.water:
        return Colors.blue;
      default:
        return Colors.black;
    }
  }

  static SquareType get getRandomType {
    List<SquareType> values = SquareType.values;
    return values[Random().nextInt(values.length)];
  }

  bool get supportsItems {
    if (this == SquareType.water) return false;
    return true;
  }

  bool isVisitable() {
    if (this == SquareType.water) return false;
    return true;
  }

  static SquareType getValueBasedOnHeight(double height) {
    if (height > 0.72) return SquareType.mountain;
    if (height > 0.55) return SquareType.rock;
    if (height > 0.53) return SquareType.trees;
    if (height > 0.4) return SquareType.grass;
    return SquareType.water;
  }
}
