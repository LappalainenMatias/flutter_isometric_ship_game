import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Region should contain gameObjects', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto = regionCreator.create(const IsoCoordinate(1, 1), width, width, 0, 0, LevelOfDetail.maximum);
    expect(dto.regionBottomCoordinate, const IsoCoordinate(1, 1));
    int count = 0;
    for (List<GameObject> gameObjects in dto.gameObjectsByLOD.values) {
      count += gameObjects.length;
    }
    expect(count >= width, isTrue);
    expect(count <= width * width, isTrue);
  });
}
