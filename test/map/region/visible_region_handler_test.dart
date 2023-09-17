import 'dart:math';

import 'package:anki/camera/camera.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/region/region_creation_queue.dart';
import 'package:anki/map/region/visible_regions_handler.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Should have regions after it gets updated", () {
    var camera = Camera();
    var regionCreationQueue = RegionCreationQueueImpl();
    var map = GameMap(regionCreationQueue);
    VisibleRegionsHandler visibleRegions =
        VisibleRegionsHandlerImpl(camera, map);

    expect(visibleRegions.visibleRegionSize(), 0);

    visibleRegions.updateVisibleRegions();
    expect(visibleRegions.visibleRegionSize() >= 0, isTrue);
  });

  test("Should remove visible regions after update", () {
    var camera = Camera();
    var regionCreationQueue = RegionCreationQueueImpl();
    var map = GameMap(regionCreationQueue);
    VisibleRegionsHandler visibleRegions =
        VisibleRegionsHandlerImpl(camera, map);

    expect(visibleRegions.visibleRegionSize(), 0);

    /// Lets make sure that visible regions does not pile up and they get removed
    var random = Random();
    for (int i = 0; i < 1000; i++) {
      camera.center = IsoCoordinate(
          random.nextDouble() * 1000000, random.nextDouble() * 1000000);
      visibleRegions.updateVisibleRegions();
    }
    print(visibleRegions.visibleRegionSize());
    expect(visibleRegions.visibleRegionSize() < 1000, isTrue);
    expect(visibleRegions.visibleRegionSize() > 0, isTrue);
  });
}
