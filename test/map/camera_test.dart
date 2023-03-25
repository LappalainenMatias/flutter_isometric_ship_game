import 'package:anki/map/camera.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('move camera one step up and one step left', () {
    Camera camera =
        Camera(topLeft: const Point(0, 0), bottomRight: const Point(1, 1));
    camera.shift(const Point(-1, 1));
    expect(camera.topLeft, const Point(-1, 1));
    expect(camera.bottomRight, const Point(0, 2));
  });

  test('get camera width and height', () {
    Camera camera =
        Camera(topLeft: const Point(-1, -1), bottomRight: const Point(-5, 10));
    expect(camera.width, 4);
    expect(camera.height, 11);
  });

  test('get camera center', () {
    Camera camera =
        Camera(topLeft: const Point(-1, 1), bottomRight: const Point(1, -1));
    expect(camera.center(), const Point(0, 0));
    camera =
        Camera(topLeft: const Point(0, 0), bottomRight: const Point(2, -2));
    expect(camera.center(), const Point(1, -1));
  });

  test('camera zoom out', () {
    Camera camera =
        Camera(topLeft: const Point(-1, -1), bottomRight: const Point(1, 1));
    camera.zoomOut(2.0);
    camera.zoomOut(2.0);
    expect(camera.topLeft, const Point(-4, -4));
    expect(camera.bottomRight, const Point(4, 4));
  });

  test('camera zoom in', () {
    Camera camera =
        Camera(topLeft: const Point(-4, -4), bottomRight: const Point(4, 4));
    camera.zoomIn(2.0);
    camera.zoomIn(2.0);
    expect(camera.topLeft, const Point(-1, -1));
    expect(camera.bottomRight, const Point(1, 1));
  });
}
