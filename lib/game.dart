import 'dart:typed_data';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/movement/joystick_player_mover.dart';
import 'package:anki/online/multiplayer.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'camera/camera.dart';
import 'game_objects/dynamic/bird.dart';
import 'game_objects/dynamic/missile.dart';
import 'map/map.dart';
import 'movement/keyboard_player_mover.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  final Camera _camera = Camera();
  late final GameMap _map;
  late final DynamicGameObjectManager _dynamicGameObjectManager;
  late final KeyboardPlayerMover? _keyboardPlayerMover;
  late final JoyStickPlayerMover? _joyStickPlayerMover;
  final _player = MultiplayerGameObject(1, const IsoCoordinate(0, 0), 0);
  int _amountOfGameObjects = 0;
  int _amountOfGameObjectsRendered = 0;

  Game({bool isMultiplayer = false}) {
    _map = GameMap(_camera);
    _dynamicGameObjectManager = DynamicGameObjectManager(_map, _camera);
    _dynamicGameObjectManager.addDynamicGameObject(_player);
    _keyboardPlayerMover = KeyboardPlayerMover(_player);
    _joyStickPlayerMover = JoyStickPlayerMover(_player);
    if (isMultiplayer) {
      _dynamicGameObjectManager.addMultiplayer(Multiplayer(_player));
    }
  }

  getAtlasData() {
    List< (
          Float32List rstTransformsUnderWater,
          Float32List rectsUnderWater,
          Rect cullingRect,
        )> underWater = [];
    List< (
          Float32List rstTransformsUnderWater,
          Float32List rectsUnderWater,
          Rect cullingRect,
        )> aboveWater = [];
    _amountOfGameObjects = 0;
    _amountOfGameObjectsRendered = 0;

    /// Change regions to drawable format
    _map.getVisibleRegionsInDrawingOrder()
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
    _keyboardPlayerMover?.move(dt);
    _joyStickPlayerMover?.move(dt);
    _camera.center = _player.getIsoCoordinate();
  }

  void updateDynamicGameObjects(double dt) {
    _dynamicGameObjectManager.update(dt);
  }

  void shootMissile() {
    var missile = Missile(_player.getIsoCoordinate(), _player.elevation, 0.5);
    missile.addProjectile(Projectile(const IsoCoordinate(0.1, 0.1)));
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
