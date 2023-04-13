import 'package:anki/map/map_creator.dart';
import 'package:anki/map/region.dart';
import 'package:flutter_test/flutter_test.dart';
import 'dart:math';

void main() {
  test('Time test', () {
    Stopwatch start = Stopwatch()..start();
    MapCreator mapCreator = MapCreator();
    Region? region = mapCreator.create(const Point(0,0), 32, 32, 0, 0);
    print(start.elapsedMilliseconds);
  });
}