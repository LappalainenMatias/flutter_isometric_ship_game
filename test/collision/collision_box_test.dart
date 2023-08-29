import 'package:anki/collision/collision_box.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('getters should return correct values', () {
    var box = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 20);
    expect(box.left, 0);
    expect(box.right, 10);
    expect(box.top, 15);
    expect(box.bottom, -5);
  });

  test('should detect overlap with another box', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 10);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(10, 10), 10, 10);
    expect(box1.overlaps(box2), true);
  });

  test('should detect no overlap with another box', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 10);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(20, 20), 10, 10);
    expect(box1.overlaps(box2), false);
  });

  test('should detect no overlap when boxes touch but do not overlap', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 10);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(15, 15), 10, 10);
    expect(box1.overlaps(box2), false);
  });
}
