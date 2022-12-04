import 'package:flutter/material.dart';
import 'dart:math';
import '../square_type.dart';

/// Contains items like trees and rocks
enum NaturalItem {
  tree,
  bush
}

extension NaturalItemExtension on NaturalItem {
  Color get color {
    switch(this) {
      case NaturalItem.tree:
        return const Color.fromARGB(255, 105, 159, 44);
      case NaturalItem.bush:
        return const Color.fromARGB(255, 134, 173, 91);
      default: throw Exception("NaturalItem color not found!");
    }
  }

  static NaturalItem? getNaturalItem(SquareType type) {
    List<NaturalItem> supported = type.supportedNaturalItems;
    if (supported.isEmpty) return null;
    double probability = 0.05;
    Random random = Random();
    if (random.nextDouble() > probability) return null;
    return supported.elementAt(random.nextInt(supported.length));
  }
}

