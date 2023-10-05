import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/constants.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_creation_queue.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Region should have the same level of detail", () {
    RegionCreationQueue queue = RegionCreationQueueImpl();
    GameMap map = GameMap(queue);
    Region r1 = map.getRegion(
        const IsoCoordinate(0, 0), LevelOfDetail.zoomlevel_1);
    expect(r1.lod, LevelOfDetail.zoomlevel_1);
  });

  test("Coordinates close to each other should return same region", () {
    RegionCreationQueue queue = RegionCreationQueueImpl();
    GameMap map = GameMap(queue);

    /// All of these coordinates are part of the same region
    Region r1 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.1),
        LevelOfDetail.zoomlevel_1);
    Region r2 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.0, regionSideWidth * 1.6),
        LevelOfDetail.zoomlevel_1);
    Region r3 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.2, regionSideWidth * 1.1),
        LevelOfDetail.zoomlevel_1);
    Region r4 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.3),
        LevelOfDetail.zoomlevel_1);

    /// Here we test that the creation queue does not have the same region twice
    expect(queue.size(), 1);

    expect(r1, r2);
    expect(r2, r3);
    expect(r3, r4);
  });
}
