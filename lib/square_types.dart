import 'package:flutter/material.dart';

enum SquareType {
  grass,
  wall,
  goal,
  water,
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.grass:
        return Colors.green;
      case SquareType.wall:
        return Colors.grey;
      case SquareType.goal:
        return Colors.yellow;
      case SquareType.water:
        return Colors.blue;
      default:
        return Colors.black;
    }
  }
}
