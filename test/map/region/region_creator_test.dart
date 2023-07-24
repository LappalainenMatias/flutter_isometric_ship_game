import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Region should contain gameObjects', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto = regionCreator.create(const Point(1, 1), width, width, 0, 0);
    expect(dto.regionCoordinate, const Point(1, 1));
    expect(dto.gameObjects.length >= width, isTrue);
    expect(dto.gameObjects.length <= width * width, isTrue);
  });

  test('Region gameObjects should be ordered', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto = regionCreator.create(const Point(1, 1), width, width, 0, 0);
    List<GameObject> gameObjects = dto.gameObjects;
    gameObjects.sort();
    double preNearness = gameObjects.first.nearness();
    for (var gameObject in gameObjects) {
      double nearness = gameObject.nearness();
      expect(nearness >= preNearness, isTrue);
      preNearness = nearness;
    }
    expect(gameObjects.length >= width, isTrue);
  });
}
