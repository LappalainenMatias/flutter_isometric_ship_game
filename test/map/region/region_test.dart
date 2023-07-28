import 'package:anki/map/region/region.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Sort regions', () {
    Region r1 = Region(const IsoCoordinate(32, 32), {});
    Region r2 = Region(const IsoCoordinate(32, 0), {});
    Region r3 = Region(const IsoCoordinate(0, 0), {});
    Region r4 = Region(const IsoCoordinate(0, -32), {});
    Region r5 = Region(const IsoCoordinate(-32, -32), {});
    List<Region> regions = [r5, r4, r3, r2, r1];
    regions.sort();
    expect(regions[0].regionBottomCoordinate, r1.regionBottomCoordinate);
    expect(regions[1].regionBottomCoordinate, r2.regionBottomCoordinate);
    expect(regions[2].regionBottomCoordinate, r3.regionBottomCoordinate);
    expect(regions[3].regionBottomCoordinate, r4.regionBottomCoordinate);
    expect(regions[4].regionBottomCoordinate, r5.regionBottomCoordinate);
  });
}
