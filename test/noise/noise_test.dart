import 'package:anki/game_specific/terrain/terrain_creation_rules.dart';
import 'package:anki/game_specific/noise/noise.dart';
import 'package:test/test.dart';
import '../test_utils/test_objects.dart';

void main() {
  test("Elevation and moisture noise should be same size", () {
    var noise = NoiseCreator(TestMapCreationRules(), 0);
    int width = 128;
    int height = 256;
    var (elevation, moisture) = noise.createComplexNoise(width, height, 0, 0);

    expect(elevation.length, width);
    expect(moisture.length, width);
    expect(elevation[0].length, height);
    expect(moisture[0].length, height);
  });

  test("Noise values should be in resonable limits", () {
    var noise = NoiseCreator(TestMapCreationRules(), 1);
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

  test("4 small part should have same values as 1 large", () {
    // This checks that y-coordinates are increasing towards south in noise creation
    var noise = NoiseCreator(SvalbardCreationRules(), 10);
    var (large, moisture) = noise.createComplexNoise(2, 2, 0, 0);
    var (part1, moisture2) = noise.createComplexNoise(1, 1, 0, 0);
    var (part2, moisture3) = noise.createComplexNoise(1, 1, 1, 0);
    var (part3, moisture4) = noise.createComplexNoise(1, 1, 0, 1);
    var (part4, moisture5) = noise.createComplexNoise(1, 1, 1, 1);
    expect(large[0][0], part1[0][0]);
    expect(large[1][0], part2[0][0]);
    expect(large[0][1], part3[0][0]);
    expect(large[1][1], part4[0][0]);
  });
}
