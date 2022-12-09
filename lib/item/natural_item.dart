import 'package:flutter/material.dart';
import 'dart:math';
import '../map/square_type.dart';
import 'item.dart';

/// Contains items like trees and rocks
enum NaturalItem implements Item {
  tree(Color.fromARGB(255, 25, 121, 29), "tree"),
  bush(Color.fromARGB(255, 80, 166, 60), "bush");

  const NaturalItem(this.color, this.name);
  @override
  final String name;
  @override
  final Color color;
}

extension NaturalItemExtension on NaturalItem {
  static NaturalItem? getNaturalItem(SquareType type) {
    List<NaturalItem> supported = type.supportedNaturalItems;
    if (supported.isEmpty) return null;
    double probability = 0.05;
    Random random = Random();
    if (random.nextDouble() > probability) return null;
    return supported.elementAt(random.nextInt(supported.length));
  }
}
