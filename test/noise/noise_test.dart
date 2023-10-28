import 'package:anki/noise/noise.dart';
import 'package:test/test.dart';
import '../test_utils/test_objects.dart';

void main() {
  test("Elevation and moisture noise should be same size", () {
    NoiseCreator noise = NoiseCreator(TestMapCreationRules(), 0);
    int width = 128;
    int height = 256;
    var (elevation, moisture) = noise.createComplexNoise(width, height, 0, 0);

    expect(elevation.length, width);
    expect(moisture.length, width);
    expect(elevation[0].length, height);
    expect(moisture[0].length, height);
  });

  test("Noise values should be in resonable limits", () {
    NoiseCreator noise = NoiseCreator(TestMapCreationRules(), 1);
    var (elevation, moisture) = noise.createComplexNoise(256, 256, 0, 0);
    for (var column in elevation) {
      for (var val in column) {
        if (val < -100 || val > 100) {
          throw Exception("Elevation was too large or low. Value: $val");
        }
      }
    }
    for (var column in moisture) {
      for (var val in column) {
        if (val < -2.0 || val > 2.0) {
          throw Exception("Moisture was too large or low. Value: $val");
        }
      }
    }
  });
}
