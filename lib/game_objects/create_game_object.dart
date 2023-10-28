import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/game_objects/static/natural_items/create_natural_item.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';

import '../map/map_creation_rules.dart';
import '../coordinates/iso_coordinate.dart';
import 'dart:math';

class TileCreator {
  static Tile create(double elevation, double moisture, Point<double> point,
      List<TileRule> rules) {
    for (TileRule rule in rules) {
      if (rule.match(elevation, moisture)) {
        elevation = elevation.floor().toDouble();
        return Tile(rule.type, IsoCoordinate(point.x, point.y), elevation, 1);
      }
    }
    throw Exception(
        'No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules!');
  }
}

class NaturalItemCreator {
  static List<NaturalItemCube> create(
    TileType type,
    IsoCoordinate isoCoordinate,
    double elevation,
    Map<TileType, List<NaturalItemProbability>> naturalItemsMap,
  ) {
    final probabilities = naturalItemsMap[type];
    if (probabilities != null) {
      for (var naturalItem in probabilities) {
        if (Random().nextDouble() < naturalItem.percentage) {
          // NaturalItems are top of the ground cubes, so we add 1 to the elevation
          createBirchTree(isoCoordinate, elevation + 1);

          /// Todo manage that trees are not drawn underwater
          return createBirchTree(isoCoordinate, elevation + 1);
        }
      }
    }
    return [];
  }
}
