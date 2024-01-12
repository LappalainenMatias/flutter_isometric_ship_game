import 'dart:math';
import 'package:open_simplex_2/open_simplex_2.dart';

import '../terrain/terrain_creation_rules.dart';

/// Todo uses game_specific terrain creation rules and needs some refactoring
final class NoiseCreator {
  final OpenSimplex2F _elevationNoise1 = OpenSimplex2F(2);
  final OpenSimplex2F _elevationNoise2 = OpenSimplex2F(3);
  final OpenSimplex2F _elevationNoise3 = OpenSimplex2F(4);
  final OpenSimplex2F _moistureNoise1 = OpenSimplex2F(12);
  final OpenSimplex2F _moistureNoise2 = OpenSimplex2F(13);
  final OpenSimplex2F _moistureNoise3 = OpenSimplex2F(14);
  final mapCreationRules = DefaultTerrainCreationRules();
  late final double amountOfWater;
  late final double peakToPeakAmplitude;
  late final double terrainSharpness;
  late final double frequency1;
  late final double frequency2;
  late final double frequency3;

  static final NoiseCreator _instance = NoiseCreator._internal();

  NoiseCreator._internal() {
    amountOfWater = mapCreationRules.amountOfWater();
    peakToPeakAmplitude = min(
        mapCreationRules.maxElevation(), mapCreationRules.minElevation().abs());
    terrainSharpness = mapCreationRules.terrainSharpness();
    frequency1 = mapCreationRules.frequency();
    frequency2 = mapCreationRules.frequency() * 4;
    frequency3 = mapCreationRules.frequency() * 16;
  }

  factory NoiseCreator() {
    return _instance;
  }

  /// Means that between the start and end point there is no point with greater elevation
  bool isLineOfSightBlocked(
      double startAndEndElevation, Point<double> start, Point<double> end) {
    for (double i = 0; i < 1; i += 0.1) {
      double x = start.x + (end.x - start.x) * i;
      double y = start.y + (end.y - start.y) * i;
      var elevation = getElevation(x, y);
      if (elevation.toInt() >= startAndEndElevation.toInt()) {
        return true;
      }
    }
    return false;
  }

  (List<List<double>>, List<List<double>>) createComplexNoise(
      int width, int height, int bottomLeftX, int bottomRightY) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);

    for (int x = 0; x < width; x++) {
      var i = (bottomLeftX + x).toDouble();
      for (int y = 0; y < width; y++) {
        var j = (bottomRightY + y).toDouble();
        elevationMap[x][y] = getElevation(i, j);

        moistureMap[x][y] = getMoisture(i, j);
      }
    }
    return (elevationMap, moistureMap);
  }

  double getMoisture(double x, double y) {
    double m = _moistureNoise1.noise2(x * frequency1, y * frequency1) +
        0.5 * _moistureNoise2.noise2(x * frequency2, y * frequency2) +
        0.25 * _moistureNoise3.noise2(x * frequency3, y * frequency3);
    m = m / 1.75;
    return m;
  }

  double getElevation(double x, double y) {
    double e = _elevationNoise1.noise2(x * frequency1, y * frequency1);
    e += 0.5 * _elevationNoise2.noise2(x * frequency2, y * frequency2);
    e += 0.25 * _elevationNoise3.noise2(x * frequency3, y * frequency3);

    e = e / 1.75;

    e = pow(e, terrainSharpness).toDouble();
    e = e - amountOfWater;
    e = e * peakToPeakAmplitude;
    if (e < mapCreationRules.minElevation()) {
      e = mapCreationRules.minElevation();
    } else if (e > mapCreationRules.maxElevation()) {
      e = mapCreationRules.maxElevation();
    }
    var res = e.roundToDouble();
    return res;
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    return List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
  }
}
