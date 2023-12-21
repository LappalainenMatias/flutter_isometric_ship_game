import 'dart:math';
import 'package:anki/constants.dart';
import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/map/default_map.dart';
import 'package:anki/foundation/region/visible_regions_handler.dart';
import 'package:flutter_test/flutter_test.dart';

import '../test_utils/test_objects.dart';

void main() {
  test("Should have regions after it gets updated", () {
    var camera = DefaultCamera();
    var map = DefaultGameMap(camera);
    var visibleRegions = VisibleRegionsHandlerImpl(camera, map);

    expect(visibleRegions.visibleRegionSize(), 0);

    visibleRegions.update();
    expect(visibleRegions.visibleRegionSize() >= 0, isTrue);
  });

  test("Should remove visible regions after update", () {
    var camera = DefaultCamera();
    var map = DefaultGameMap(camera);
    VisibleRegionsHandler visibleRegions =
        VisibleRegionsHandlerImpl(camera, map);

    expect(visibleRegions.visibleRegionSize(), 0);

    /// Lets make sure that visible regions does not pile up and they get removed
    var random = Random();
    for (int i = 0; i < 1000; i++) {
      camera.center = IsoCoordinate(
          random.nextDouble() * 1000000, random.nextDouble() * 1000000);
      visibleRegions.update();
    }
    expect(visibleRegions.visibleRegionSize() < 1000, isTrue);
  });

  test("No region should be outside the camera view", () {
    var testCamera = TestCamera();
    var map = DefaultGameMap(testCamera);
    var visibleRegions = VisibleRegionsHandlerImpl(testCamera, map);
    testCamera.topLeft = const IsoCoordinate.fromIso(-1000, -1000);
    testCamera.bottomRight = const IsoCoordinate.fromIso(1000, 1000);

    /// Update visible regions enough times that all the regions have been found
    for (int i = 0; i < 200; i++) {
      visibleRegions.update();
    }

    var regions = visibleRegions.getVisibleRegionsInDrawingOrder();
    for (var region in regions) {
      var coordinate = region.getBottomCoordinate();
      expect(coordinate.isoX > testCamera.topLeft.isoX, isTrue);
      expect(coordinate.isoX < testCamera.bottomRight.isoX, isTrue);
      expect(coordinate.isoY > testCamera.topLeft.isoY, isTrue);
      expect(coordinate.isoY < testCamera.bottomRight.isoY, isTrue);
    }
  });

  test("Check that there aren't too few or many visible region", () {
    var testCamera = TestCamera();
    var map = DefaultGameMap(testCamera);
    var visibleRegions = VisibleRegionsHandlerImpl(testCamera, map);
    testCamera.topLeft =
        const IsoCoordinate.fromIso(-regionSideWidth * 5, -regionSideWidth * 5);
    testCamera.bottomRight =
        const IsoCoordinate.fromIso(regionSideWidth * 5, regionSideWidth * 5);

    /// Test that the test camera is working
    expect(testCamera.width(), regionSideWidth * 10);
    expect(testCamera.height(), regionSideWidth * 10);

    /// Update the visible regions enough times that all the regions have been found
    for (int i = 0; i < 200; i++) {
      visibleRegions.update();
    }

    /// Estimate the amount of visible regions in the view. The side width
    /// doubles when we use the isometric projection.
    /// For example, IsoCoordinate(1,0).isoX == 2 is true
    var regionSize = (regionSideWidth * 2) * (regionSideWidth * 2);
    var estimatedAmountOfRegionsInView =
        (testCamera.width() * testCamera.height()) / regionSize;

    print("Estimated amount of regions in view: " +
        estimatedAmountOfRegionsInView.toString());
    print("Actual amount of regions in view: " +
        visibleRegions.visibleRegionSize().toString());

    /// Check that the estimation is not too far off
    expect(
        visibleRegions.visibleRegionSize() >
            estimatedAmountOfRegionsInView * 0.8,
        isTrue);
    expect(
        visibleRegions.visibleRegionSize() <
            estimatedAmountOfRegionsInView * 1.2,
        isTrue);
  });

  test("Check that visible regions do not contain duplicates", () {
    var testCamera = TestCamera();
    var map = DefaultGameMap(testCamera);
    var visibleRegions = VisibleRegionsHandlerImpl(testCamera, map);
    testCamera.topLeft = const IsoCoordinate.fromIso(-1000, -1000);
    testCamera.bottomRight = const IsoCoordinate.fromIso(1000, 1000);

    /// Update the visible regions enough times that all the regions have been found
    for (int i = 0; i < 200; i++) {
      visibleRegions.update();
    }

    var regions = visibleRegions.getVisibleRegionsInDrawingOrder();
    var bottomCoordinates = regions.map((region) => region.getBottomCoordinate());
    var uniqueBottomCoordinates = bottomCoordinates.toSet();
    expect(bottomCoordinates.length, uniqueBottomCoordinates.length);
  });
}
