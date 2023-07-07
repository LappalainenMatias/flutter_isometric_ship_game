import 'dart:math';
import 'package:anki/utils/cube.dart';
import 'package:anki/utils/custom_color.dart';
import 'package:test/test.dart';

void main() {
  test('Cube should have 18 vertices and 18 colors', () {
    List positionsAndColors = createCube(
      const Point(0, 0),
      1,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 101, 101, 101),
      const CustomColor.fromARGB(255, 102, 102, 102),
    );
    expect(positionsAndColors[0].length, 36);
    expect(positionsAndColors[1].length, 18);
  });

  test('Cube color should be solid blue when it is deep underwater', () {
    List positionsAndColors = createCube(
      const Point(0, 0),
      -10,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 105, 105, 105),
      const CustomColor.fromARGB(255, 110, 110, 110),
    );
    for (int i = 0; i < positionsAndColors[1].length - 1; i++) {
      expect(positionsAndColors[1][i], positionsAndColors[1][i + 1]);
    }
  });
}
