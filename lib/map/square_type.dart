import 'package:anki/item/natural_item.dart';
import 'package:flutter/material.dart';

enum SquareType {
  taiga(Color.fromARGB(255, 83, 173, 93), [NaturalItem.tree], true, true),
  grass(Color.fromARGB(255, 132, 197, 126), [NaturalItem.bush], true, true),
  wall(Colors.black, [], false, false),
  tundra(Color.fromARGB(255, 146, 183, 144), [NaturalItem.bush], true, true),
  bare(Color.fromARGB(255, 153, 162, 151), [NaturalItem.rock], true, true),
  deepOcean(Color.fromARGB(255, 19, 93, 185), [], false, false),
  ocean(Color.fromARGB(255, 21, 99, 197), [], false, false),
  shallowWater(Color.fromARGB(255, 72, 136, 218), [], false, false),
  beach(Color.fromARGB(255, 194, 178, 128), [], true, true);

  const SquareType(this.color, this.supportedNaturalItems,
      this.supportsSpecialItems, this.isVisitable);

  final Color color;
  final List<NaturalItem> supportedNaturalItems;
  final bool supportsSpecialItems;
  final bool isVisitable;
}

extension SquareTypeExtension on SquareType {
  static SquareType getType(double elevation, double moisture) {
    if (elevation < -0.25) return SquareType.deepOcean;
    if (elevation < 0.0) return SquareType.ocean;
    if (elevation < 0.02) return SquareType.shallowWater;
    if (elevation < 0.05) {
      if (moisture < -0.15) return SquareType.bare;
      return SquareType.beach;
    }
    if (elevation < 0.20) {
      if (moisture < 0.00) return SquareType.grass;
      return SquareType.taiga;
    }
    if (elevation < 0.4) {
      if (moisture < -0.2) return SquareType.bare;
      if (moisture < 0.2) return SquareType.tundra;
      return SquareType.taiga;
    }
    return SquareType.bare;
  }
}
