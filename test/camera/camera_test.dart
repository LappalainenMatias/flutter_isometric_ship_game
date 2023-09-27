import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Move camera up, down, left and right", () {
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
      expect(lod.tileMinWidth > preTileMinSize, true);
      preTileMinSize = lod.tileMinWidth;
    }
  });
}