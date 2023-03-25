import 'package:anki/map/abstract_map.dart';
import 'package:anki/map/ground_pixels.dart';
import 'package:anki/map/square.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Increase ground area', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(0, 0), const Point(1, -1));
    groundPixels.shiftToArea(const Point(0, 0), const Point(2, -2));
    expect(groundPixels.matrix.length, 3);
    expect(groundPixels.matrix.first.length, 3);
  });

  test('Decrease ground area', () {
    GroundPixels groundPixels =
        GroundPixels(MockMap(), const Point(-1, 1), const Point(1, -1));
    groundPixels.shiftToArea(const Point(-1, 1), const Point(0, 0));
    expect(groundPixels.matrix.length, 2);
    expect(groundPixels.matrix.first.length, 2);
  });
}

class MockMap implements AbstractMap {
  @override
  Square getSquare(int x, int y) {
    return Square.empty();
  }
}
