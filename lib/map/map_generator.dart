import 'package:anki/map/square.dart';
import 'package:fast_noise/fast_noise.dart';
import 'naturalitem/natural_item.dart';
import 'square_type.dart';
import 'square_visibility.dart';
import 'map.dart';
import '../character/item.dart';

class MapGenerator {
  MapModel realisticRandomMap(int width, int height) {
    final elevationNoise = _getPerlinNoise(width, height, 108, 0.04);
    final elevationNoise2 = _getPerlinNoise(width, height, 2, 0.02);
    final elevationNoise4 = _getPerlinNoise(width, height, 3, 0.01);
    final moistureNoise = _getPerlinNoise(width, height, 4, 0.04);
    final moistureNoise2 = _getPerlinNoise(width, height, 5, 0.02);
    final moistureNoise4 = _getPerlinNoise(width, height, 6, 0.01);
    List<List<Square>> squares = [];
    for (var y = 0; y < height; y++) {
      List<Square> row = [];
      for (var x = 0; x < width; x++) {
        double elevation = 0.25 * elevationNoise[x][y] +
            0.5 * elevationNoise2[x][y] +
            1 * elevationNoise4[x][y];
        double moisture = 0.25 * moistureNoise[x][y] +
            0.5 * moistureNoise2[x][y] +
            1 * moistureNoise4[x][y];
        elevation = elevation / (1 + 0.5 + 0.25);
        moisture = moisture / (1 + 0.5 + 0.25);
        SquareType type = SquareTypeExtension.getType(elevation, moisture);
        NaturalItem? naturalItem = NaturalItemExtension.getNaturalItem(type);
        row.add(Square(type, x, y, SquareVisibility.unseen,
            ItemExtension.getRandomItems(type), naturalItem));
      }
      squares.add(row);
    }
    return MapModel(width, height, squares);
  }

  /// Increasing frequency adds details
  List<List<double>> _getPerlinNoise(int w, int h, int seed, frequency) =>
      noise2(w, h,
          seed: seed,
          noiseType: NoiseType.Perlin,
          octaves: 5,
          frequency: frequency,
          cellularDistanceFunction: CellularDistanceFunction.Euclidean,
          cellularReturnType: CellularReturnType.Distance2Add);
}
