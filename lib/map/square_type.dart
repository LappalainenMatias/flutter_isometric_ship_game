import 'package:anki/map/naturalitem/natural_item.dart';
import 'package:flutter/material.dart';

enum SquareType {
  taiga,
  grass,
  wall,
  tundra,
  bare,
  deepOcean,
  ocean,
  shallowWater,
  beach,
}

extension SquareTypeExtension on SquareType {
  Color get color {
    switch (this) {
      case SquareType.taiga:
        return const Color.fromARGB(255, 83, 173, 93);
      case SquareType.grass:
        return const Color.fromARGB(255, 132, 197, 126);
      case SquareType.bare:
        return const Color.fromARGB(255, 153, 162, 151);
      case SquareType.tundra:
        return const Color.fromARGB(255, 146, 183, 144);
      case SquareType.shallowWater:
        return const Color.fromARGB(255, 72, 136, 218);
      case SquareType.ocean:
        return const Color.fromARGB(255, 21, 99, 197);
      case SquareType.deepOcean:
        return const Color.fromARGB(255, 19, 93, 185);
      case SquareType.beach:
        return const Color.fromARGB(255, 194, 178, 128);
      case SquareType.wall:
        return Colors.black;
      default:
        return Colors.red;
    }
  }

  List<NaturalItem> get supportedNaturalItems {
    switch (this) {
      case SquareType.taiga:
        return [NaturalItem.tree];
      case SquareType.shallowWater:
        return [];
      case SquareType.grass:
        return [NaturalItem.bush];
      case SquareType.bare:
        return [];
      case SquareType.tundra:
        return [NaturalItem.bush];
      case SquareType.ocean:
        return [];
      case SquareType.beach:
        return [];
      case SquareType.wall:
        return [];
      case SquareType.deepOcean:
        return [];
      default:
        return [];
    }
  }

  bool get supportsItems {
    if (this == SquareType.deepOcean) return false;
    if (this == SquareType.ocean) return false;
    if (this == SquareType.shallowWater) return false;
    if (this == SquareType.wall) return false;
    return true;
  }

  bool get isVisitable {
    if (this == SquareType.deepOcean) return false;
    if (this == SquareType.ocean) return false;
    if (this == SquareType.shallowWater) return false;
    if (this == SquareType.wall) return false;
    return true;
  }

  static SquareType getType(double e, double m) {
    if (e < -0.25) return SquareType.deepOcean;
    if (e < 0.0) return SquareType.ocean;
    if (e < 0.02) return SquareType.shallowWater;
    if (e < 0.05) {
      if (m < -0.15) return SquareType.bare;
      return SquareType.beach;
    }
    if (e < 0.20) {
      if (m < 0.00) return SquareType.grass;
      return SquareType.taiga;
    }
    if (e < 0.4) {
      if (m < -0.2) return SquareType.bare;
      if (m < 0.2) return SquareType.tundra;
      return SquareType.taiga;
    }
    return SquareType.bare;
  }
}
