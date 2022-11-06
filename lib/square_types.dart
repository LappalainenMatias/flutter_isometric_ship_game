import 'package:flutter/material.dart';
import 'dart:math';

enum SquareType {
  grass,
  rock,
  water,
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.grass:
        return Colors.green;
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
}
