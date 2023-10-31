import 'package:anki/map/map.dart';
import '../../camera/camera.dart';
import '../../collision/collision_detector.dart';
import '../../coordinates/coordinate_utils.dart';
import '../../online/multiplayer.dart';
import '../../region/region.dart';
import '../game_object.dart';

/// Handles that dynamic game objects are part of the correct region.
/// Updates dynamic game object which are in the camera's view.
/// Adds multip
class DynamicGameObjectManager {
  Multiplayer? _multiplayer;
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  void addMultiplayer(Multiplayer multiplayer) {
    _multiplayer = multiplayer;
  }

  /// Does the following:
  /// 1. Moves game objects to correct regions
  /// 2. Updates game objects
  /// 3. Checks if collisions exist and executes collision actions
  void update() {
    if (_multiplayer != null) {
      _multiplayer!.update();
      _findNewMultiplayerGameObjects();
    }
    _updateRegions();
    _updateGameObjects();
    _checkCollisions();
  }

  void _updateGameObjects() {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (!isInView(gameObject.getIsoCoordinate(), _camera)) {
        continue;
      }
      gameObject.update();
    }
  }

  void _updateRegions() {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (!isInView(gameObject.getIsoCoordinate(), _camera)) {
        continue;
      }
      var currentRegion = _gameObjectToRegion[gameObject]!;
      var newRegion = _map.getRegion(gameObject.getIsoCoordinate());
      if (currentRegion != newRegion) {
        currentRegion.removeDynamicGameObject(gameObject);
        newRegion.addDynamicGameObject(gameObject);
        _gameObjectToRegion[gameObject] = newRegion;
      }
    }
  }

  void _checkCollisions() {
    for (var dynamicGameObject in _gameObjectToRegion.keys) {
      if (!isInView(dynamicGameObject.getIsoCoordinate(), _camera)) {
        continue;
      }
      var collisions = findCollisions(
          _gameObjectToRegion[dynamicGameObject]!.getStaticGameObjects(),
          dynamicGameObject);
      if (collisions.isNotEmpty) {
        for (var collisionAction in dynamicGameObject.getCollisionActions()) {
          collisionAction.execute(collisions);
        }
      }
    }
  }

  void _findNewMultiplayerGameObjects() {
    for (var gameObject in _multiplayer!.getMultiplayerGameObjects()) {
      addDynamicGameObject(gameObject);
    }
  }

  void addDynamicGameObject(DynamicGameObject gameObject) {
    if (_gameObjectToRegion.containsKey(gameObject)) {
      return;
    }
    var region = _map.getRegion(gameObject.getIsoCoordinate());
    region.addDynamicGameObject(gameObject);
    _gameObjectToRegion[gameObject] = region;
  }

  Region regionOf(GameObject gameObject) {
    return _gameObjectToRegion[gameObject]!;
  }
}
