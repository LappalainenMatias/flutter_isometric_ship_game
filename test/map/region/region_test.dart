import 'package:anki/map/region/region.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
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
    expect(regions[0].bottomCoordinate, r1.bottomCoordinate);
    expect(regions[1].bottomCoordinate, r2.bottomCoordinate);
    expect(regions[2].bottomCoordinate, r3.bottomCoordinate);
    expect(regions[3].bottomCoordinate, r4.bottomCoordinate);
    expect(regions[4].bottomCoordinate, r5.bottomCoordinate);
  });
}
