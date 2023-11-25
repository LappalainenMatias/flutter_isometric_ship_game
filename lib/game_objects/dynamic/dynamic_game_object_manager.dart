import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/map/map.dart';
import 'package:anki/online/online.dart';
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
  //Multiplayer? _multiplayer;
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  /// Todo refactor
  bool canMove(Player player, IsoCoordinate newIsoCoordinate) {
    /// Save old coordinate and move player
    var old = player.isoCoordinate.copy();
    player.isoCoordinate = newIsoCoordinate;
    _updateRegion(player);

    /// Find all possible collisions regions
    var center = regionOf(player);
    var below = _map.getRegion(newIsoCoordinate - IsoCoordinate.fromIso(0, 5));
    var above = _map.getRegion(newIsoCoordinate + IsoCoordinate.fromIso(0, 5));
    var left = _map.getRegion(newIsoCoordinate - IsoCoordinate.fromIso(5, 0));
    var right = _map.getRegion(newIsoCoordinate + IsoCoordinate.fromIso(5, 0));

    /// Check collisions
    var collisions = findCollisions(center.getAllGameObjects(), player);
    collisions.addAll(findCollisions(below.getAllGameObjects(), player));
    collisions.addAll(findCollisions(above.getAllGameObjects(), player));
    collisions.addAll(findCollisions(left.getAllGameObjects(), player));
    collisions.addAll(findCollisions(right.getAllGameObjects(), player));

    /// Move player back to old coordinate
    player.isoCoordinate = old;
    _updateRegion(player);
    return collisions.isEmpty;
  }

  //void addMultiplayer(Multiplayer multiplayer) {
  //  _multiplayer = multiplayer;
  //}

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
        region.removeDynamicGameObject(gameObject);
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
      currentRegion.removeDynamicGameObject(gameObject);
      newRegion.addDynamicGameObject(gameObject);
      _gameObjectToRegion[gameObject] = newRegion;
    }
  }

  void _checkCollisions() {
    for (var dynamicGameObject in _gameObjectToRegion.keys) {
      var collisionAction = dynamicGameObject.getCollisionAction();
      if (collisionAction == null) {
        continue;
      }
      var collisions = findCollisions(
          _gameObjectToRegion[dynamicGameObject]!.getAllGameObjects(),
          dynamicGameObject);
      if (collisions.isNotEmpty) {
        collisionAction.execute(collisions);
      }
    }
  }

  void addMultiplayerGameObjects(MultiplayerGameObject newMP) {
    for (var go in _gameObjectToRegion.keys) {
      if (go is MultiplayerGameObject && go.id == newMP.id) {
        go.isoCoordinate = newMP.isoCoordinate;
        return;
      }
    }
    addDynamicGameObject(newMP);
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
