import 'package:anki/foundation/map/map.dart';
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
    _addBottle(const IsoCoordinate.fromIso(-93, -173));
    _addBottle(const IsoCoordinate.fromIso(34, 123));
    _addBottle(const IsoCoordinate.fromIso(470, 47));
    _addBottle(const IsoCoordinate.fromIso(480, 47));
    _addBottle(const IsoCoordinate.fromIso(494, 47));
    _addBottle(const IsoCoordinate.fromIso(290, -141));
    _addBottle(const IsoCoordinate.fromIso(539, 399));
    _addBottle(const IsoCoordinate.fromIso(535, 408));
    _addPathAIShip([
      const IsoCoordinate.fromIso(313, -127),
      const IsoCoordinate.fromIso(311,  -148),
      const IsoCoordinate.fromIso(296, -148)
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(102, 137),
      const IsoCoordinate.fromIso(67, 137),
      const IsoCoordinate.fromIso(67, 116)
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(436, -13),
      const IsoCoordinate.fromIso(436, -113),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(468, -113),
      const IsoCoordinate.fromIso(468, -22),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(506, 79),
      const IsoCoordinate.fromIso(530, 90),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(511, 37),
      const IsoCoordinate.fromIso(494, 37),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(505, 399),
      const IsoCoordinate.fromIso(468, 399),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(405, 410),
      const IsoCoordinate.fromIso(405, 345),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(422, 410),
      const IsoCoordinate.fromIso(422, 345),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(238, 372),
      const IsoCoordinate.fromIso(272, 289),
      const IsoCoordinate.fromIso(353, 234),
    ]);
    _addBasicAIShip(const IsoCoordinate.fromIso(499, 19));
    _addBasicAIShip(const IsoCoordinate.fromIso(546, 34));
    _addBasicAIShip(const IsoCoordinate.fromIso(480, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(492, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(513, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(704, 75));
  }

  void _addPathAIShip(List<IsoCoordinate> path) {
    var aiShip = FollowPathAIShip(path.first, 0,
        getRandomId(), _map, _player, path);
    _map.addGameObject(aiShip);
  }

  void _addBasicAIShip(IsoCoordinate isoCoordinate) {
    var aiShip = BasicAIShip(
        isoCoordinate, 0, getRandomId(), _map, _player);
    _map.addGameObject(aiShip);
  }

  void _addBottle(IsoCoordinate isoCoordinate) {
    var bottle = Bottle(isoCoordinate, 0, getRandomId());
    _map.addGameObject(bottle);
  }
}
