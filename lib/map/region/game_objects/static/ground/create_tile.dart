import 'dart:math';

import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';

/// Returns true if the elevation and moisture limitations are met.
class TileRule {
  final TileType type;
  final double? elevationLimit;
  final double? moistureLimit;

  TileRule(this.type, this.elevationLimit, this.moistureLimit);

  bool match(double inputElevation, double inputMoisture) {
    return (elevationLimit == null || inputElevation < elevationLimit!) &&
        (moistureLimit == null || inputMoisture < moistureLimit!);
  }
}

/// We return the tiletype of the first rule that matches.
List<TileRule> rules = [
  TileRule(TileType.lakeFloorBare, 0.0, -0.2),
  TileRule(TileType.lakeFloorVegetation, 0.0, 0.2),
  TileRule(TileType.sand, 0.0, null),
  TileRule(TileType.bare, 2.0, -0.20),
  TileRule(TileType.sand, 2.0, 0.35),
  TileRule(TileType.grass, 2.0, null),
  TileRule(TileType.bare, 4.0, -0.20),
  TileRule(TileType.taiga, 4.0, -0.10),
  TileRule(TileType.grass, 4.0, 0),
  TileRule(TileType.taiga, 4.0, null),
  TileRule(TileType.bare, 10.0, -0.20),
  TileRule(TileType.taiga, 10.0, null),
  TileRule(TileType.bare, null, null),
];

SingleTile getTile(double elevation, double moisture, Point<double> coordinate) {
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return SingleTile(rule.type, coordinate, elevation);
    }
  }
  throw Exception('No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules.');
}