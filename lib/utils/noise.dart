import 'package:open_simplex_noise/open_simplex_noise.dart';

class Noise {
  late OpenSimplexNoise _elevationNoise1;
  late OpenSimplexNoise _elevationNoise2;
  late OpenSimplexNoise _elevationNoise3;
  late OpenSimplexNoise _moistureNoise1;
  late OpenSimplexNoise _moistureNoise2;
  late OpenSimplexNoise _moistureNoise3;

  Noise([int seed = 1]) {
    _elevationNoise1 = OpenSimplexNoise(seed + 1);
    _elevationNoise2 = OpenSimplexNoise(seed + 2);
    _elevationNoise3 = OpenSimplexNoise(seed + 3);
    _moistureNoise1 = OpenSimplexNoise(seed + 4);
    _moistureNoise2 = OpenSimplexNoise(seed + 5);
    _moistureNoise3 = OpenSimplexNoise(seed + 6);
  }

  /// Increasing frequency adds details
  List<List<List<double>>> create(
      int width, int height, int startX, int startY) {
    List<List<double>> elevationMap = _fixedSizeList(width, height);
    List<List<double>> moistureMap = _fixedSizeList(width, height);
    for (int x = 0; x < width; x++) {
      var rowElevation = elevationMap[x];
      var rowMoisture = moistureMap[x];
      for (int y = 0; y < height; y++) {
        var i = (startX + x).toDouble();
        var j = (startY + y).toDouble();
        double elevation = _elevationNoise1.eval2D(i * 0.006, j * 0.006) +
            0.5 * _elevationNoise2.eval2D(i * 0.016, j * 0.016) +
            0.25 * _elevationNoise3.eval2D(i * 0.048, j * 0.048);
        double moisture = _moistureNoise1.eval2D(i * 0.006, j * 0.006) +
            0.5 * _moistureNoise2.eval2D(i * 0.016, j * 0.016) +
            0.25 * _moistureNoise3.eval2D(i * 0.048, j * 0.048);
        rowElevation[y] =
            ((elevation - 0.3) * 15).roundToDouble(); // Increase height differences and water
        rowMoisture[y] = moisture;
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
