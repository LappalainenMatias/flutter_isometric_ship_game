import 'package:anki/map/iso_coordinate.dart';
import 'package:flutter/material.dart';

class Player {
  final ValueNotifier<IsoCoordinate> _coord;

  Player(this._coord);

  IsoCoordinate getCoordinate() {
    return _coord.value;
  }

  void setCoordinate(IsoCoordinate coord) {
    if (coord.x == _coord.value.x && coord.y == _coord.value.y) {
      return;
    }
    _coord.value = coord;
  }
}
