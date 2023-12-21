
import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/map/default_map.dart';
import 'package:anki/game_specific/dynamic_game_object_manager.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../test_utils/test_objects.dart';

void main() {
  test("Dynamic objects in view should update", () {
    var camera = DefaultCamera(center: const IsoCoordinate(0, 0));
    camera.setZoomLevel(0.01);
    var map = DefaultGameMap(camera);
    var manager = DynamicGameObjectManager(map, camera);
    var inView = TestDynamicObject(const IsoCoordinate(0, 0), 1, 0);
    var outOfView = TestDynamicObject(const IsoCoordinate(-10000, -10000), 1, 0);
    manager.addDynamicGameObject(inView);
    manager.addDynamicGameObject(outOfView);

    expect(inView.wasUpdated, isFalse);
    expect(outOfView.wasUpdated, isFalse);
    manager.update(1);
    expect(inView.wasUpdated, isTrue);
    expect(outOfView.wasUpdated, isFalse);
  });
}
