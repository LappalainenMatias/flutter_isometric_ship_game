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

  test('No above water game object should be floating', () {
    int width = 256;
    var regionCreator = RegionCreator();
    var gameObjects = regionCreator.create(width, width, 0, 0);

    /// Checks that some game objects are above water level.
    /// If this fails, then just change the coordinate
    int count = 0;
    for (int i = 0; i < gameObjects.length; i++) {
      if (gameObjects[i].getElevation() > 0) {
        count++;
      }
    }
    expect(count >= 10, isTrue);

    /// We can use this set to check if there is game objects below the other game object
    HashSet<String> points = HashSet<String>();
    for (var tile in gameObjects) {
      var point = tile.getIsoCoordinate().toPoint();
      var elevation = tile.getElevation().toInt();
      points.add('${point.x.toInt()},${point.y.toInt()},$elevation');
    }

    /// Checks that each game object is on top of another game object
    for (var go in gameObjects) {
      if (go.getElevation() < 1) {
        continue;
      }
      var point = go.getIsoCoordinate().toPoint();
      var x = point.x.toInt();
      var y = point.y.toInt();
      var z = go.getElevation().toInt();
      var below = '$x,$y,${z - 1}';
      if (!points.contains(below)) {
        fail('There is a game object floating at $x, $y, $z');
      }
    }
  });
}
