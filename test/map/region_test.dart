import 'dart:typed_data';
import 'package:anki/map/region/region.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Sort regions', () {
    Region r1 = Region(
        0,
        const IsoCoordinate.fromIso(1, 0),
        Float32List.fromList([]),
        Int32List.fromList([]),
        Float32List.fromList([]),
        Int32List.fromList([]), []);
    Region r2 = Region(
        0,
        const IsoCoordinate.fromIso(1, 1),
        Float32List.fromList([]),
        Int32List.fromList([]),
        Float32List.fromList([]),
        Int32List.fromList([]), []);
    Region r3 = Region(
        0,
        const IsoCoordinate.fromIso(0, 0),
        Float32List.fromList([]),
        Int32List.fromList([]),
        Float32List.fromList([]),
        Int32List.fromList([]), []);
    List<Region> regions = [r1, r2, r3];
    regions.sort((a, b) => a.compareTo(b));
    expect(regions[0].coordinate, const IsoCoordinate.fromIso(1, 1));
    expect(regions[1].coordinate, const IsoCoordinate.fromIso(1, 0));
    expect(regions[2].coordinate, const IsoCoordinate.fromIso(0, 0));
  });
}
