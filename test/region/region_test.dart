import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/region/region.dart';
import 'package:test/test.dart';

import '../test_utils/test_objects.dart';

void main() {
  test('Sort regions so that they are in correct painting order', () {
    Region r1 = Region(const IsoCoordinate.fromIso(32, 0), []);
    Region r2 = Region(const IsoCoordinate.fromIso(32, -100), []);
    Region r3 = Region(const IsoCoordinate.fromIso(1000, -200), []);
    Region r4 = Region(const IsoCoordinate.fromIso(1000, 200), []);
    Region r5 = Region(const IsoCoordinate.fromIso(-1000, 50), []);
    List<Region> regions = [r1, r2, r3, r4, r5];
    regions.sort();
    expect(regions[0].bottomCoordinate, r3.bottomCoordinate);
    expect(regions[1].bottomCoordinate, r2.bottomCoordinate);
    expect(regions[2].bottomCoordinate, r1.bottomCoordinate);
    expect(regions[3].bottomCoordinate, r5.bottomCoordinate);
    expect(regions[4].bottomCoordinate, r4.bottomCoordinate);
  });

  test('Empty region should not have any drawing data', () {
    Region r1 = Region.empty(const IsoCoordinate(0, 0));
    expect(r1.getRstTransformsAndRects().rectsAboveWater.length, 0);
    expect(r1.getRstTransformsAndRects().rectsUnderWater.length, 0);
  });

  test('Empty region should have drawing dto after update', () {
    Region r1 = Region.empty(const IsoCoordinate(0, 0));
    expect(r1.getRstTransformsAndRects().rectsAboveWater.length, 0);
    expect(r1.getRstTransformsAndRects().rectsUnderWater.length, 0);
    r1.changeStaticGameObjects([TestData.tile1]);
    expect(
        r1.getRstTransformsAndRects().rectsAboveWater.isNotEmpty ||
            r1.getRstTransformsAndRects().rectsUnderWater.isNotEmpty,
        isTrue);
  });
}
