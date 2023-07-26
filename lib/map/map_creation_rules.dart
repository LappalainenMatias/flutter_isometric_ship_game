import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/region/game_objects/static/natural_items/natural_items.dart';

abstract class MapCreationRules {
  /// return the tiletype of the first rule that matches.
  List<TileRule> tileRules();

  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities();

  /// -1 means everything is water and 1 means everything is land.
  double amountOfWater();

  /// Increases the elevation differences. 0 means that the map is flat.
  /// The is no upper limit.
  double elevationAmplitude();
}

class FinlandCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
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
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    ///Todo these probabilities are not exactly correct because they are looped through in order.
    return {
      TileType.taiga: [
        NaturalItemProbability(NaturalItemType.birch, 0.02),
        NaturalItemProbability(NaturalItemType.rock, 0.03),
        NaturalItemProbability(NaturalItemType.spruce, 0.09),
      ],
      TileType.grass: [
        NaturalItemProbability(NaturalItemType.rock, 0.02),
        NaturalItemProbability(NaturalItemType.spruce, 0.02),
        NaturalItemProbability(NaturalItemType.birch, 0.04),
      ],
      TileType.bare: [
        NaturalItemProbability(NaturalItemType.birch, 0.02),
        NaturalItemProbability(NaturalItemType.spruce, 0.03),
        NaturalItemProbability(NaturalItemType.rock, 0.05),
      ],
      TileType.sand: [
        NaturalItemProbability(NaturalItemType.rock, 0.10),
      ],
      TileType.lakeFloorVegetation: [
        NaturalItemProbability(NaturalItemType.rock, 0.03),
      ],
      TileType.lakeFloorBare: [
        NaturalItemProbability(NaturalItemType.rock, 0.05),
      ]
    };
  }

  @override
  double amountOfWater() {
    return -0.3;
  }

  @override
  double elevationAmplitude() {
    return 15;
  }
}

class SvalbardCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.lakeFloorBare, 0.0, null),
      TileRule(TileType.svalbardGrass, 0.2, 0.3),
      TileRule(TileType.svalbardMountain, null, 0.3),
      TileRule(TileType.svalbardIce, null, null),
    ];
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    ///Todo these probabilities are not exactly correct because they are looped through in order.
    return {
      TileType.lakeFloorBare: [
        NaturalItemProbability(NaturalItemType.rock, 0.03),
      ],
      TileType.svalbardGrass: [
        NaturalItemProbability(NaturalItemType.rock, 0.05),
      ],
      TileType.svalbardMountain: [
        NaturalItemProbability(NaturalItemType.rock, 0.08),
      ],
      TileType.svalbardIce: [
        NaturalItemProbability(NaturalItemType.rock, 0.02),
      ],
    };
  }

  @override
  double amountOfWater() {
    return 0.0;
  }

  @override
  double elevationAmplitude() {
    return 100;
  }
}

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
  final NaturalItemType type;
  final double percentage;

  NaturalItemProbability(this.type, this.percentage) {
    assert(percentage > 0 && percentage < 1);
  }
}
