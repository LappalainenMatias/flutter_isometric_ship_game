import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/map/region/region_creation/region_creator.dart';
import 'package:test/test.dart';

void main() {
  test('Create region dto', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    var gameObjects =
        regionCreator.create(width, width, 0, 0, LevelOfDetail.zoomlevel_0);
    expect(gameObjects.length >= width, isTrue);
    expect(gameObjects.length <= width * width, isTrue);
  });
}
