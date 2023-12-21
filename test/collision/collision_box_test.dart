import 'package:anki/foundation/collision/collision_box.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('should overlap because they have same coordinates', () {
    var box1 = CollisionBox(const IsoCoordinate(0, 0), 1, 0);
    var box2 = CollisionBox(const IsoCoordinate(0, 0), 1, 0);
    expect(box1.overlaps(box2), true);
  });

  test('should overlap because other collision box is inside', () {
    var box1 = CollisionBox(const IsoCoordinate(1, 2), 2, 0);
    var box2 = CollisionBox(const IsoCoordinate(2, 3), 0.5, 0);
    expect(box1.overlaps(box2), true);
  });

  test('should not overlap because cubes are faraway from each other', () {
    var box1 = CollisionBox(const IsoCoordinate(-10, -10), 1, 0);
    var box2 = CollisionBox(const IsoCoordinate(10, 10), 2, 0);
    expect(box1.overlaps(box2), false);
  });

  test('should overlap because corners are touching', () {
    var box1 = CollisionBox(const IsoCoordinate(-2, -3), 1, 0);
    var box2 = CollisionBox(const IsoCoordinate(-1.1, -2.1), 1, 0);
    expect(box1.overlaps(box2), true);
  });

  test('should not overlap because they are next to each other', () {
    var center = CollisionBox(const IsoCoordinate(0, 0), 1, 0);
    var left = CollisionBox(const IsoCoordinate(-1, 0), 1, 0);
    var right = CollisionBox(const IsoCoordinate(1, 0), 1, 0);
    var top = CollisionBox(const IsoCoordinate(0, -1), 1, 0);
    var bottom = CollisionBox(const IsoCoordinate(0, 1), 1, 0);
    expect(center.overlaps(left), false);
    expect(center.overlaps(right), false);
    expect(center.overlaps(top), false);
    expect(center.overlaps(bottom), false);
  });

  test('should overlap in z direction', () {
    var below = CollisionBox(const IsoCoordinate(-1, -1), 1, 0);
    var above = CollisionBox(const IsoCoordinate(-1, -1), 1, 0.9);
    expect(below.overlaps(above), true);
  });

  test('should not overlap in z direction', () {
    var below = CollisionBox(const IsoCoordinate(-1, -1), 2, 0);
    var above = CollisionBox(const IsoCoordinate(-1, -1), 1, 3);
    expect(below.overlaps(above), false);
  });
}
