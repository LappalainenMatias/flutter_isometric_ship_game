import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/game.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/map/map.dart';
import '../../camera/camera.dart';
import '../../map/region/region.dart';
import '../game_object.dart';

/// Handles that dynamic game objects are in the correct region. This is
/// important so that the painter's algorithm works.
class DynamicGameObjectManager {
  final Map<GameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  /// Updates the regions of all dynamic game objects.
  void update() {
    for (GameObject gameObject in _gameObjectToRegion.keys) {
      var currentRegion = _gameObjectToRegion[gameObject]!;
      var newRegion =
          _map.getRegion(gameObject.getIsoCoordinate(), _camera.getLOD());
      if (currentRegion != newRegion) {
        currentRegion.removeDynamicGameObject(gameObject);
        newRegion.addDynamicGameObject(gameObject);
        _gameObjectToRegion[gameObject] = newRegion;
      }
    }
  }

  void addDynamicGameObject(GameObject gameObject) {
    var region =
        _map.getRegion(gameObject.getIsoCoordinate(), _camera.getLOD());
    region.addDynamicGameObject(gameObject);
    _gameObjectToRegion[gameObject] = region;
  }

  Region regionOf(GameObject gameObject) {
    return _gameObjectToRegion[gameObject]!;
  }
}
