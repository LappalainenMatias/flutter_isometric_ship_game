import 'dart:math';
import 'package:anki/utils/cube.dart';
import 'package:anki/utils/custom_color.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'package:test/test.dart';

void main() {
  test('Cube should have 18 vertices and 18 colors', () {
    VerticeDTO verticeDTO = createCube(
      const IsoCoordinate(0, 0),
      1,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 101, 101, 101),
      const CustomColor.fromARGB(255, 102, 102, 102),
    );
    expect(verticeDTO.positions.length, 36);
    expect(verticeDTO.colors.length, 18);
  });

  test('Cube color should be solid blue when it is deep underwater', () {
    VerticeDTO verticeDTO = createCube(
      const IsoCoordinate(0, 0),
      -10,
      const CustomColor.fromARGB(255, 100, 100, 100),
      const CustomColor.fromARGB(255, 105, 105, 105),
      const CustomColor.fromARGB(255, 110, 110, 110),
    );
    for (int i = 0; i < verticeDTO.colors.length - 1; i++) {
      expect(verticeDTO.colors[i], verticeDTO.colors[i + 1]);
    }
  });
}
