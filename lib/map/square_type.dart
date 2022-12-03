import 'package:flutter/material.dart';
import 'dart:math';

enum SquareType {
  shrubland,
  temperateRainForest,
  temperateDesert,
  taiga,
  desert,
  grass,
  snow,
  wall,
  tundra,
  bare,
  ocean,
  shallowWater,
  beach
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.shrubland:
        return const Color.fromARGB(255, 143, 164, 119);
      case SquareType.temperateRainForest:
        return const Color.fromARGB(255, 119, 159, 123);
      case SquareType.shallowWater:
        return const Color.fromARGB(255, 72, 136, 218);
      case SquareType.taiga:
        return const Color.fromARGB(255, 105, 140, 111);
      case SquareType.temperateDesert:
        return const Color.fromARGB(255, 196, 151, 102);
      case SquareType.desert:
        return const Color.fromARGB(255, 227, 195, 158);
      case SquareType.grass:
        return const Color.fromARGB(255, 108, 169, 103);
      case SquareType.snow:
        return const Color.fromARGB(255, 226, 229, 232);
      case SquareType.bare:
        return const Color.fromARGB(255, 180, 175, 162);
      case SquareType.tundra:
        return const Color.fromARGB(255, 150, 175, 149);
      case SquareType.ocean:
        return const Color.fromARGB(255, 8, 81, 173);
      case SquareType.beach:
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
    if (this == SquareType.ocean) return false;
    if (this == SquareType.shallowWater) return false;
    if (this == SquareType.wall) return false;
    return true;
  }

  bool get isVisitable {
    if (this == SquareType.ocean) return false;
    if (this == SquareType.shallowWater) return false;
    if (this == SquareType.wall) return false;
    return true;
  }

  static SquareType getType(double e, double m) {
    if (e < 0.0) return SquareType.ocean;
    if (e < 0.02) return SquareType.shallowWater;
    if (e < 0.05) return SquareType.beach;
    if (e < 0.20) {
      if (m < -0.25) return SquareType.desert;
      if (m < 0.25) return SquareType.temperateDesert;
      return SquareType.temperateRainForest;
    }
    if (e < 0.4) {
      if (m < -0.1) return SquareType.shrubland;
      if (m < 0.2) return SquareType.grass;
      return SquareType.taiga;
    }
    if (e < 1.0) {
      if (m < -0.25) return SquareType.bare;
      if (m < 0.25) return SquareType.tundra;
      return SquareType.snow;
    }
    return throw Exception("Type not found");
  }
}
