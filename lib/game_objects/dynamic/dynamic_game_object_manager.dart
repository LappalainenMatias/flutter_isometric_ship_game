import 'package:anki/map/map.dart';
import '../../region/region.dart';
import '../game_object.dart';

/// Handles that dynamic game objects are part of the correct region.
/// Updates dynamic game object drawing data.
/// This is important so that the painter's algorithm works.
class DynamicGameObjectManager {
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;

  DynamicGameObjectManager(this._map);

  /// Moves game objects to correct regions
  /// Updates dynamic game object drawing data
  void update() {
    for (var gameObject in _gameObjectToRegion.keys) {
      gameObject.update();
      var currentRegion = _gameObjectToRegion[gameObject]!;
      var newRegion = _map.getRegion(gameObject.getIsoCoordinate());
      if (currentRegion != newRegion) {
        currentRegion.removeDynamicGameObject(gameObject);
        newRegion.addDynamicGameObject(gameObject);
        _gameObjectToRegion[gameObject] = newRegion;
      }
    }
  }

  void addDynamicGameObject(DynamicGameObject gameObject) {
    var region = _map.getRegion(gameObject.getIsoCoordinate());
    region.addDynamicGameObject(gameObject);
    _gameObjectToRegion[gameObject] = region;
  }

  Region regionOf(GameObject gameObject) {
    return _gameObjectToRegion[gameObject]!;
  }
}
