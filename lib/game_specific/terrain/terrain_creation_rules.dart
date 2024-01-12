import '../game_object/tile.dart';

/// Guides how to map terrain will be created
abstract class TerrainCreationRules {
  /// return the tiletype of the first rule that matches.
  List<TileRule> tileRules();

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

class DefaultTerrainCreationRules extends TerrainCreationRules {
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
  double amountOfWater() {
    return 0.25;
  }

  @override
  double terrainSharpness() {
    return 1;
  }

  @override
  double frequency() {
    return 0.0045;
  }

  @override
  double maxElevation() {
    return 15;
  }

  @override
  double minElevation() {
    return -15;
  }
}

class TileRule {
  final TileType type;
  final double? elevationLimit;
  final double? moistureLimit;

  TileRule(this.type, this.elevationLimit, this.moistureLimit);

  /// Returns true if the elevation and moisture limitations are met.
  bool match(double inputElevation, double inputMoisture) {
    return (elevationLimit == null || inputElevation < elevationLimit!) &&
        (moistureLimit == null || inputMoisture < moistureLimit!);
  }
}