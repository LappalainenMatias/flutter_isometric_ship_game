import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:test/test.dart';

void main() {
  /// Results (ms):
  /// 538/537/538
  /// 542/523/540
  /// 510/623/507/512
  /// 452/428/414/441 SimplexNoise
  /// 357/354/357/357 OpenSimplexNoise
  test('test', () {
    Stopwatch stopwatch = Stopwatch()..start();
    RegionCreator regionCreator = RegionCreator();
    regionCreator.create(const IsoCoordinate(0, 0), 256, 256, 0, 0);
    print("test took ${stopwatch.elapsedMilliseconds} ms");
  });
}
