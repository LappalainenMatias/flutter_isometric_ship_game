import '../foundation/camera/camera.dart';
import '../foundation/collision/collision_action.dart';
import '../foundation/collision/collision_detector.dart';
import '../foundation/coordinates/coordinate_utils.dart';
import '../foundation/coordinates/iso_coordinate.dart';
import '../foundation/game_object/game_object.dart';
import '../foundation/map/map.dart';
import '../foundation/region/default_region.dart';
import '../foundation/region/region.dart';
import 'game_object/ship.dart';

/// Updates dynamic game object which are in the camera's view.
class DynamicGameObjectManager {
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  /// Todo refactor
  bool canMove(Ship ship, IsoCoordinate nextCoordinate) {
    /// Save old coordinate and move player
    var old = ship.topLeft.copy();
    ship.topLeft = nextCoordinate;
    var newRegion = _map.getRegion(nextCoordinate);

    /// Find collisions
    var regions = <Region>{newRegion};
    var collisions = <GameObject>[];
    for (var region in regions) {
      collisions.addAll(findCollisions(region.getGameObjects(), ship));
    }

    collisions.removeWhere(
        (element) => ship.skipCollisionAction.contains(element.getId()));

    /// Move player back to old coordinate
    ship.topLeft = old;
    return collisions.isEmpty;
  }

  /// Does the following:
  /// 1. Moves game objects to correct regions
  /// 2. Updates game objects
  /// 3. Checks if collisions exist and executes collision actions
  /// 4. Removes destroyed game objects
  void update(double dt) {
    _removeDestroyedGameObjects();
    _updateRegions();
    _updateGameObjects(dt);
    _checkCollisions();
  }

  void _removeDestroyedGameObjects() {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (gameObject.destroy) {
        var region = _gameObjectToRegion[gameObject]!;
        region.removeGameObject(gameObject);
      }
    }
    _gameObjectToRegion.removeWhere((gameObject, value) => gameObject.destroy);
  }

  void _updateGameObjects(double dt) {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (!isInView(gameObject.getIsoCoordinate(), _camera, 200)) {
        continue;
      }
      gameObject.update(dt);
    }
  }

  void _updateRegions() {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (isInView(gameObject.getIsoCoordinate(), _camera, 200)) {
        _updateRegion(gameObject);
      }
    }
  }

  void _updateRegion(DynamicGameObject gameObject) {
    var currentRegion = _gameObjectToRegion[gameObject]!;
    var newRegion = _map.getRegion(gameObject.getIsoCoordinate());
    if (currentRegion != newRegion) {
      currentRegion.removeGameObject(gameObject);
      newRegion.addGameObject(gameObject);
      _gameObjectToRegion[gameObject] = newRegion;
    }
  }

  void _checkCollisions() {
    for (var dgo in _gameObjectToRegion.keys) {
      if (dgo is CollisionAction) {
        var collisionAction = (dgo as CollisionAction);
        var collisions =
            findCollisions(_gameObjectToRegion[dgo]!.getGameObjects(), dgo);
        if (collisions.isNotEmpty) {
          collisionAction.execute(dgo, collisions);
        }
      }
    }
  }

  void addDynamicGameObject(DynamicGameObject gameObject) {
    if (_gameObjectToRegion.containsKey(gameObject)) {
      return;
    }
    var region = _map.getRegion(gameObject.getIsoCoordinate());
    (region as DefaultRegion).addGameObject(gameObject);
    _gameObjectToRegion[gameObject] = region;
  }

  Region regionOf(GameObject gameObject) {
    return _gameObjectToRegion[gameObject]!;
  }
}
