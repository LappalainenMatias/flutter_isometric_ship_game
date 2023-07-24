import 'dart:math';

import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../map_creation_rules.dart';

SingleTile getTile(double elevation, double moisture, Point<double> point, List<TileRule> rules) {
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return SingleTile(rule.type, IsoCoordinate(point.x, point.y), elevation);
    }
  }
  throw Exception('No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules!');
}