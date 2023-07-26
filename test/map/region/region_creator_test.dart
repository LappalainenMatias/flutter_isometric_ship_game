import 'package:anki/map/camera/camera.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Region should contain gameObjects', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto = regionCreator.create(const Point(1, 1), width, width, 0, 0, LevelOfDetail.maximum);
    expect(dto.regionCoordinate, const Point(1, 1));
    expect(dto.gameObjects.length >= width, isTrue);
    expect(dto.gameObjects.length <= width * width, isTrue);
  });
}
