import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Move camera", () {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    expect(camera.center.isoX, 0);
    expect(camera.center.isoY, 0);
    camera.move(0, 1);
    expect(camera.center.isoX, 0);
    expect(camera.center.isoY > 0, true);
    camera.move(1, 0);
    expect(camera.center.isoX > 0, true);
    camera.move(-1, 0);
    camera.move(-1, 0);
    expect(camera.center.isoX < 0, true);
    camera.move(0, -1);
    camera.move(0, -1);
    expect(camera.center.isoY < 0, true);
  });

  test("Zoom in and out", () {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    camera.setZoomLevel(0.5);
    double originWidth = camera.width();
    camera.setZoomLevel(1);
    expect(camera.width() > originWidth, true);
    camera.setZoomLevel(0);
    expect(camera.width() < originWidth, true);
  });

  test("Zoom level limits", () {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    expect(camera.width() > 0 && camera.width() < 100000, true);
    camera.setZoomLevel(-1000000);
    expect(camera.width() > 0 && camera.width() < 100000, true);
    camera.setZoomLevel(-1);
    expect(camera.width() > 0 && camera.width() < 100000, true);
    camera.setZoomLevel(0);
    expect(camera.width() > 0 && camera.width() < 100000, true);
    camera.setZoomLevel(1);
    expect(camera.width() > 0 && camera.width() < 100000, true);
    camera.setZoomLevel(1000000);
    expect(camera.width() > 0 && camera.width() < 100000, true);
  });

  test("Change aspect ratio", () {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    camera.aspectRatio = 1;
    expect(camera.width(), camera.height());
    camera.aspectRatio = 2;
    expect(camera.width(), camera.height() * 2);
    camera.aspectRatio = 0.2;
    expect(camera.width() * 5, camera.height());
  });

  test("Level of detail should be in order from highest to lowest detail", () {
    /// Add some parts of the code we are assuming that the LevelOfDetail.values are from the highest to the lowest detail (jsregionworker).
    /// This test can be removed if that is changed.
    int preTileMinSize = 0;
    for (var lod in LevelOfDetail.values) {
      expect(lod.tileMinSize > preTileMinSize, true);
      preTileMinSize = lod.tileMinSize;
    }
  });

  test("Level of detail tile min size should be power of 2", () {
    /// Power of 2 makes lowering the noise detail easier
    for (var lod in LevelOfDetail.values) {
      expect(lod.tileMinSize > 0 && (lod.tileMinSize & (lod.tileMinSize - 1)) == 0, true);
    }
  });
}