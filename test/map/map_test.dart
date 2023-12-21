import 'package:anki/constants.dart';
import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/map/default_map.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Coordinates close to each other should return same region", () {
    var camera = DefaultCamera();
    var map = DefaultGameMap(camera);

    /// All of these coordinates are part of the same region
    var r1 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.1));
    var r2 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.0, regionSideWidth * 1.6));
    var r3 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.2, regionSideWidth * 1.1));
    var r4 = map.getRegion(
        const IsoCoordinate(regionSideWidth * 1.1, regionSideWidth * 1.3));

    expect(r1, r2);
    expect(r2, r3);
    expect(r3, r4);
  });
}
