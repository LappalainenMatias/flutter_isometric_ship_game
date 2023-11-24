import 'dart:collection';
import 'dart:typed_data';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/game_objects/dynamic/gold_coin.dart';
import 'package:anki/movement/joystick_player_mover.dart';
import 'package:anki/online/multiplayer.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'camera/camera.dart';
import 'game_objects/dynamic/bird.dart';
import 'game_objects/dynamic/missile.dart';
import 'game_objects/game_object.dart';
import 'map/map.dart';
import 'movement/keyboard_player_mover.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  final Camera _camera = Camera();
  late final GameMap _map;
  late final DynamicGameObjectManager _dynamicGameObjectManager;
  late final KeyboardPlayerMover? _keyboardPlayerMover;
  late final JoyStickPlayerMover? _joyStickPlayerMover;
  final player = MultiplayerGameObject(const IsoCoordinate(0, 0), 0);
  int _amountOfGameObjects = 0;
  int _amountOfGameObjectsRendered = 0;

  Game({bool isMultiplayer = false}) {
    player.addCollisionAction(CollisionActionType.collectGoldCoin);
    _map = GameMap(_camera);
    _dynamicGameObjectManager = DynamicGameObjectManager(_map, _camera);
    _dynamicGameObjectManager.addDynamicGameObject(player);
    _keyboardPlayerMover = KeyboardPlayerMover(player);
    _joyStickPlayerMover = JoyStickPlayerMover(player);
    //if (isMultiplayer) {
    //  _dynamicGameObjectManager.addMultiplayer(Multiplayer(player));
    //}
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
        _dynamicGameObjectManager.canMove(player, nextCoordinate);
    var canMoveHalfStep =
        _dynamicGameObjectManager.canMove(player, halfNextCoordinate);
    if (canMoveFullStep && canMoveHalfStep) {
      _keyboardPlayerMover?.move(dt);
      _joyStickPlayerMover?.move(dt);
      _camera.center = player.getIsoCoordinate();
    }
  }

  void updateDynamicGameObjects(double dt) {
    _dynamicGameObjectManager.update(dt);
  }

  void shootMissile(IsoCoordinate target) {
    var shooter = player;
    var missile = Missile(player.getIsoCoordinate(), player.elevation, 0.4);
    var skipCollisions = HashSet<GameObject>()..add(shooter);
    missile.collisionAction = CollisionAction(
        [CollisionActionType.destroyItself, CollisionActionType.causeDamage],
        missile,
        skipCollisions);
    var unitVectorFromPlayerToTarget =
        (target - player.isoCoordinate).toUnitVector();
    missile.addProjectile(Projectile(unitVectorFromPlayerToTarget));
    _dynamicGameObjectManager.addDynamicGameObject(missile);
  }

  void addBird() {
    var bird =
        Bird(_camera.center, 10, Flying(const IsoCoordinate(50, 50), 10, 0.5));
    _dynamicGameObjectManager.addDynamicGameObject(bird);
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
    var coin = GoldCoin(coordinate, 0);
    _dynamicGameObjectManager.addDynamicGameObject(coin);
  }

  void updateMultiplayerGameObjects(List<MultiplayerGameObject> gameObjects) {
    for (var gameObject in gameObjects) {
      if (gameObject.id == player.id) continue;
      _dynamicGameObjectManager.addMultiplayerGameObjects(gameObject);
    }
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
