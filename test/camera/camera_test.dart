import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Zoom in and out", () {
    var camera = DefaultCamera(center: const IsoCoordinate.fromIso(0, 0));
    camera.setZoomLevel(0.5);
    double originWidth = camera.width();
    camera.setZoomLevel(1);
    expect(camera.width() > originWidth, true);
    camera.setZoomLevel(0);
    expect(camera.width() < originWidth, true);
  });

  test("Change aspect ratio", () {
    var camera = DefaultCamera(center: const IsoCoordinate.fromIso(0, 0));
    camera.aspectRatio = 1;
    expect(camera.width(), camera.height());
    camera.aspectRatio = 2;
    expect(camera.width(), camera.height() * 2);
    camera.aspectRatio = 0.2;
    expect(camera.width() * 5, camera.height());
  });
}