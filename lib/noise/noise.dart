import 'package:fast_noise/fast_noise.dart';
import 'package:open_simplex_2/open_simplex_2.dart';
import 'package:open_simplex_noise/open_simplex_noise.dart';
import '../camera/level_of_detail.dart';
import '../map/map_creation_rules.dart';

class NoiseCreator {
  late OpenSimplexNoise _elevationNoise1;
  late OpenSimplexNoise _elevationNoise2;
  late OpenSimplexNoise _elevationNoise3;
  late OpenSimplexNoise _moistureNoise1;
  late OpenSimplexNoise _moistureNoise2;
  late OpenSimplexNoise _moistureNoise3;
  MapCreationRules mapCreationRules;

  NoiseCreator(this.mapCreationRules, [int seed = 1]) {
    _elevationNoise1 = OpenSimplexNoise(seed + 1);
    _elevationNoise2 = OpenSimplexNoise(seed + 2);
    _elevationNoise3 = OpenSimplexNoise(seed + 3);
    _moistureNoise1 = OpenSimplexNoise(seed + 4);
    _moistureNoise2 = OpenSimplexNoise(seed + 5);
    _moistureNoise3 = OpenSimplexNoise(seed + 6);
  }

  List<List<List<double>>> createComplexNoise(int width, int height, int startX,
      int startY, LevelOfDetail levelOfDetail) {
    int tileSize = levelOfDetail.tileMinWidth;
    List<List<double>> elevationMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    List<List<double>> moistureMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    for (int x = 0; x < width ~/ tileSize; x++) {
      for (int y = 0; y < height ~/ tileSize; y++) {
        var i = (startX + x * tileSize).toDouble();
        var j = (startY + y * tileSize).toDouble();

        /// Increasing frequency adds details to the noise.
        double elevation = _elevationNoise1.eval2D(i * 0.001, j * 0.001) +
            0.1 * _elevationNoise2.eval2D(i * 0.01, j * 0.01) +
            0.01 * _elevationNoise3.eval2D(i * 0.1, j * 0.1);
        double moisture = _moistureNoise1.eval2D(i * 0.006, j * 0.006) +
            0.5 * _moistureNoise2.eval2D(i * 0.016, j * 0.016) +
            0.25 * _moistureNoise3.eval2D(i * 0.048, j * 0.048);
        elevationMap[x][y] = ((elevation + mapCreationRules.amountOfWater()) *
                mapCreationRules.elevationAmplitude())
            .roundToDouble();
        moistureMap[x][y] = moisture;
      }
    }
    return [elevationMap, moistureMap];
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    List<List<double>> map = List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}

/// Todo This seems to have best performance but testing is needed
class NoiseCreator_open_simplex_2 {
  late OpenSimplex2F _elevationNoise1;
  late OpenSimplex2F _elevationNoise2;
  late OpenSimplex2F _elevationNoise3;
  late OpenSimplex2F _moistureNoise1;
  late OpenSimplex2F _moistureNoise2;
  late OpenSimplex2F _moistureNoise3;
  MapCreationRules mapCreationRules;

  NoiseCreator_open_simplex_2(this.mapCreationRules, [int seed = 1]) {
    _elevationNoise1 = OpenSimplex2F(seed + 1);
    _elevationNoise2 = OpenSimplex2F(seed + 2);
    _elevationNoise3 = OpenSimplex2F(seed + 3);
    _moistureNoise1 = OpenSimplex2F(seed + 4);
    _moistureNoise2 = OpenSimplex2F(seed + 5);
    _moistureNoise3 = OpenSimplex2F(seed + 6);
  }

  List<List<List<double>>> createComplexNoise(int width, int height, int startX,
      int startY, LevelOfDetail levelOfDetail) {
    int tileSize = levelOfDetail.tileMinWidth;
    List<List<double>> elevationMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    List<List<double>> moistureMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    for (int x = 0; x < width ~/ tileSize; x++) {
      for (int y = 0; y < height ~/ tileSize; y++) {
        var i = (startX + x * tileSize).toDouble();
        var j = (startY + y * tileSize).toDouble();

        /// Increasing frequency adds details to the noise.
        double elevation = _elevationNoise1.noise2(i * 0.001, j * 0.001) +
            0.1 * _elevationNoise2.noise2(i * 0.01, j * 0.01) +
            0.01 * _elevationNoise3.noise2(i * 0.1, j * 0.1);
        double moisture = _moistureNoise1.noise2(i * 0.006, j * 0.006) +
            0.5 * _moistureNoise2.noise2(i * 0.016, j * 0.016) +
            0.25 * _moistureNoise3.noise2(i * 0.048, j * 0.048);
        elevationMap[x][y] = ((elevation + mapCreationRules.amountOfWater()) *
                mapCreationRules.elevationAmplitude())
            .roundToDouble();
        moistureMap[x][y] = moisture;
      }
    }
    return [elevationMap, moistureMap];
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    List<List<double>> map = List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}

class NoiseCreatorAnotherLibraryThird {
  late SimplexNoise _elevationNoise1;
  late SimplexNoise _elevationNoise2;
  late SimplexNoise _elevationNoise3;
  late SimplexNoise _moistureNoise1;
  late SimplexNoise _moistureNoise2;
  late SimplexNoise _moistureNoise3;
  MapCreationRules mapCreationRules;

  NoiseCreatorAnotherLibraryThird(this.mapCreationRules, [int seed = 1]) {
    _elevationNoise1 = SimplexNoise(seed: 1, frequency: 0.01);
    _elevationNoise2 = SimplexNoise(seed: 2, frequency: 0.02);
    _elevationNoise3 = SimplexNoise(seed: 3, frequency: 0.04);
    _moistureNoise1 = SimplexNoise(seed: 4, frequency: 0.01);
    _moistureNoise2 = SimplexNoise(seed: 5, frequency: 0.02);
    _moistureNoise3 = SimplexNoise(seed: 6, frequency: 0.04);
  }

  List<List<List<double>>> createComplexNoise(int width, int height, int startX,
      int startY, LevelOfDetail levelOfDetail) {
    int tileSize = levelOfDetail.tileMinWidth;
    List<List<double>> elevationMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    List<List<double>> moistureMap =
        _fixedSizeList(width ~/ tileSize, height ~/ tileSize);
    for (int x = 0; x < width ~/ tileSize; x++) {
      for (int y = 0; y < height ~/ tileSize; y++) {
        var i = (startX + x * tileSize).toDouble();
        var j = (startY + y * tileSize).toDouble();

        /// Increasing frequency adds details to the noise.
        double elevation = _elevationNoise1.getNoise2(i, j) +
            0.1 * _elevationNoise2.getNoise2(i, j) +
            0.01 * _elevationNoise3.getNoise2(i, j);
        double moisture = _moistureNoise1.getNoise2(i, j) +
            0.5 * _moistureNoise2.getNoise2(i, j) +
            0.25 * _moistureNoise3.getNoise2(i, j);
        elevationMap[x][y] = ((elevation + mapCreationRules.amountOfWater()) *
                mapCreationRules.elevationAmplitude())
            .roundToDouble();
        moistureMap[x][y] = moisture;
      }
    }
    return [elevationMap, moistureMap];
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    List<List<double>> map = List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
    return map;
  }
}
