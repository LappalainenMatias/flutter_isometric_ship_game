import 'package:anki/map/camera/camera.dart';
import 'package:anki/map/region/region.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Sort regions', () {
    Region r1 = Region(const Point(1, 0), [], LevelOfDetail.maximum);
    Region r2 = Region(const Point(1, 1), [], LevelOfDetail.maximum);
    Region r3 = Region(const Point(0, 0), [], LevelOfDetail.maximum);
    List<Region> regions = [r1, r2, r3];
    regions.sort();
    expect(regions[0].regionCoordinate, const Point(1, 1));
    expect(regions[1].regionCoordinate, const Point(1, 0));
    expect(regions[2].regionCoordinate, const Point(0, 0));
  });
}
