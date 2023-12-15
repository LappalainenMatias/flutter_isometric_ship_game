import 'dart:collection';

import 'package:anki/game_objects/game_object.dart';
import 'package:anki/region/region_creation/region_creator.dart';
import 'package:test/test.dart';

void main() {
  test('Region should not contain too few or too many gameobjects', () {
    int width = 32;
    var regionCreator = RegionCreator();
    var gameObjects = regionCreator.create(width, width, 0, 0);
    expect(gameObjects.length >= width, isTrue);
    // width * width * 2 is just an estimate
    expect(gameObjects.length <= width * width * 2, isTrue);
  });
}
