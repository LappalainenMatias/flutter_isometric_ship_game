import 'package:anki/camera/camera.dart';
import 'package:anki/constants.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/map.dart';
import 'package:anki/region/region_creation_queue.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Coordinates close to each other should return same region", () {
    Camera camera = Camera();
    RegionCreationQueue queue = RegionCreationQueueImpl(camera);
    GameMap map = GameMap(queue);

    /// All of these coordinates are part of the same region
    var r1 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.1));
    var r2 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.0, regionSideWidth * 1.6));
    var r3 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.2, regionSideWidth * 1.1));
    var r4 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.3));

    /// Here we test that the creation queue does not have the same region twice
    expect(queue.size(), 1);

    expect(r1, r2);
    expect(r2, r3);
    expect(r3, r4);
  });
}
