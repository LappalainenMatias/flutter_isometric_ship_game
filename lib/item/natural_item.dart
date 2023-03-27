import 'package:flutter/material.dart';
import 'dart:math';
import '../map/creation/type.dart';
import 'item.dart';

/// Contains items like trees and rocks
enum NaturalItem implements Item {
  rock(Color.fromARGB(255, 128, 128, 128), "rock"),
  tree(Color.fromARGB(255, 25, 121, 29), "tree"),
  bush(Color.fromARGB(255, 80, 166, 60), "bush");

  const NaturalItem(this.color, this.name);
  @override
  final String name;
  @override
  final Color color;
}

extension NaturalItemExtension on NaturalItem {
  static NaturalItem? getNaturalItem(Type type) {
    List<NaturalItem> supported = type.supportedNaturalItems;
    if (supported.isEmpty) return null;
    Random random = Random();
    if (random.nextDouble() > 0.05) return null;
    return supported.elementAt(random.nextInt(supported.length));
  }
}
