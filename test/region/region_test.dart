import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/region/default_region.dart';
import 'package:anki/foundation/region/region.dart';
import 'package:test/test.dart';

import '../test_utils/test_objects.dart';

void main() {
  test('Sort regions so that they are in correct painting order', () {
    var r1 = DefaultRegion(const IsoCoordinate.fromIso(32, 0), []);
    var r2 = DefaultRegion(const IsoCoordinate.fromIso(32, -100), []);
    var r3 = DefaultRegion(const IsoCoordinate.fromIso(1000, -200), []);
    var r4 = DefaultRegion(const IsoCoordinate.fromIso(1000, 200), []);
    var r5 = DefaultRegion(const IsoCoordinate.fromIso(-1000, 50), []);
    List<Region> regions = [r1, r2, r3, r4, r5];
    regions.sort();
    expect(regions[0].getBottomCoordinate(), r3.getBottomCoordinate());
    expect(regions[1].getBottomCoordinate(), r2.getBottomCoordinate());
    expect(regions[2].getBottomCoordinate(), r1.getBottomCoordinate());
    expect(regions[3].getBottomCoordinate(), r5.getBottomCoordinate());
    expect(regions[4].getBottomCoordinate(), r4.getBottomCoordinate());
  });

  test('Empty region should not have any drawing data', () {
    Region r1 = DefaultRegion.empty(const IsoCoordinate(0, 0));
    expect(r1.getRenderingData().aboveWater.rects.length, 0);
    expect(r1.getRenderingData().underWater.rects.length, 0);
  });

  test('Empty region should have drawing dto after update', () {
    var r1 = DefaultRegion.empty(const IsoCoordinate(0, 0));
    expect(r1.getRenderingData().aboveWater.rects.length, 0);
    expect(r1.getRenderingData().underWater.rects.length, 0);
    r1.changeStaticGameObjects([TestData.tile1]);
    expect(
        r1.getRenderingData().aboveWater.rects.isNotEmpty ||
            r1.getRenderingData().underWater.rects.isNotEmpty,
        isTrue);
  });
}
