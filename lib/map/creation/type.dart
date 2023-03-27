import 'package:anki/item/natural_item.dart';
import 'package:flutter/material.dart';

enum Type {
  taiga(Color.fromARGB(255, 83, 173, 93), [NaturalItem.tree], true, true),
  grass(Color.fromARGB(255, 132, 197, 126), [NaturalItem.bush], true, true),
  wall(Colors.black, [], false, false),
  tundra(Color.fromARGB(255, 146, 183, 144), [NaturalItem.bush], true, true),
  bare(Color.fromARGB(255, 153, 162, 151), [NaturalItem.rock], true, true),
  deepOcean(Color.fromARGB(255, 19, 93, 185), [], false, false),
  ocean(Color.fromARGB(255, 21, 99, 197), [], false, false),
  shallowWater(Color.fromARGB(255, 72, 136, 218), [], false, false),
  beach(Color.fromARGB(255, 194, 178, 128), [], true, true);

  const Type(this.color, this.supportedNaturalItems,
      this.supportsSpecialItems, this.isVisitable);

  final Color color;
  final List<NaturalItem> supportedNaturalItems;
  final bool supportsSpecialItems;
  final bool isVisitable;
}

extension SquareTypeExtension on Type {
  static Type getType(double elevation, double moisture) {
    if (elevation < -0.25) return Type.deepOcean;
    if (elevation < 0.0) return Type.ocean;
    if (elevation < 0.02) return Type.shallowWater;
    if (elevation < 0.05) {
      if (moisture < -0.15) return Type.bare;
      return Type.beach;
    }
    if (elevation < 0.20) {
      if (moisture < 0.00) return Type.grass;
      return Type.taiga;
    }
    if (elevation < 0.4) {
      if (moisture < -0.2) return Type.bare;
      if (moisture < 0.2) return Type.tundra;
      return Type.taiga;
    }
    return Type.bare;
  }
}
