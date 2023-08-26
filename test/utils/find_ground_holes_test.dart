import 'package:anki/utils/find_ground_holes.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('findHoles identifies holes correctly', () {
    final map1 = [
      [1.0, 1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0, 1.0],
      [1.0, 20.0, 1.0, 1.0],
      [1.0, 1.0, 1.0, 20.0]
    ];

    final holes1 = findHoles(map1);
    final expectedHoles1 = [const Point(1, 2), const Point(2, 2)];
    expect(holes1, containsAll(expectedHoles1));

    final map2 = [
      [1.0, 1.0, 1.0],
      [1.0, 2.0, 1.0],
      [1.0, 1.0, 1.0]
    ];

    final holes2 = findHoles(map2);
    final expectedHoles2 = [const Point(1, 1)];
    expect(holes2, containsAll(expectedHoles2));

    final map3 = [
      [1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0]
    ];

    final holes3 = findHoles(map3);
    expect(holes3, isEmpty);
  });
}