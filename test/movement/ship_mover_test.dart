import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/map/default_map.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/movement/keyboard_ship_mover.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Next coordinate should not change current coordinate", () {
    var camera = DefaultCamera();
    camera.setZoomLevel(0.1);
    var gameMap = DefaultGameMap(camera);
    for (var i = 0; i < 100; i++) {
      gameMap.update(0.016);
    }
    var ship = Ship(const IsoCoordinate.fromIso(0, 0), 0, getRandomId(), gameMap);
    var ship2 = Ship(const IsoCoordinate.fromIso(0, -10), 0, getRandomId(), gameMap);
    ship.shipMover = KeyboardShipMover(ship)..pressed(LogicalKeyboardKey.keyW);
    gameMap.addGameObject(ship);
    gameMap.addGameObject(ship2);
    for (var i = 0; i < 20; i++) {
      gameMap.update(0.016);
    }
    expect(ship.collision(ship2), isFalse);
  });
}
