import '../foundation/camera/camera.dart';
import '../foundation/collision/collision_detector.dart';
import '../foundation/coordinates/coordinate_utils.dart';
import '../foundation/coordinates/iso_coordinate.dart';
import '../foundation/game_object/game_object.dart';
import '../foundation/map/map.dart';
import '../foundation/region/default_region.dart';
import '../foundation/region/region.dart';

/// Todo refactor this under the map class. This should not be part of the game class
/// Todo because it is confusing that we add dynamic game object to this class and not to map.
class DynamicGameObjectManager {
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  /// Returns true if the dynamic game object is able to move into the new coordinate.
  bool isAbleToMove(
      DynamicGameObject dynamicGameObject, IsoCoordinate nextCoordinate) {
    // Save old coordinate and move the dynamic game object to the next coordinate
    var old = dynamicGameObject.getIsoCoordinate().copy();
    dynamicGameObject.setIsoCoordinate(nextCoordinate);

    // Find collisions
    var regions = <Region>{
      _map.getRegion(dynamicGameObject.getIsoCoordinate())
    }; // Todo improvement here would be to check other regions which are close to the player
    var collisions = <GameObject>[];
    for (var region in regions) {
      collisions
          .addAll(findCollisions(region.getGameObjects(), dynamicGameObject));
    }

    // Remove collisions which should be skipped
    // Todo maybe this skipping should be implemented in the collision detector
    collisions.removeWhere((element) =>
        dynamicGameObject.skipCollisionAction.contains(element.getId()));
    collisions.removeWhere((element) => element is Collectable);

    // Move player back to the old coordinate
    dynamicGameObject.setIsoCoordinate(old);
    return collisions.isEmpty;
  }

  /// Does the following:
  /// 1. Removes destroyed game objects from the game
  /// 2. Checks that dynamic game objects are part of the correct region
  /// 3. Checks if collisions exist and executes collision actions
  void update(double dt) {
    _removeDestroyedGameObjects();
    _moveGameObjectsToCorrectRegions();
    _executeCollisionActions();
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

  void _moveGameObjectsToCorrectRegions() {
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

  void _executeCollisionActions() {
    for (var dgo in _gameObjectToRegion.keys) {
      var collisions =
          findCollisions(_gameObjectToRegion[dgo]!.getGameObjects(), dgo);
      if (collisions.isNotEmpty) {
        dgo.executeCollisionAction(dgo, collisions);
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
