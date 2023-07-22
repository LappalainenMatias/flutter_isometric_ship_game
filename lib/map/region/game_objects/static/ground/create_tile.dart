import 'dart:math';

import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import '../../../../map_creation_rules.dart';

SingleTile getTile(double elevation, double moisture, Point<double> coordinate, List<TileRule> rules) {
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return SingleTile(rule.type, coordinate, elevation);
    }
  }
  throw Exception('No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules.');
}