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

  /// Needs to be >= 0.
  /// 1 means that there is no affect,
  /// 5 means that there is large height differences.
  double terrainSharpness();

  /// Needs to be >= 0.
  /// This is the frequency used when creating noise.
  /// For example, 0.008 has more details than 0.004.
  double frequency();

  double minElevation();

  double maxElevation();
}

class SvalbardCreationRules extends MapCreationRules {
  @override
  List<TileRule> tileRules() {
    return [
      TileRule(TileType.rock, 0.0, -0.2),
      TileRule(TileType.sand, 0.0, null),
      TileRule(TileType.rock, 2.0, -0.2),
      TileRule(TileType.sand, 2.0, null),
      TileRule(TileType.rock, 6.0, -0.1),
      TileRule(TileType.sand, 6.0, 0.0),
      TileRule(TileType.grass, 6.0, null),
      TileRule(TileType.rock, 15.0, 0.0),
      TileRule(TileType.grass, 15.0, 0.4),
      TileRule(TileType.rock, null, null),
    ];
  }

  @override
  Map<TileType, List<NaturalItemProbability>> naturalItemProbabilities() {
    return {
      TileType.grass: [
        NaturalItemProbability(NaturalItemType.birch, 0.01),
      ],
    };
  }

  @override
  double amountOfWater() {
    return 0.4;
  }

  @override
  double terrainSharpness() {
    return 1;
  }

  @override
  double frequency() {
    return 0.005;
  }

  @override
  double maxElevation() {
    return 20;
  }

  @override
  double minElevation() {
    return -20;
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
