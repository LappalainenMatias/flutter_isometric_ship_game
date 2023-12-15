import 'dart:typed_data';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/movement/joystick_player_mover.dart';
import 'package:anki/online/online_game_object_states/online_game_object_state.dart';
import 'package:anki/utils/random_id.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'camera/camera.dart';
import 'game_objects/dynamic/missile.dart';
import 'map/map.dart';
import 'movement/keyboard_player_mover.dart';
import 'online/online.dart';
import 'online/online_game_object_states/missile_state.dart';
import 'online/online_game_object_states/player_state.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  late Online _online;
  late Camera _camera;
  late GameMap _map;
  late DynamicGameObjectManager _dynamicGameObjectManager;
  late KeyboardPlayerMover? _keyboardPlayerMover;
  late JoyStickPlayerMover? _joyStickPlayerMover;
  late Player _player;
  int _amountOfGameObjects = 0;
  int _amountOfGameObjectsRendered = 0;

  Game(this._online) {
    setupNewGame();
  }

  setupNewGame() {
    _camera = Camera();
    _player = Player(const IsoCoordinate(0, 0), 0, getRandomId());
    _map = GameMap(_camera);
    _dynamicGameObjectManager = DynamicGameObjectManager(_map, _camera);
    _dynamicGameObjectManager.addDynamicGameObject(_player);
    _keyboardPlayerMover = KeyboardPlayerMover(_player);
    _joyStickPlayerMover = JoyStickPlayerMover(_player);
  }

  getDrawingData() {
    List<
        (
          Float32List rstTransformsUnderWater,
          Float32List rectsUnderWater,
          Rect cullingRect,
        )> underWater = [];
    List<
        (
          Float32List rstTransformsUnderWater,
          Float32List rectsUnderWater,
          Rect cullingRect,
        )> aboveWater = [];
    _amountOfGameObjects = 0;
    _amountOfGameObjectsRendered = 0;

    /// Change regions to drawable format
    _map
        .getVisibleRegionsInDrawingOrder()
        .where((region) => !region.isEmpty())
        .forEach((region) {
      var data = region.getRstTransformsAndRects();
      Rect cullingRect = region.borders!.getRect();
      underWater.add(
          (data.rstTransformsUnderWater, data.rectsUnderWater, cullingRect));
      aboveWater.add(
          (data.rstTransformsAboveWater, data.rectsAboveWater, cullingRect));
      _amountOfGameObjects += region.gameObjectsLength();
      _amountOfGameObjectsRendered += region.gameObjectsVisibleLength();
    });
    return (underWater: underWater, aboveWater: aboveWater);
  }

  Player getOurPlayer() {
    return _player;
  }

  void moveCamera(double joyStickX, double joyStickY) {
    _camera.move(joyStickX, joyStickY);
  }

  double get viewWidth => _camera.width();

  double get viewHeight => _camera.height();

  IsoCoordinate get viewTopLeft => _camera.topLeft;

  IsoCoordinate get viewBottomRight => _camera.bottomRight;

  IsoCoordinate get viewCenter => _camera.center;

  double get zoomLevel => _camera.zoomLevel;

  /// When the screen size changes the aspect ratio of the camera needs to be updated.
  void updateScreenAspectRatio(double ratio) {
    _camera.aspectRatio = ratio;
  }

  /// 0 is zoomed in, 1 is zoomed out.
  void setZoomLevel(double level) {
    _camera.setZoomLevel(level);
  }

  void zoomIn() {
    _camera.zoomIn();
  }

  void zoomOut() {
    _camera.zoomOut();
  }

  void updateMap() {
    _map.update();
  }

  void movePlayer(double dt) {
    /// Todo refactor
    if (_keyboardPlayerMover == null) return;
    var nextCoordinate = _keyboardPlayerMover!.nextCoordinate(dt);
    var halfNextCoordinate = _keyboardPlayerMover!.nextCoordinate(dt / 8);
    var canMoveFullStep =
        _dynamicGameObjectManager.canMove(_player, nextCoordinate);
    var canMoveHalfStep =
        _dynamicGameObjectManager.canMove(_player, halfNextCoordinate);
    if (canMoveFullStep && canMoveHalfStep) {
      _keyboardPlayerMover?.move(dt);
      _joyStickPlayerMover?.move(dt);
      _camera.center = _player.getIsoCoordinate();
    }
  }

  void updateDynamicGameObjects(double dt) {
    _dynamicGameObjectManager.update(dt);
  }

  void shootMissile(IsoCoordinate target) {
    var unitVectorFromPlayerToTarget =
        (target - _player.isoCoordinate).toUnitVector();
    var missile = Missile(
      _player.getIsoCoordinate(),
      _player.elevation,
      0.4,
      Projectile(unitVectorFromPlayerToTarget),
      getRandomId(),
    );
    missile.actionTypes = {
      CollisionActionType.destroyItself,
      CollisionActionType.causeDamage
    };
    // You cannot shoot yourself
    missile.skipCollisionAction.add(_player.getId());
    _dynamicGameObjectManager.addDynamicGameObject(missile);
    _online.addMissile(missile);
  }

  void keyDownEvent(LogicalKeyboardKey logicalKey) {
    _keyboardPlayerMover?.pressed(logicalKey);
  }

  void keyUpEvent(LogicalKeyboardKey logicalKey) {
    _keyboardPlayerMover?.unPressed(logicalKey);
  }

  void joystickEvent(double x, double y) {
    _joyStickPlayerMover?.updateJoystick(x, y);
  }

  /// x = 0.5, y = 0.5 is the center of the screen
  /// x = 0, y = 0 is the top left of the screen
  IsoCoordinate getGameCoordinate(
      double screenXPercentage, double screenYPercentage) {
    return _camera.getGameCoordinate(screenXPercentage, screenYPercentage);
  }

  void addOpponent() {
    var coordinate = _camera.center + const IsoCoordinate(20, 20);
    var opponent = Player(coordinate, 0, getRandomId());
    _dynamicGameObjectManager.addDynamicGameObject(opponent);
  }

  void updateOnlineGameObjects(List<GameObjectState> states) {
    for (var state in states) {
      if (state is PlayerState) {
        if (state.id != _player.getId()) {
          // We do not update our own player
          _dynamicGameObjectManager.updateOnlinePlayer(state);
        }
      } else if (state is MissileState) {
        _dynamicGameObjectManager.updateOnlineMissile(state);
      } else {
        throw Exception("Unknown online game object type");
      }
    }
  }

  void reset() {
    setupNewGame();
  }

  GameState getGameState() {
    if (_player.destroy == true) {
      return GameState.gameOver;
    }
    return GameState.going;
  }
}

extension GameMapStatisticExtension on Game {
  int getRegionCount() {
    return _map.getRegionCount();
  }

  String regionCreationQueueStats() {
    return _map.regionQueueStats();
  }

  int amountOfVisibleRegions() {
    return _map.getVisibleRegionsSize();
  }

  int amountOfGameObjects() {
    return _amountOfGameObjects;
  }

  int amountOfGameObjectsRendered() {
    return _amountOfGameObjectsRendered;
  }
}

enum GameState { going, gameOver }
