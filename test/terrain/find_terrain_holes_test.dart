import 'package:anki/game_specific/terrain/find_terrain_holes.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Should contain holes', () {
    var elevationMap = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0],
    ];
    var holes = findTerrainHoles(elevationMap);
    expect(holes.length, 1);
    expect(holes.first.x, 1);
    expect(holes.first.y, 1);
    expect(holes.first.z, 1);

    elevationMap = [
      [0, 0, -10],
      [0, 0, 0],
      [-10, 0, 0],
    ];
    holes = findTerrainHoles(elevationMap);
    expect(holes.length, 36);
  });

  test('Should not contain holes', () {
    var elevationMap = [
      [0, 1, 2],
      [0, 1, 1],
      [-1, 0, 0],
    ];
    var holes = findTerrainHoles(elevationMap);
    expect(holes.length, 0);

    elevationMap = [
      [-1, 0, 1],
      [0, -1, 0],
      [1, 0, -1],
    ];
    holes = findTerrainHoles(elevationMap);
    expect(holes.length, 0);
  });
}
