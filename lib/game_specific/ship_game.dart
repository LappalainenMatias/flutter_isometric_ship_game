import 'package:flutter/services.dart';
import '../foundation/camera/camera.dart';
import '../foundation/camera/default_camera.dart';
import '../foundation/collision/collision_action.dart';
import '../foundation/coordinates/iso_coordinate.dart';
import '../foundation/game.dart';
import '../foundation/map/default_map.dart';
import '../foundation/region/default_region.dart';
import '../foundation/rendering_data/rendering_data.dart';
import '../foundation/utils/random_id.dart';
import 'dynamic_game_object_manager.dart';
import 'game_object/missile.dart';
import 'game_object/ship.dart';
import 'movement/joystick_ship_mover.dart';
import 'movement/keyboard_ship_mover.dart';

/// Todo this is a changenotifier which does not notify anything
class ShipGame extends Game {
  late DefaultCamera _camera;
  late DefaultGameMap _map;
  late DynamicGameObjectManager _dynamicGameObjectManager;
  late KeyboardShipMover? _keyboardPlayerMover;
  late JoyStickShipMover? _joyStickPlayerMover;
  late Ship _ship;
  int _amountOfGameObjects = 0;
  int _amountOfGameObjectsRendered = 0;

  ShipGame() {
    setupNewGame();
  }

  setupNewGame() {
    _camera = DefaultCamera();
    _ship = Ship(const IsoCoordinate(0, 0), 0, getRandomId());
    _map = DefaultGameMap(_camera);
    _dynamicGameObjectManager = DynamicGameObjectManager(_map, _camera);
    _dynamicGameObjectManager.addDynamicGameObject(_ship);
    _keyboardPlayerMover = KeyboardShipMover(_ship);
    _joyStickPlayerMover = JoyStickShipMover(_ship);
  }

  Ship getOurPlayer() {
    return _ship;
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
        _dynamicGameObjectManager.canMove(_ship, nextCoordinate);
    var canMoveHalfStep =
        _dynamicGameObjectManager.canMove(_ship, halfNextCoordinate);
    if (canMoveFullStep && canMoveHalfStep) {
      _keyboardPlayerMover?.move(dt);
      _joyStickPlayerMover?.move(dt);
      _camera.center = _ship.getIsoCoordinate();
    }
  }

  void updateDynamicGameObjects(double dt) {
    _dynamicGameObjectManager.update(dt);
  }

  void shootMissile(IsoCoordinate target) {
    var unitVectorFromPlayerToTarget =
        (target - _ship.isoCoordinate).toUnitVector();
    var missile = Missile(
      _ship.getIsoCoordinate(),
      _ship.elevation,
      0.4,
      Projectile(unitVectorFromPlayerToTarget),
      getRandomId(),
    );
    missile.actionTypes = {
      CollisionActionType.destroyItself,
      CollisionActionType.causeDamage
    };
    // You cannot shoot yourself
    missile.skipCollisionAction.add(_ship.getId());
    _dynamicGameObjectManager.addDynamicGameObject(missile);
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
    var opponent = Ship(coordinate, 0, getRandomId());
    _dynamicGameObjectManager.addDynamicGameObject(opponent);
  }

  void reset() {
    setupNewGame();
  }

  @override
  GameState getGameState() {
    if (_ship.destroy == true) {
      return GameState.gameOver;
    }
    return GameState.going;
  }

  @override
  Camera getCamera() {
    return _camera;
  }

  @override
  (
    List<(RenderingData, Rect)> underWater,
    List<(RenderingData, Rect)> aboveWater
  ) renderingData() {
    List<(RenderingData underWater, Rect cullingRect)> underWater = [];
    List<(RenderingData aboveWater, Rect cullingRect)> aboveWater = [];
    _amountOfGameObjects = 0;
    _amountOfGameObjectsRendered = 0;

    /// Change regions to drawable format
    _map
        .getVisibleRegionsInDrawingOrder()
        .where((region) => !region.isEmpty())
        .forEach((region) {
      region = region as DefaultRegion;
      var data = region.getRenderingData();
      var rectangle = region.getRectangle();
      var cullingRect = Rect.fromLTRB(
          rectangle.left, rectangle.top, rectangle.right, rectangle.bottom);
      underWater.add((data.underWater, cullingRect));
      aboveWater.add((data.aboveWater, cullingRect));
      _amountOfGameObjects += region.gameObjectsLength();
      _amountOfGameObjectsRendered += region.gameObjectsVisibleLength();
    });
    return (underWater, aboveWater);
  }

  @override
  void update(double dt) {
    if (getGameState() == GameState.gameOver) {
      reset();
    }
    _map.update();
    updateDynamicGameObjects(dt);
    movePlayer(dt);
  }
}

extension GameMapStatisticExtension on ShipGame {
  int getRegionCount() {
    return _map.getRegionCount();
  }

  int regionCreationQueueStats() {
    return _map.regionQueueSize();
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
