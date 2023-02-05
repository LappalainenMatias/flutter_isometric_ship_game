import 'package:fast_noise/fast_noise.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Define perlin noise map size', () {
    var map1 = noise2(100, 100,
        seed: 1,
        noiseType: NoiseType.Perlin,
        octaves: 5,
        frequency: 0.1,
        cellularDistanceFunction: CellularDistanceFunction.Euclidean,
        cellularReturnType: CellularReturnType.Distance2Add);
    var map2 = noise2(50, 50,
        offset: const Point(50, 50),
        seed: 1,
        noiseType: NoiseType.Perlin,
        octaves: 5,
        frequency: 0.1,
        cellularDistanceFunction: CellularDistanceFunction.Euclidean,
        cellularReturnType: CellularReturnType.Distance2Add);
    expect(map1.length, 100);
    expect(map2.length, 50);
  });

  test('Get same values', () {
    var map1 = noise2(3, 3,
        offset: const Point(0, 0),
        seed: 2,
        noiseType: NoiseType.Perlin,
        octaves: 5,
        frequency: 0.1,
        cellularDistanceFunction: CellularDistanceFunction.Euclidean,
        cellularReturnType: CellularReturnType.Distance2Add);
    var map2 = noise2(3, 3,
        offset: const Point(1, 1),
        seed: 2,
        noiseType: NoiseType.Perlin,
        octaves: 5,
        frequency: 0.1,
        cellularDistanceFunction: CellularDistanceFunction.Euclidean,
        cellularReturnType: CellularReturnType.Distance2Add);
    expect(map1[1][1], map2[0][0]);
    expect(map1[2][2], map2[1][1]);
    expect(map1[2][2], isNot(map2[2][2]));
  });
}
