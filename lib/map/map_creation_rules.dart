import '../game_objects/static/ground/tile_type.dart';
import '../game_objects/static/natural_items/natural_items.dart';

/// Guides how to map should be created.
abstract class MapCreationRules {
  /// return the tiletype of the first rule that matches.
  List<TileRule> tileRules();

  /// List of probabilities for naturalItem to appear on a tile.
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities();

  /// 1 means 100% of water, 0 means 0% of water.
  /// 0.5 does not mean 50% of water because other map creation rules can
  /// affect the amount of water the map has.
  double amountOfWater();

  /// Needs to be >= 0. Defines max height differences.
  /// 0 means no height differences.
  double peakToPeakAmplitude();

  /// Needs to be >= 0.
  /// 1 means that there is no affect,
  /// 5 means that there is large height differences.
  double terrainSharpness();

  /// Needs to be >= 0.
  /// This is the frequency used when creating noise.
  /// For example, 0.008 has more details than 0.004.
  double frequency();
}

class SvalbardCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.rock, 0.0, -0.2),
      TileRule(TileType.deathGrass, 0.0, 0.0),
      TileRule(TileType.sand, 0.0, null),
      TileRule(TileType.rock, 10.0, -0.2),
      TileRule(TileType.grass, 10.0, 0.3),
      TileRule(TileType.deathGrass, 10.0, null),
      TileRule(TileType.rock, 15.0, -0.2),
      TileRule(TileType.deathGrass, 15.0, 0.4),
      TileRule(TileType.grass, 15.0, null),
      TileRule(TileType.rock, 20.0, 0.5),
      TileRule(TileType.deathGrass, 20.0, 0.6),
      TileRule(TileType.snow, null, null),
    ];
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    return {
      TileType.grass: [
        NaturalItemProbability(NaturalItemType.birch, 0.01),
      ],
      TileType.deathGrass: [
        NaturalItemProbability(NaturalItemType.birch, 0.005),
      ],
    };
  }

  @override
  double amountOfWater() {
    return 0.4;
  }

  @override
  double peakToPeakAmplitude() {
    return 30;
  }

  @override
  double terrainSharpness() {
    return 1;
  }

  @override
  double frequency() {
    return 0.003;
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
