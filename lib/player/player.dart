import 'package:anki/map/iso_coordinate.dart';
import 'package:flutter/material.dart';

class Player {
  late ValueNotifier<IsoCoordinate> coordinate;

  Player(double x, double y) {
    coordinate = ValueNotifier(IsoCoordinate(x, y));
  }

  IsoCoordinate getCoordinate() {
    return coordinate.value;
  }

  void setCoordinate(IsoCoordinate coordinate) {
    if (coordinate.x == this.coordinate.value.x &&
        coordinate.y == this.coordinate.value.y) {
      return;
    }
    this.coordinate.value = coordinate;
  }
}
