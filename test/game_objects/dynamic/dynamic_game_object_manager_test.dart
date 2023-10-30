import 'package:anki/camera/camera.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/map/map.dart';
import 'package:anki/region/region_creation_queue.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../test_utils/test_objects.dart';

void main() {
  test("Dynamic objects in view should update", () {
    var camera = Camera(center: const IsoCoordinate(0, 0));
    camera.setZoomLevel(0.01);
    var regionCreationQueue = RegionCreationQueueImpl(camera);
    var map = GameMap(regionCreationQueue);
    var manager = DynamicGameObjectManager(map, camera);
    var inView = TestDynamicObject(const IsoCoordinate(0, 0), 1);
    var outOfView = TestDynamicObject(const IsoCoordinate(-10000, -10000), 1);
    manager.addDynamicGameObject(inView);
    manager.addDynamicGameObject(outOfView);

    expect(inView.wasUpdated, isFalse);
    expect(outOfView.wasUpdated, isFalse);
    manager.update();
    expect(inView.wasUpdated, isTrue);
    expect(outOfView.wasUpdated, isFalse);
  });
}
