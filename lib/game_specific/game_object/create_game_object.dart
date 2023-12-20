import 'dart:math';
import 'package:anki/game_specific/game_object/tile.dart';

import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/utils/random_id.dart';
import '../map/terrain_creation_rules.dart';

class TileCreator {
  static Tile create(
    double elevation,
    double moisture,
    Point<double> point,
    List<TileRule> rules,
  ) {
    for (var rule in rules) {
      if (rule.match(elevation, moisture)) {
        elevation = elevation.floor().toDouble();
        return Tile(rule.type, IsoCoordinate(point.x, point.y), elevation, 1, getRandomId());
      }
    }
    throw Exception(
        'No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules!');
  }
}
