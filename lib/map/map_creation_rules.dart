import '../game_objects/static/ground/tile_type.dart';
import '../game_objects/static/natural_items/natural_items.dart';

abstract class MapCreationRules {
  /// return the tiletype of the first rule that matches.
  List<TileRule> tileRules();

  /// List of probabilities for naturalItem to appear on a tile.
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities();

  /// 1 means 100% of water, 0 means 0% of water.
  /// 0.5 does not mean 50% of water because other settings affect the amount of water.
  double amountOfWater();

  /// Needs to be >= 0. Defines max height differences.
  /// 0 means no height differences.
  double peakToPeakAmplitude();

  /// Needs to be >= 0.
  /// 0 means everything is high and flat,
  /// 1 means that there is no affect,
  /// 5 means that there is large height differences.
  double terrainSharpness();

  /// Needs to be >= 0.
  /// For example, 0.008 has more details than 0.004.
  double frequency();
}

class FinlandCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.sand, 0.0, null),
      TileRule(TileType.deathGrass, 2.0, -0.20),
      TileRule(TileType.sand, 2.0, 0.35),
      TileRule(TileType.grass, 2.0, null),
      TileRule(TileType.deathGrass, 4.0, -0.20),
      TileRule(TileType.grass, 4.0, null),
      TileRule(TileType.deathGrass, 10.0, -0.20),
      TileRule(TileType.rock, null, null),
    ];
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    ///Todo these probabilities are not exactly correct because they are looped through in order.
    return {
      TileType.grass: [
        NaturalItemProbability(NaturalItemType.rock, 0.02),
        NaturalItemProbability(NaturalItemType.spruce, 0.02),
        NaturalItemProbability(NaturalItemType.birch, 0.04),
      ],
      TileType.sand: [
        NaturalItemProbability(NaturalItemType.rock, 0.10),
      ],
    };
  }

  @override
  double amountOfWater() {
    return 0.5;
  }

  @override
  double peakToPeakAmplitude() {
    return 30;
  }

  @override
  double terrainSharpness() {
    return 3;
  }

  @override
  double frequency() {
    return 0.002;
  }
}

class SvalbardCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.sand, 0.0, null),
      TileRule(TileType.rock, 6.0, -0.2),
      TileRule(TileType.deathGrass, 6.0, 0.4),
      TileRule(TileType.grass, 6.0, null),
      TileRule(TileType.rock, 12.0, -0.2),
      TileRule(TileType.deathGrass, 12.0, 0.4),
      TileRule(TileType.grass, 12.0, null),
      TileRule(TileType.rock, 20.0, 0.1),
      TileRule(TileType.deathGrass, 20.0, 0.4),
      TileRule(TileType.snow, null, null),
    ];
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    ///Todo these probabilities are not exactly correct because they are looped through in order.
    return {
      TileType.sand: [
        NaturalItemProbability(NaturalItemType.rock, 0.03),
      ],
      TileType.deathGrass: [
        NaturalItemProbability(NaturalItemType.rock, 0.05),
      ],
      TileType.rock: [
        NaturalItemProbability(NaturalItemType.rock, 0.08),
      ],
      TileType.snow: [
        NaturalItemProbability(NaturalItemType.rock, 0.02),
      ],
    };
  }

  @override
  double amountOfWater() {
    return 0.40;
  }

  @override
  double peakToPeakAmplitude() {
    return 40;
  }

  @override
  double terrainSharpness() {
    return 3;
  }

  @override
  double frequency() {
    return 0.0005;
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
