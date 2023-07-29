import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/map/map_creation_rules.dart';
import 'package:anki/noise/noise.dart';
import 'package:test/test.dart';

void main() {
  test("Noise range of values", () {
    NoiseCreator noise = NoiseCreator(
      FinlandCreationRules(),
      1,
    );
    var noises = noise.createComplexNoise(256, 256, 0, 0, LevelOfDetail.lod1x1);
    var elevation = noises[0];
    var moisture = noises[1];
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

  test("Low LOD should have smaller noise than high LOD", () {
    NoiseCreator noise = NoiseCreator(
      SvalbardCreationRules(),
      1,
    );
    var minimal =
        noise.createComplexNoise(128, 128, 0, 0, LevelOfDetail.lod16x16);
    var maximum =
        noise.createComplexNoise(128, 128, 0, 0, LevelOfDetail.lod1x1);
    expect(maximum[0][0].length, greaterThan(minimal[0][0].length));
    expect(maximum[1][0].length, greaterThan(minimal[1][0].length));
  });

  test("Noise values should increase 4x from 1x1 to 2x2 to 4x4", () {
    Stopwatch stopwatch = Stopwatch()..start();
    NoiseCreator creator = NoiseCreator(SvalbardCreationRules(), 1);
    creator = NoiseCreator(SvalbardCreationRules(), 1);
    creator = NoiseCreator(SvalbardCreationRules(), 1);
    creator = NoiseCreator(SvalbardCreationRules(), 1);
    creator = NoiseCreator(SvalbardCreationRules(), 1);
    print("NoiseCreator took ${stopwatch.elapsedMilliseconds}ms");
    var n1x1 = creator.createComplexNoise(16, 16, 0, 0, LevelOfDetail.lod1x1);
    var n2x2 = creator.createComplexNoise(16, 16, 0, 0, LevelOfDetail.lod2x2);
    var n4x4 = creator.createComplexNoise(16, 16, 0, 0, LevelOfDetail.lod4x4);
    expect(n1x1[0].expand((element) => element).toList().length,
        n2x2[0].expand((element) => element).toList().length * 4);
    expect(n2x2[1].expand((element) => element).toList().length,
        n4x4[1].expand((element) => element).toList().length * 4);
  });

  test("Noise performance", () {
    NoiseCreator first = NoiseCreator(SvalbardCreationRules(), 1);
    NoiseCreatorAnotherLibrary second = NoiseCreatorAnotherLibrary(SvalbardCreationRules(), 1);
    int width = 1024;
    Stopwatch stopwatch = Stopwatch()..start();
    first.createComplexNoise(width, width, 0, 0, LevelOfDetail.lod1x1);
    print("NoiseCreator took ${stopwatch.elapsedMilliseconds}ms");
    stopwatch.reset();
    second.createComplexNoise(width, width, 0, 0, LevelOfDetail.lod1x1);
    print("NoiseCreator2 took ${stopwatch.elapsedMilliseconds}ms");
  });
}