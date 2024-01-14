import 'package:anki/foundation/map/map.dart';
import 'package:anki/game_specific/game_object/golden_anchor.dart';
import 'package:anki/game_specific/movement/joystick_ship_mover.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/utils/random_id.dart';
import '../game_object/ai_ship.dart';
import '../game_object/bottle.dart';
import '../game_object/ship.dart';

class Level {
  final GameMap _map;
  final Ship _player;

  Level(this._map, this._player);

  void setup() {
    _addBasicAIShip(const IsoCoordinate.fromIso(-361, -214));
    _addBasicAIShip(const IsoCoordinate.fromIso(-251, -239));
    _addBasicAIShip(const IsoCoordinate.fromIso(463, -153));
    _addBasicAIShip(const IsoCoordinate.fromIso(950, -215));
    _addBasicAIShip(const IsoCoordinate.fromIso(861, -165));
    _addBottle(const IsoCoordinate.fromIso(-324, -385));
    _addBottle(const IsoCoordinate.fromIso(-271, -290));
    _addBottle(const IsoCoordinate.fromIso(-192, -389));
    _addBottle(const IsoCoordinate.fromIso(-185, -395));
    _addBottle(const IsoCoordinate.fromIso(-180, -386));
    _addBottle(const IsoCoordinate.fromIso(865, -493));
    _addBottle(const IsoCoordinate.fromIso(876, -483));
    _addBottle(const IsoCoordinate.fromIso(988, -192));
    _addBottle(const IsoCoordinate.fromIso(1005, -181));
    _addBottle(const IsoCoordinate.fromIso(1005, -171));
    _addBottle(const IsoCoordinate.fromIso(980, -174));
    _addBottle(const IsoCoordinate.fromIso(834, 258));
    _addBottle(const IsoCoordinate.fromIso(856, 254));
    _addBottle(const IsoCoordinate.fromIso(45, 500));
    _addBottle(const IsoCoordinate.fromIso(38, 497));
    _addBottle(const IsoCoordinate.fromIso(-285, 472));
    _addBottle(const IsoCoordinate.fromIso(-342, 231));
    _addPathAIShip([
      const IsoCoordinate.fromIso(-225, -393),
      const IsoCoordinate.fromIso(-191, -417),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(-220, -436),
      const IsoCoordinate.fromIso(-271, -450),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(-265, -341),
      const IsoCoordinate.fromIso(-314, -343),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(549, -454),
      const IsoCoordinate.fromIso(628, -452),
      const IsoCoordinate.fromIso(656, -398),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(730, -453),
      const IsoCoordinate.fromIso(724, -410),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(834, -472),
      const IsoCoordinate.fromIso(724, -410),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(834, -472),
      const IsoCoordinate.fromIso(832, -490),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(827, -451),
      const IsoCoordinate.fromIso(854, -462),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(648, -283),
      const IsoCoordinate.fromIso(620, -248),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(898, -214),
      const IsoCoordinate.fromIso(849, -222),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(322, 488),
      const IsoCoordinate.fromIso(414, 488),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(326, 455),
      const IsoCoordinate.fromIso(326, 444),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(313, 409),
      const IsoCoordinate.fromIso(298, 396),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(225, 452),
      const IsoCoordinate.fromIso(222, 443),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(167, 380),
      const IsoCoordinate.fromIso(167, 394),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(116, 428),
      const IsoCoordinate.fromIso(116, 416),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(-119, 234),
      const IsoCoordinate.fromIso(-257, 314),
    ]);
    _addGiantPathAIShip([
      const IsoCoordinate.fromIso(-404, -426),
      const IsoCoordinate.fromIso(-380, -459),
      const IsoCoordinate.fromIso(-365, -428),
      const IsoCoordinate.fromIso(-314, -478),
    ]);
    _addGiantPathAIShip([
      const IsoCoordinate.fromIso(715, -520),
      const IsoCoordinate.fromIso(658, -536),
      const IsoCoordinate.fromIso(716, -571),
    ]);
    _addGiantPathAIShip([
      const IsoCoordinate.fromIso(775, 303),
      const IsoCoordinate.fromIso(754, 174),
      const IsoCoordinate.fromIso(787, 194),
    ]);
    _addGiantPathAIShip([
      const IsoCoordinate.fromIso(515, 135),
      const IsoCoordinate.fromIso(598, 81),
      const IsoCoordinate.fromIso(598, 125),
      const IsoCoordinate.fromIso(500, 150),
    ]);
    _addSuperGiantPathAIShip([
      const IsoCoordinate.fromIso(-5, 472),
      const IsoCoordinate.fromIso(-78, 431),
      const IsoCoordinate.fromIso(-80, 368),
      const IsoCoordinate.fromIso(-56, 293),
      const IsoCoordinate.fromIso(43, 322),
      const IsoCoordinate.fromIso(34, 390),
    ]);
    _addAnchor(const IsoCoordinate.fromIso(-439, -472));
    _addAnchor(const IsoCoordinate.fromIso(816, -590));
    _addAnchor(const IsoCoordinate.fromIso(876, 342));
    _addAnchor(const IsoCoordinate.fromIso(494, 464));
  }

  void _addPathAIShip(List<IsoCoordinate> path) {
    var aiShip =
        FollowPathAIShip(path.first, 0, getRandomId(), _map, _player, path);
    _map.addGameObject(aiShip);
  }

  void _addBasicAIShip(IsoCoordinate isoCoordinate) {
    var aiShip = BasicAIShip(isoCoordinate, 0, getRandomId(), _map, _player);
    _map.addGameObject(aiShip);
  }

  void _addGiantPathAIShip(List<IsoCoordinate> path) {
    var aiShip =
        FollowPathAIShip(path.first, 0, getRandomId(), _map, _player, path)
          ..width = 3.0
          ..setHealth(3)
          ..shootingSpeedMS = 300;
    _map.addGameObject(aiShip);
  }

  void _addSuperGiantPathAIShip(List<IsoCoordinate> path) {
    var aiShip =
    FollowPathAIShip(path.first, 0, getRandomId(), _map, _player, path)
      ..width = 5.0
      ..setHealth(6)
      ..shootingSpeedMS = 500;
    if (aiShip.shipMover is JoyStickShipMover) {
      (aiShip.shipMover as JoyStickShipMover).maxMovementSpeed = 25;
    }
    _map.addGameObject(aiShip);
  }

  void _addBottle(IsoCoordinate isoCoordinate) {
    var bottle = Bottle(isoCoordinate, 0, getRandomId());
    _map.addGameObject(bottle);
  }

  void _addAnchor(IsoCoordinate isoCoordinate) {
    var anchor = GoldenAnchor(isoCoordinate, 0, getRandomId());
    _map.addGameObject(anchor);
  }
}
