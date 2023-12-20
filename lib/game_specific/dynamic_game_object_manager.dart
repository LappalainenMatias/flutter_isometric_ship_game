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
  bool canMove(Ship ship, IsoCoordinate newIsoCoordinate) {
    /// Save old coordinate and move player
    var old = ship.isoCoordinate.copy();
    ship.isoCoordinate = newIsoCoordinate;
    _updateRegion(ship);

    /// Find all possible collisions regions
    var regions = <Region>{};
    regions.add(regionOf(ship));
    regions.add(_map.getRegion(newIsoCoordinate - IsoCoordinate.fromIso(0, 5)));
    regions.add(_map.getRegion(newIsoCoordinate + IsoCoordinate.fromIso(0, 5)));
    regions.add(_map.getRegion(newIsoCoordinate - IsoCoordinate.fromIso(5, 0)));
    regions.add(_map.getRegion(newIsoCoordinate + IsoCoordinate.fromIso(5, 0)));

    /// Find collisions
    var collisions = <GameObject>[];
    for (var region in regions) {
      collisions.addAll(findCollisions(region.getGameObjects(), ship));
    }

    /// Move player back to old coordinate
    ship.isoCoordinate = old;
    _updateRegion(ship);
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
        (region as DefaultRegion).removeDynamicGameObject(gameObject);
      }
    }
    _gameObjectToRegion.removeWhere((gameObject, value) => gameObject.destroy);
  }

  void _updateGameObjects(double dt) {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (!isInView(gameObject.getIsoCoordinate(), _camera)) {
        continue;
      }
      gameObject.update(dt);
    }
  }

  void _updateRegions() {
    for (var gameObject in _gameObjectToRegion.keys) {
      if (!isInView(gameObject.getIsoCoordinate(), _camera)) {
        continue;
      }
      _updateRegion(gameObject);
    }
  }

  void _updateRegion(DynamicGameObject gameObject) {
    var currentRegion = _gameObjectToRegion[gameObject]!;
    var newRegion = _map.getRegion(gameObject.getIsoCoordinate());
    if (currentRegion != newRegion) {
      (currentRegion as DefaultRegion).removeDynamicGameObject(gameObject);
      (newRegion as DefaultRegion).addGameObject(gameObject);
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
