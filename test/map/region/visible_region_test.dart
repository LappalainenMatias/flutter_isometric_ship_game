import 'package:anki/camera/camera.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/map/region/visible_regions.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Visible regions should always be in correct order", () {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    VisibleRegion visibleRegion = VisibleRegion(camera, RegionManager(camera));
    visibleRegion.addRegion(Region(const IsoCoordinate(0, 0), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(1, 1), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(-1, -1), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(-1, 0), {}));
    List<Region> regions = visibleRegion.getVisibleRegionsInDrawingOrder();
    expect(regions.length, 4);
    expect(regions[0].regionBottomCoordinate, const IsoCoordinate(1, 1));
    expect(regions[1].regionBottomCoordinate, const IsoCoordinate(0, 0));
    expect(regions[2].regionBottomCoordinate, const IsoCoordinate(-1, 0));
    expect(regions[3].regionBottomCoordinate, const IsoCoordinate(-1, -1));
  });

  test("Filter out unvisible regions", () {
    Camera camera = Camera(center: const IsoCoordinate(0, 0));
    camera.setZoomLevel(0.1);
    camera.aspectRatio = 1;
    VisibleRegion visibleRegion = VisibleRegion(camera, RegionManager(camera));
    visibleRegion.addRegion(Region(const IsoCoordinate(10000, 10000), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(1, 1), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(-1, -1), {}));
    visibleRegion.addRegion(Region(const IsoCoordinate(-10000, -10000), {}));
    visibleRegion.removeUnvisibleRegions();
    List<Region> regions = visibleRegion.getVisibleRegionsInDrawingOrder();
    expect(regions.length, 2);
    expect(regions[0].regionBottomCoordinate, const IsoCoordinate(1, 1));
    expect(regions[1].regionBottomCoordinate, const IsoCoordinate(-1, -1));
  });

  test("Performance test", () {
    Camera camera = Camera(center: const IsoCoordinate(0, 0));
    VisibleRegion visibleRegion = VisibleRegion(camera, RegionManager(camera));
    Stopwatch stopwatch = Stopwatch()..start();
    List coordinates = visibleRegion.getSpiralStartingFromCorner(
      const IsoCoordinate.fromIso(-10000, 10000),
      const IsoCoordinate.fromIso(10000, -10000),
      32,
    );
    print(coordinates.length);
    print(stopwatch.elapsedMilliseconds);

    /// 1: 41, 41, 47, 40
    /// 2: 17, 18, 17, 17
  });
}
