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
    _player = Ship(const IsoCoordinate.fromIso(0, 0), 0, getRandomId(), _map);
    _player.setShipMover(KeyboardShipMover(_player));
    _player.bulletFlightSeconds = 1.0;
    _player.setHealth(2);
    _map.addGameObject(_player);
    _createDynamicGameObjects();
  }

  void _createDynamicGameObjects() {
    _addBottle(const IsoCoordinate.fromIso(-93, -173));
    _addBottle(const IsoCoordinate.fromIso(34, 123));
    _addBottle(const IsoCoordinate.fromIso(470, 47));
    _addBottle(const IsoCoordinate.fromIso(480, 47));
    _addBottle(const IsoCoordinate.fromIso(494, 47));
    _addBottle(const IsoCoordinate.fromIso(290, -141));
    _addBottle(const IsoCoordinate.fromIso(539, 399));
    _addBottle(const IsoCoordinate.fromIso(535, 408));
    _addPathAIShip([
      const IsoCoordinate.fromIso(313, -127),
      const IsoCoordinate.fromIso(311,  -148),
      const IsoCoordinate.fromIso(296, -148)
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(102, 137),
      const IsoCoordinate.fromIso(67, 137),
      const IsoCoordinate.fromIso(67, 116)
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(436, -13),
      const IsoCoordinate.fromIso(436, -113),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(468, -113),
      const IsoCoordinate.fromIso(468, -22),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(506, 79),
      const IsoCoordinate.fromIso(530, 90),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(511, 37),
      const IsoCoordinate.fromIso(494, 37),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(505, 399),
      const IsoCoordinate.fromIso(468, 399),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(405, 410),
      const IsoCoordinate.fromIso(405, 345),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(422, 410),
      const IsoCoordinate.fromIso(422, 345),
    ]);
    _addPathAIShip([
      const IsoCoordinate.fromIso(238, 372),
      const IsoCoordinate.fromIso(272, 289),
      const IsoCoordinate.fromIso(353, 234),
    ]);
    _addBasicAIShip(const IsoCoordinate.fromIso(499, 19));
    _addBasicAIShip(const IsoCoordinate.fromIso(546, 34));
    _addBasicAIShip(const IsoCoordinate.fromIso(480, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(492, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(513, 224));
    _addBasicAIShip(const IsoCoordinate.fromIso(704, 75));
  }

  void _addPathAIShip(List<IsoCoordinate> path) {
    var aiShip = FollowPathAIShip(path.first, 0,
        getRandomId(), _map, _player, path);
    _map.addGameObject(aiShip);
  }

  void _addBasicAIShip(IsoCoordinate isoCoordinate) {
    var aiShip = BasicAIShip(
        isoCoordinate, 0, getRandomId(), _map, _player);
    _map.addGameObject(aiShip);
  }

  void _addBottle(IsoCoordinate isoCoordinate) {
    var bottle = Bottle(isoCoordinate, 0, getRandomId());
    _map.addGameObject(bottle);
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

  void reset() {
    setupNewGame(_camera.aspectRatio);
  }

  @override
  GameState getGameState() {
    if (_player.destroy == true) {
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
    _player.shipMover = JoyStickShipMover(_player);
  }

  void useKeyboard() {
    _player.shipMover = KeyboardShipMover(_player);
  }

  void addBottleButton() {
    _addBottle(_camera.center + const IsoCoordinate(20, 20));
  }

  int getHealth() {
    return _player.health;
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
}
