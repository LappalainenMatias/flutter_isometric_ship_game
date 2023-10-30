import 'package:open_simplex_2/open_simplex_2.dart';
import '../map/map_creation_rules.dart';

class NoiseCreator {
  late OpenSimplex2F _elevationNoise1;
  late OpenSimplex2F _elevationNoise2;
  late OpenSimplex2F _elevationNoise3;
  late OpenSimplex2F _moistureNoise1;
  late OpenSimplex2F _moistureNoise2;
  late OpenSimplex2F _moistureNoise3;
  MapCreationRules mapCreationRules;

  NoiseCreator(this.mapCreationRules, [int seed = 1]) {
    _elevationNoise1 = OpenSimplex2F(seed + 1);
    _elevationNoise2 = OpenSimplex2F(seed + 2);
    _elevationNoise3 = OpenSimplex2F(seed + 3);
    _moistureNoise1 = OpenSimplex2F(seed + 11);
    _moistureNoise2 = OpenSimplex2F(seed + 12);
    _moistureNoise3 = OpenSimplex2F(seed + 13);
  }

  (List<List<double>>, List<List<double>>) createComplexNoise(
      int width, int height, int startX, int startY) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);

    /// Increasing frequency adds details to the noise.
    double frequency1 = mapCreationRules.frequency();
    double frequency2 = mapCreationRules.frequency() * 4;
    double frequency3 = mapCreationRules.frequency() * 16;

    double amountOfWater = mapCreationRules.amountOfWater();
    double peakToPeakAmplitude = mapCreationRules.peakToPeakAmplitude();
    for (int x = 0; x < width; x++) {
      var i = (startX + x).toDouble();
      for (int y = 0; y < width; y++) {
        var j = (startY + y).toDouble();

        // Here we add multiple noises together to add complexity
        double e = _elevationNoise1.noise2(i * frequency1, j * frequency1);
        e += 0.5 * _elevationNoise2.noise2(i * frequency2, j * frequency2);
        e += 0.25 * _elevationNoise3.noise2(i * frequency3, j * frequency3);

        // Normalize values to 0 - 1
        e = e / 1.75;

        // Makes terrain more interesting
        // e = pow(e, mapCreationRules.terrainSharpness()).toDouble();
        e = e - amountOfWater;
        e = e * peakToPeakAmplitude;
        elevationMap[x][y] = e.roundToDouble();

        double m = _moistureNoise1.noise2(i * frequency1, j * frequency1) +
            0.5 * _moistureNoise2.noise2(i * frequency2, j * frequency2) +
            0.25 * _moistureNoise3.noise2(i * frequency3, j * frequency3);
        m = m / 1.75; // Normalize to 0 - 1;
        moistureMap[x][y] = m;
      }
    }
    return (elevationMap, moistureMap);
  }

  List<List<double>> _fixedSizeList(int width, int height) {
    return List.generate(
      width,
      (i) => List.generate(height, (i) => 0, growable: false),
      growable: false,
    );
  }
}
