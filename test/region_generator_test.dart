import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:test/test.dart';

void main() {
  test('test', () {
    Stopwatch stopwatch = Stopwatch()..start();
    RegionCreator regionCreator = RegionCreator();
    regionCreator.create(const IsoCoordinate(0, 0), 128, 128, 0, 0);
    print("test took ${stopwatch.elapsedMilliseconds} ms");
  });
}
