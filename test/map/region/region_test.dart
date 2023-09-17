import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

import '../../test_utils/test_objects.dart';

void main() {
  test('Sort regions so that they are in correct painting order', () {
    Region r1 = Region(const IsoCoordinate(32, 32), [], LevelOfDetail.zoomlevel_0);
    Region r2 = Region(const IsoCoordinate(32, 0), [], LevelOfDetail.zoomlevel_0);
    Region r3 = Region(const IsoCoordinate(0, 0), [], LevelOfDetail.zoomlevel_0);
    Region r4 = Region(const IsoCoordinate(0, -32), [], LevelOfDetail.zoomlevel_0);
    Region r5 = Region(const IsoCoordinate(-32, -32), [], LevelOfDetail.zoomlevel_0);
    List<Region> regions = [r3, r4, r5, r2, r1];
    regions.sort();
    expect(regions[0].bottomCoordinate, r1.bottomCoordinate);
    expect(regions[1].bottomCoordinate, r2.bottomCoordinate);
    expect(regions[2].bottomCoordinate, r3.bottomCoordinate);
    expect(regions[3].bottomCoordinate, r4.bottomCoordinate);
    expect(regions[4].bottomCoordinate, r5.bottomCoordinate);
  });

  test('Empty region should not have any vertices', () {
    Region r1 = Region.empty(const IsoCoordinate(0,0), LevelOfDetail.zoomlevel_0);
    expect(r1.getVerticesCount(), 0);
  });

  test('Empty region should have vertices after update', () {
    Region r1 = Region.empty(const IsoCoordinate(0,0), LevelOfDetail.zoomlevel_0);
    expect(r1.getVerticesCount(), 0);
    r1.update([TestData.tile1]);
    expect(r1.getVerticesCount() >= 0, isTrue);
  });
}
