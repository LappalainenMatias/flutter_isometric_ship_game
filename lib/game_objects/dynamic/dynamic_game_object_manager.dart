import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/map/map.dart';
import '../../camera/camera.dart';
import '../../collision/collision_detector.dart';
import '../../coordinates/coordinate_utils.dart';
import '../../online/online_game_object_states/missile_state.dart';
import '../../online/online_game_object_states/player_state.dart';
import '../../region/region.dart';
import '../game_object.dart';
import 'missile.dart';

/// Handles that dynamic game objects are part of the correct region.
/// Updates dynamic game object which are in the camera's view.
class DynamicGameObjectManager {
  final Map<DynamicGameObject, Region> _gameObjectToRegion = {};
  final GameMap _map;
  final Camera _camera;

  DynamicGameObjectManager(this._map, this._camera);

  /// Todo refactor
  bool canMove(Player player, IsoCoordinate newIsoCoordinate) {
    return true;
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

  /// Does the following:
  /// 1. Moves game objects to correct regions
  /// 2. Updates game objects
  /// 3. Checks if collisions exist and executes collision actions
  /// 4. Removes destroyed game objects
  void update(double dt) {
    _removeDestroyedGameObjects();
    _updateRegions();
    _updateGameObjects(dt);
    //_checkCollisions();
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
    for (var dgo in _gameObjectToRegion.keys) {
      if (dgo is CollisionAction) {
        var collisionAction = (dgo as CollisionAction);
        var collisions =
            findCollisions(_gameObjectToRegion[dgo]!.getAllGameObjects(), dgo);
        if (collisions.isNotEmpty) {
          collisionAction.execute(dgo, collisions);
        }
      }
    }
  }

  void updateOnlinePlayer(PlayerState state) {
    for (var go in _gameObjectToRegion.keys) {
      if (go is Player && go.getId() == state.id) {
        go.matchState(state);
        return;
      }
    }
    /// If the player is new
    var newPlayer = Player.defaultPlayer(state.id);
    newPlayer.matchState(state);
    addDynamicGameObject(newPlayer);
  }

  void updateOnlineMissile(MissileState state) {
    for (var go in _gameObjectToRegion.keys) {
      if (go is Missile && go.getId() == state.id) {
        return;
      }
    }
    /// If the missiles is new
    var newMissile = Missile.defaultMissile(state.id);
    newMissile.matchState(state);
    addDynamicGameObject(newMissile);
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
