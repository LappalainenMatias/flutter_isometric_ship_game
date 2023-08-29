import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  try {
    test('Region should contain gameObjects', () {
      int width = 32;
      RegionCreator regionCreator = RegionCreator();
      RegionDTO dto = regionCreator.create(
          const IsoCoordinate(1, 1), width, width, 0, 0, LevelOfDetail.lod1x1);
      expect(dto.regionBottomCoordinate, const IsoCoordinate(1, 1));
      int count = 0;
      for (List<GameObject> gameObjects in dto.gameObjectsByLOD.values) {
        count += gameObjects.length;
      }
      expect(count >= width, isTrue);

      /// The max amount of ground tile game object is width * width * 1.333...
      /// because the amount of tiles is 1/4 of the privious one.
      /// 1 + 1/4 + 1/16 + 1/64 + ... = 1.333...
      expect(count <= width * width * 1.4, isTrue);
    });
  } catch (e, s) {
    print(s);
  }

  test('Low LOD should contain a lot less objects than high LOD', () {
    int width = 32;
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto1 = regionCreator.create(
        const IsoCoordinate(1, 1), width, width, 0, 0, LevelOfDetail.lod1x1);
    RegionDTO dto2 = regionCreator.create(
        const IsoCoordinate(1, 1), width, width, 0, 0, LevelOfDetail.lod16x16);
    int maximumCount = 0;
    int minimalCount = 0;
    for (List<GameObject> gameObjects in dto1.gameObjectsByLOD.values) {
      maximumCount += gameObjects.length;
    }
    for (List<GameObject> gameObjects in dto2.gameObjectsByLOD.values) {
      minimalCount += gameObjects.length;
    }
    expect(maximumCount, greaterThan(minimalCount * 16));
  });
}
