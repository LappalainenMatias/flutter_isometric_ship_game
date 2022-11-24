import 'package:flutter/material.dart';
import 'dart:math';

enum SquareType {
  rockHigh,
  rockMed,
  rockLow,
  trees,
  grass,
  water,
  wall,
  sand,
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.grass:
        return const Color.fromARGB(255, 8, 161, 12);
      case SquareType.trees:
        return const Color.fromARGB(255, 23, 129, 11);
      case SquareType.rockHigh:
        return const Color.fromARGB(255, 110, 110, 110);
      case SquareType.rockMed:
        return const Color.fromARGB(255, 130, 130, 130);
      case SquareType.rockLow:
        return const Color.fromARGB(255, 150, 150, 150);
      case SquareType.water:
        return Colors.blue;
      case SquareType.sand:
        return const Color.fromARGB(255, 194, 178, 128);
      case SquareType.wall:
        return Colors.black26;
      default:
        return Colors.black;
    }
  }

  static SquareType get getRandomType {
    List<SquareType> values = SquareType.values;
    values.remove(SquareType.wall);
    return values[Random().nextInt(values.length)];
  }

  bool get supportsItems {
    if (this == SquareType.water) return false;
    return true;
  }

  bool isVisitable() {
    if (this == SquareType.water) return false;
    if (this == SquareType.wall) return false;
    return true;
  }

  static SquareType getValueBasedOnHeight(double height) {
    if (height > 0.50) return SquareType.rockHigh;
    if (height > 0.40) return SquareType.rockMed;
    if (height > 0.30) return SquareType.rockLow;
    if (height > -0.10) return SquareType.grass;
    if (height > -0.15) return SquareType.sand;
    return SquareType.water;
  }
}
