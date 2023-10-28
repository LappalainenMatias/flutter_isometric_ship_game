import 'dart:typed_data';
import 'package:anki/collision/collision_action.dart';
import 'package:anki/collision/collision_detector.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/missile/missile_manager.dart';
import 'package:anki/region/region_creation/concurrent_region_creator.dart';
import 'package:anki/region/region_creation_queue.dart';
import 'package:anki/region/visible_regions_handler.dart';
import 'package:flutter/cupertino.dart';
import 'camera/camera.dart';
import 'map/map.dart';
import 'missile/missile.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  final Camera _camera = Camera();
  final Player _player = Player(const IsoCoordinate(0, 0), 0);
  late final GameMap _map;
  late final VisibleRegionsHandler _visibleRegions;
  late final RegionCreationQueue _regionCreationQueue;
  late final ConcurrentRegionCreator _concurrentRegionCreator;
  late final DynamicGameObjectManager _dynamicGameObjectManager;
  late final MissileManager _missileManager;
  int _amountOfGameObjects = 0;
  int _amountOfGameObjectsRendered = 0;

  Game() {
    _regionCreationQueue = RegionCreationQueueImpl(_camera);
    _map = GameMap(_regionCreationQueue);
    _visibleRegions = VisibleRegionsHandlerImpl(_camera, _map);
    _concurrentRegionCreator = ConcurrentRegionCreator();
    _dynamicGameObjectManager = DynamicGameObjectManager(_map);
    _dynamicGameObjectManager.addDynamicGameObject(_player);
    _player.collisionAction =
        CollisionAction([CollisionActionType.moveAbove], _player);
    _missileManager = MissileManager(_map);
  }

  ({List<(Float32List rstTransformsUnderWater, Float32List rectsUnderWater, Rect cullingRect)> underWater,
  List<(Float32List rstTransformsAboveWater, Float32List rectsAboveWater, Rect cullingRect)> aboveWater})
  getAtlasData() {
    List<(Float32List rstTransformsUnderWater,
        Float32List rectsUnderWater, Rect cullingRect)> underWater = [];
    List<(Float32List rstTransformsUnderWater,
        Float32List rectsUnderWater, Rect cullingRect)> aboveWater = [];
    _amountOfGameObjects = 0;
    _amountOfGameObjectsRendered = 0;

    /// Change regions to drawable format
    _visibleRegions
        .getVisibleRegionsInDrawingOrder()
        .where((region) => !region.isEmpty())
        .forEach((region) {
      var data = region.getRstTransformsAndRects();
      Rect cullingRect = region.borders!.getRect();
      underWater.add((data.rstTransformsUnderWater, data.rectsUnderWater, cullingRect));
      aboveWater.add((data.rstTransformsAboveWater, data.rectsAboveWater, cullingRect));
      _amountOfGameObjects += region.gameObjectsLength();
      _amountOfGameObjectsRendered += region.gameObjectsVisibleLength();
    });

    /// Change missile to drawable format. Currently missile are always top of everything.
    /// Becaus of that we can just add them to the end. There is so few of them that culling is unnecessary.
    var data = _missileManager.getRstTransformsAndRects();
    underWater.add((data.rstTransformsUnderWater, data.rectsUnderWater, Rect.largest));
    aboveWater.add((data.rstTransformsAboveWater, data.rectsAboveWater, Rect.largest));

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

  void updateVisibleRegions() {
    _visibleRegions.updateVisibleRegions();
  }

  void addGameObjectsToRegion() {
    if (_concurrentRegionCreator.isRunning) return;
    AddGameObjectsTo? next = _regionCreationQueue.next();
    if (next != null) {
      var region = _map.getRegion(next.regionCoordinate);
      _concurrentRegionCreator.addGameObjects(region);
    }
  }

  void movePlayer(double joyStickX, double joyStickY) {
    _player.move(joyStickX, joyStickY);
    _camera.center = _player.getIsoCoordinate();
    var collisions = findCollisions(
        _dynamicGameObjectManager.regionOf(_player).getStaticGameObjects(),
        _player);
    _player.collisionAction?.execute(collisions);
    _player.isColliding = collisions.isNotEmpty;
  }

  void updateDynamicGameObjectRegions() {
    _dynamicGameObjectManager.update();
  }

  /// For debugging
  List<IsoCoordinate> getSprilalOfSearchedRegions() {
    return _visibleRegions.visualizeSpriral();
  }

  void updateMissiles() {
    _missileManager.update();
  }

  void shootMissile() {
    _missileManager.add(Missile(_camera.center, 100, 2));
  }
}

extension GameMapStatisticExtension on Game {
  int getRegionCount() {
    return _map.getRegionCount();
  }

  String regionCreationQueueStats() {
    return _regionCreationQueue.toString();
  }

  int amountOfVisibleRegions() {
    return _visibleRegions.visibleRegionSize();
  }

  int amountOfGameObjects() {
    return _amountOfGameObjects;
  }

  int amountOfGameObjectsRendered() {
    return _amountOfGameObjectsRendered;
  }
}
