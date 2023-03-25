import 'package:anki/map/abstract_map.dart';
import 'package:anki/map/ground_pixels.dart';
import 'package:anki/map/square.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('move ground to right', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(-1, 1), const Point(1, -1));
    groundPixels.shift(const Point(1, 0));
    expect(groundPixels.topLeft, const Point(0, 1));
    expect(groundPixels.bottomRight, const Point(2, -1));
  });

  test('move ground to left', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(-1, 1), const Point(1, -1));
    groundPixels.shift(const Point(-1, 0));
    expect(groundPixels.topLeft, const Point(-2, 1));
    expect(groundPixels.bottomRight, const Point(0, -1));
  });

  test('move ground to up', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(-1, 1), const Point(1, -1));
    groundPixels.shift(const Point(0, 1));
    expect(groundPixels.topLeft, const Point(-1, 2));
    expect(groundPixels.bottomRight, const Point(1, 0));
  });

  test('move ground to down', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(-1, 1), const Point(1, -1));
    groundPixels.shift(const Point(0, -1));
    expect(groundPixels.topLeft, const Point(-1, 0));
    expect(groundPixels.bottomRight, const Point(1, -2));
  });
}

class MockMap implements AbstractMap {
  @override
  Square getSquare(int x, int y) {
    return Square.empty();
  }
}
