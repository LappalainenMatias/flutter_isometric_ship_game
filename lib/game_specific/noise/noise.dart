import 'dart:math';
import 'package:open_simplex_2/open_simplex_2.dart';

import '../terrain/terrain_creation_rules.dart';

/// Todo uses game_specific terrain creation rules and needs some refactoring
final class NoiseCreator {
  late final OpenSimplex2F _elevationNoise1;
  late final OpenSimplex2F _elevationNoise2;
  late final OpenSimplex2F _elevationNoise3;
  late final OpenSimplex2F _moistureNoise1;
  late final OpenSimplex2F _moistureNoise2;
  late final OpenSimplex2F _moistureNoise3;
  late final double frequency1;
  late final double frequency2;
  late final double frequency3;
  final mapCreationRules = DefaultTerrainCreationRules();

  static final NoiseCreator _instance = NoiseCreator._internal();

  NoiseCreator._internal() {
    /// We combine multiple noise functions to create a more complex noise
    frequency1 = mapCreationRules.frequency();
    frequency2 = mapCreationRules.frequency() * 4;
    frequency3 = mapCreationRules.frequency() * 16;
    var seed = mapCreationRules.getSeed();
    _elevationNoise1 = OpenSimplex2F(seed);
    _elevationNoise2 = OpenSimplex2F(seed + 1);
    _elevationNoise3 = OpenSimplex2F(seed + 2);
    _moistureNoise1 = OpenSimplex2F(seed + 11);
    _moistureNoise2 = OpenSimplex2F(seed + 12);
    _moistureNoise3 = OpenSimplex2F(seed + 13);
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
    return mapCreationRules.elevationTransformation(e);
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    return List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
  }
}
