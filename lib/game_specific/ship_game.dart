import 'package:anki/game_specific/game_object/ai_ship.dart';
import 'package:flutter/services.dart';
import '../foundation/camera/camera.dart';
import '../foundation/camera/default_camera.dart';
import '../foundation/coordinates/iso_coordinate.dart';
import '../foundation/game.dart';
import '../foundation/map/default_map.dart';
import '../foundation/region/default_region.dart';
import '../foundation/rendering_data/rendering_data.dart';
import '../foundation/utils/random_id.dart';
import 'game_object/bottle.dart';
import 'game_object/cannonball.dart';
import 'game_object/ship.dart';
import 'level/level.dart';
import 'movement/joystick_ship_mover.dart';
import 'movement/keyboard_ship_mover.dart';

class ShipGame extends Game {
  late DefaultCamera _camera;
  late DefaultGameMap _map;
  late Ship _player;
  var _amountOfGameObjectsRendered = 0;

  /// The screen aspect ratio gets updated when the screen is resized or built.
  ShipGame({double screenAspectRatio = 1.0}) {
    setupNewGame(screenAspectRatio);
  }

  setupNewGame(double aspectRatio) {
    _camera = DefaultCamera(aspectRatio: aspectRatio);
    _map = DefaultGameMap(_camera);
    _player = Ship(const IsoCoordinate.fromIso(0, 0), 0, getRandomId(), _map)
      ..setHealth(2)
      ..bulletFlightSeconds = 1.0
      ..setShipMover(KeyboardShipMover());
    _map.addGameObject(_player);
    Level(_map, _player).setup();
  }

  Ship getOurPlayer() {
    return _player;
  }

  double get viewWidth => _camera.width();

  double get viewHeight => _camera.height();

  IsoCoordinate get viewTopLeft => _camera.topLeft;

  IsoCoordinate get viewBottomRight => _camera.bottomRight;

  IsoCoordinate get viewCenter => _camera.center;

  double get zoomLevel => _camera.zoomLevel;

  void setScreenAspectRatio(double ratio) {
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

  void playerShootCannonball(IsoCoordinate target) {
    if (_player.isAbleToShoot()) {
      shootCannonball(_map, target, _player);
    }
  }

  void keyDownEvent(LogicalKeyboardKey logicalKey) {
    if (_player.shipMover is KeyboardShipMover) {
      (_player.shipMover as KeyboardShipMover).pressed(logicalKey);
    }
  }

  void keyUpEvent(LogicalKeyboardKey logicalKey) {
    if (_player.shipMover is KeyboardShipMover) {
      (_player.shipMover as KeyboardShipMover).unPressed(logicalKey);
    }
  }

  void joystickEvent(double x, double y) {
    if (_player.shipMover is JoyStickShipMover) {
      (_player.shipMover as JoyStickShipMover).setJoystick(x, y);
    }
  }

  /// x = 0.5, y = 0.5 is the center of the screen
  /// x = 0, y = 0 is the top left of the screen
  IsoCoordinate getGameCoordinate(
      double screenXPercentage, double screenYPercentage) {
    return _camera.getGameCoordinate(screenXPercentage, screenYPercentage);
  }

  void reset() {
    setupNewGame(_camera.aspectRatio);
  }

  @override
  GameState getGameState() {
    if (_player.destroy == true) {
      return GameState.gameOver;
    }
    if (_player.collectedGoldAnchors == 3) {
      return GameState.won;
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
    var underWater = <(RenderingData underWater, Rect cullingRect)>[];
    var aboveWater = <(RenderingData underWater, Rect cullingRect)>[];
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
      _amountOfGameObjectsRendered += region.gameObjectsVisibleLength();
    });
    return (underWater, aboveWater);
  }

  @override
  void update(double dt) {
    if (getGameState() == GameState.gameOver) {
      reset();
    } else {
      _map.update(dt);
      _camera.center = _player.getIsoCoordinate();
    }
  }

  void useJoystick() {
    _player.setShipMover(JoyStickShipMover());
  }

  void useKeyboard() {
    _player.setShipMover(KeyboardShipMover());
  }

  void addBottle() {
    var bottle = Bottle(
        _player.getIsoCoordinate() + const IsoCoordinate.fromIso(0, 20),
        0,
        getRandomId());
    _map.addGameObject(bottle);
  }

  void addOpponent() {
    var enemy = BasicAIShip(
      _camera.center + const IsoCoordinate(20, 20),
      0,
      getRandomId(),
      _map,
      _player,
    );
    _map.addGameObject(enemy);
  }
}

extension ShipGameStatisticExtension on ShipGame {
  int getRegionCount() {
    return _map.getRegionCount();
  }

  int regionCreationQueueStats() {
    return _map.regionQueueSize();
  }

  int amountOfVisibleRegions() {
    return _map.getVisibleRegionsSize();
  }

  int amountOfGameObjectsRendered() {
    return _amountOfGameObjectsRendered;
  }

  int shootingSpeedMS() {
    return _player.shootingSpeedMS;
  }

  double bulletFlightTime() {
    return _player.bulletFlightSeconds;
  }

  int getHealth() {
    return _player.health;
  }

  int goldAnchorsCollected() {
    return _player.collectedGoldAnchors;
  }
}
