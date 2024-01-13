import 'dart:math';

import '../game_object/tile.dart';

/// Guides how to map terrain will be created
abstract class TerrainCreationRules {
  int getSeed();

  double frequency();

  /// return the tiletype of the first rule that matches.
  List<TileRule> tileRules();

  double elevationTransformation(double e);
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

  double _amountOfWater() {
    return 0.25;
  }

  double _terrainSharpness() {
    return 1;
  }

  @override
  double frequency() {
    return 0.0045;
  }

  double _maxElevation() {
    return 15;
  }

  double _minElevation() {
    return -15;
  }

  @override
  int getSeed() {
    return 2;
  }

  @override
  double elevationTransformation(double e) {
    var peakToPeakAmplitude = min(_maxElevation(), _minElevation().abs());
    e = pow(e, _terrainSharpness()).toDouble();
    e = e - _amountOfWater();
    e = e * peakToPeakAmplitude;
    if (e < _minElevation()) {
      e = _minElevation();
    } else if (e > _maxElevation()) {
      e = _maxElevation();
    }
    return e.roundToDouble();
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