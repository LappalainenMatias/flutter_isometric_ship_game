import 'package:open_simplex_2/open_simplex_2.dart';
import '../map/map_creation_rules.dart';

class NoiseCreator {
  late OpenSimplex2F _elevationNoise1;
  late OpenSimplex2F _elevationNoise2;
  late OpenSimplex2F _elevationNoise3;
  late OpenSimplex2F _elevationNoise4;
  late OpenSimplex2F _elevationNoise5;
  late OpenSimplex2F _elevationNoise6;
  late OpenSimplex2F _elevationNoise7;
  late OpenSimplex2F _elevationNoise8;
  late OpenSimplex2F _moistureNoise1;
  late OpenSimplex2F _moistureNoise2;
  late OpenSimplex2F _moistureNoise3;
  MapCreationRules mapCreationRules;

  NoiseCreator(this.mapCreationRules, [int seed = 1]) {
    _elevationNoise1 = OpenSimplex2F(seed + 1);
    _elevationNoise2 = OpenSimplex2F(seed + 2);
    _elevationNoise3 = OpenSimplex2F(seed + 3);
    _elevationNoise4 = OpenSimplex2F(seed + 4);
    _elevationNoise5 = OpenSimplex2F(seed + 5);
    _elevationNoise6 = OpenSimplex2F(seed + 6);
    _elevationNoise7 = OpenSimplex2F(seed + 7);
    _elevationNoise8 = OpenSimplex2F(seed + 8);
    _moistureNoise1 = OpenSimplex2F(seed + 9);
    _moistureNoise2 = OpenSimplex2F(seed + 10);
    _moistureNoise3 = OpenSimplex2F(seed + 11);
  }

  /// In lower levels of detail we skip noise values
  (List<List<double>>, List<List<double>>) createComplexNoise(
      int width, int height, int startX, int startY, int skip) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);

    /// Increasing frequency adds details to the noise.
    double frequency1 = mapCreationRules.frequency();
    double frequency2 = mapCreationRules.frequency() * 4;
    double frequency3 = mapCreationRules.frequency() * 16;
    double frequency4 = mapCreationRules.frequency() * 64;
    double frequency5 = mapCreationRules.frequency() * 0.008;
    double frequency6 = mapCreationRules.frequency() * 0.032;
    double frequency7 = mapCreationRules.frequency() * 0.128;
    double frequency8 = mapCreationRules.frequency() * 0.512;
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < width; y++) {
        var i = (startX + x * skip).toDouble();
        var j = (startY + y * skip).toDouble();

        // Here we add multiple noises together to add complexity
        double e = _elevationNoise1.noise2(i * frequency1, j * frequency1);
        e += 0.25 * _elevationNoise2.noise2(i * frequency2, j * frequency2);
        e += 0.125 * _elevationNoise3.noise2(i * frequency3, j * frequency3);
        e += 0.0625 * _elevationNoise4.noise2(i * frequency4, j * frequency4);
        e += _elevationNoise5.noise2(i * frequency5, j * frequency5);
        e += 0.5 * _elevationNoise6.noise2(i * frequency6, j * frequency6);
        e += 0.25 * _elevationNoise7.noise2(i * frequency7, j * frequency7);
        e += 0.125 * _elevationNoise8.noise2(i * frequency8, j * frequency8);

        // Normalize values to 0 - 1
        e = (e + 1) / 4;

        //Makes terrain more interesting
        //e = pow(e, mapCreationRules.terrainSharpness()).toDouble();
        e = e - mapCreationRules.amountOfWater();
        e = e * mapCreationRules.peakToPeakAmplitude();
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
