import 'package:anki/foundation/game_object/game_object.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/region.dart';

abstract class GameMap {
  /// Always returns a region. If the region does not exist, we return a new empty region.
  Region getRegion(IsoCoordinate isoCoordinate);
  void addGameObject(GameObject gameObject);
  void removeGameObject(GameObject gameObject);
  void update(double dt);
}
