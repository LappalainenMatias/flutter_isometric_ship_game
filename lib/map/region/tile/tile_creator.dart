import 'dart:math';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'natural_items/natural_items.dart';

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

class NaturalItemProbability {
  final NaturalItem item;
  final double percentage;

  NaturalItemProbability(this.item, this.percentage) {
    assert(percentage > 0 && percentage < 1);
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

///Todo these probabilities are not exactly correct because they are looped through in order.
Map<TileType, List<NaturalItemProbability>> naturalItemsMap = {
  TileType.taiga: [
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.rock, 0.03),
    NaturalItemProbability(NaturalItem.spruce, 0.10),
  ],
  TileType.grass: [
    NaturalItemProbability(NaturalItem.rock, 0.02),
    NaturalItemProbability(NaturalItem.spruce, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.birch, 0.04),
  ],
  TileType.bare: [
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
    NaturalItemProbability(NaturalItem.spruce, 0.03),
    NaturalItemProbability(NaturalItem.rock, 0.06),
  ],
  TileType.sand: [
    NaturalItemProbability(NaturalItem.rock, 0.10),
  ],
  TileType.lakeFloorVegetation: [
    NaturalItemProbability(NaturalItem.rock, 0.04),
  ],
  TileType.lakeFloorBare: [
    NaturalItemProbability(NaturalItem.rock, 0.06),
  ]
};

Tile getTile(double elevation, double moisture, Point<double> coordinate) {
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return Tile(rule.type, coordinate, elevation, getNaturalItem(rule.type));
    }
  }
  throw Exception('No tile type found for elevation: $elevation, moisture: $moisture. Fix the rules.');
}

NaturalItem getNaturalItem(TileType type) {
  final items = naturalItemsMap[type];
  if (items != null) {
    for (var item in items) {
      if (Random().nextDouble() < item.percentage) {
        return item.item;
      }
    }
  }
  return NaturalItem.empty;
}