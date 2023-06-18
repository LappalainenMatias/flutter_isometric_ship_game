import 'dart:math';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'natural_items/natural_items.dart';

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
    assert(percentage > 0);
    assert(percentage < 1);
  }
}

/// We return the tiletype of the first rule that matches.
List<TileRule> rules = [
  TileRule(TileType.lakeFloorBare, -0.10, 0.0),
  TileRule(TileType.lakeFloorVegetation, -0.05, 0.1),
  TileRule(TileType.sand, 0.0, null),
  TileRule(TileType.bare, 0.02, -0.30),
  TileRule(TileType.sand, 0.02, 0.0),
  TileRule(TileType.grass, 0.02, null),
  TileRule(TileType.bare, 0.2, -0.30),
  TileRule(TileType.taiga, 0.2, -0.20),
  TileRule(TileType.grass, 0.2, 0),
  TileRule(TileType.taiga, 0.2, null),
  TileRule(TileType.bare, 0.4, -0.30),
  TileRule(TileType.taiga, 0.5, null),
  TileRule(TileType.bare, null, null),
];

///Todo these probabilities are not exactyly correct because they are looped through in order.
Map<TileType, List<NaturalItemProbability>> naturalItemsMap = {
  TileType.taiga: [
    NaturalItemProbability(NaturalItem.rock, 0.03),
    NaturalItemProbability(NaturalItem.spruce, 0.10),
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
  ],
  TileType.grass: [
    NaturalItemProbability(NaturalItem.rock, 0.02),
    NaturalItemProbability(NaturalItem.spruce, 0.02),
    NaturalItemProbability(NaturalItem.birch, 0.04),
    NaturalItemProbability(NaturalItem.flower, 0.02),
  ],
  TileType.bare: [
    NaturalItemProbability(NaturalItem.rock, 0.06),
    NaturalItemProbability(NaturalItem.spruce, 0.03),
    NaturalItemProbability(NaturalItem.birch, 0.02),
    NaturalItemProbability(NaturalItem.flower, 0.02),
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
  // TODO We increase the elevation to add height differences. This should be refactored
  double height = (elevation * 10).round().toDouble();
  for (TileRule rule in rules) {
    if (rule.match(elevation, moisture)) {
      return Tile(rule.type, coordinate, height, getNaturalItem(rule.type));
    }
  }
  return Tile(TileType.bare, coordinate, height, getNaturalItem(TileType.bare));
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