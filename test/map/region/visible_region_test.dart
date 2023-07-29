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
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(0, 0), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(1, 1), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(-1, -1), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(-1, 0), {}));
    List<Region> regions = visibleRegion.getVisibleRegionsInDrawingOrder();
    expect(regions.length, 4);
    expect(regions[0].bottomCoordinate, const IsoCoordinate(1, 1));
    expect(regions[1].bottomCoordinate, const IsoCoordinate(0, 0));
    expect(regions[2].bottomCoordinate, const IsoCoordinate(-1, 0));
    expect(regions[3].bottomCoordinate, const IsoCoordinate(-1, -1));
  });

  test("Filter out unvisible regions", () {
    Camera camera = Camera(center: const IsoCoordinate(0, 0));
    camera.setZoomLevel(0.1);
    camera.aspectRatio = 1;
    VisibleRegion visibleRegion = VisibleRegion(camera, RegionManager(camera));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(10000, 10000), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(1, 1), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(-1, -1), {}));
    visibleRegion.addRegionInCorrectOrder(Region(const IsoCoordinate(-10000, -10000), {}));
    visibleRegion.removeUnvisibleRegions();
    List<Region> regions = visibleRegion.getVisibleRegionsInDrawingOrder();
    expect(regions.length, 2);
    expect(regions[0].bottomCoordinate, const IsoCoordinate(1, 1));
    expect(regions[1].bottomCoordinate, const IsoCoordinate(-1, -1));
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
    print(stopwatch.elapsedMilliseconds);
    /// step:32 from:(-10000, 10000) to:(10000, -10000)
    /// 1: 41, 41, 47, 40
    /// 2: 17, 18, 17, 17
    /// 3: 20, 18, 18, 24
    /// 4: 14, 18, 12, 11
  });

  test("Spiral coordinates should not contain null values", () {
    /// The spiral algorithm is used a lot and because of that we use fixed size list to make the algorithm faster.
    /// This test makes sure that the fixed size list is correct length and does not contain null values.
    Camera camera = Camera(center: const IsoCoordinate(0, 0));
    VisibleRegion visibleRegion = VisibleRegion(camera, RegionManager(camera));
    List coordinates = visibleRegion.getSpiralStartingFromCorner(
      const IsoCoordinate.fromIso(-101, 100),
      const IsoCoordinate.fromIso(105, -23),
      8,
    );

    for (var coord in coordinates) {
      expect(coord != null, true);
    }

    coordinates = visibleRegion.getSpiralStartingFromCorner(
      const IsoCoordinate.fromIso(-1, 0),
      const IsoCoordinate.fromIso(1, -1),
      1,
    );

    for (var coord in coordinates) {
      expect(coord != null, true);
    }
  });
}
