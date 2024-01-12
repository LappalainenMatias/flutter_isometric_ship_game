import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/game_specific/game_object/ai_ship.dart';
import '../coordinates/iso_coordinate.dart';
import '../region/region.dart';

abstract class GameMap {
  /// Always returns a region. If the region does not exist, we return a new empty region.
  Region getRegion(IsoCoordinate isoCoordinate);
  void addGameObject(GameObject gameObject);
  void removeGameObject(GameObject gameObject);
  void update(double dt);
  /// Tries to move the game object to the next coordinate.
  /// If the game object is not able to move (collision etc.), we return false.
  bool move(DynamicGameObject dynamicGameObject, IsoCoordinate nextCoordinate);
}
