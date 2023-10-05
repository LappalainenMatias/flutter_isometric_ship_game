import 'dart:ui' as ui;
import 'package:anki/collision/collision_detector.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/dynamic/dynamic_game_object_manager.dart';
import 'package:anki/game_objects/dynamic/player.dart';
import 'package:anki/map/region/region_creation/concurrent_region_creator.dart';
import 'package:flutter/cupertino.dart';
import 'camera/camera.dart';
import 'camera/level_of_detail.dart';
import 'map/map.dart';
import 'map/region/region_creation_queue.dart';
import 'map/region/visible_regions_handler.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  final Camera _camera = Camera();
  final Player _player = Player(const IsoCoordinate(0, 0), 0);
  late final GameMap _map;
  late final VisibleRegionsHandler _visibleRegions;
  late final RegionCreationQueue _regionCreationQueue;
  late final ConcurrentRegionCreator _concurrentRegionCreator;
  late final DynamicGameObjectManager _dynamicGameObjectManager;
  int _verticesCount = 0;

  Game() {
    _regionCreationQueue = RegionCreationQueueImpl();
    _map = GameMap(_regionCreationQueue);
    _visibleRegions = VisibleRegionsHandlerImpl(_camera, _map);
    _concurrentRegionCreator = ConcurrentRegionCreator();
    _dynamicGameObjectManager = DynamicGameObjectManager(_map, _camera);
    _dynamicGameObjectManager.addDynamicGameObject(_player);
  }

  ({List<ui.Vertices> underWater, List<ui.Vertices> aboveWater})
      getVerticesInView([LevelOfDetail? levelOfDetail]) {
    List<ui.Vertices> aboveWater = [];
    List<ui.Vertices> underWater = [];
    _verticesCount = 0;

    _visibleRegions
        .getVisibleRegionsInDrawingOrder()
        .where((region) => !region.isEmpty())
        .forEach((region) {
      var verticeData = region.getVertices();
      if (verticeData.aboveWater != null) {
        aboveWater.add(verticeData.aboveWater!);
      }
      if (verticeData.underWater != null) {
        underWater.add(verticeData.underWater!);
      }
      _verticesCount += region.getVerticesCount();
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

  LevelOfDetail getLOD() {
    return _camera.getLOD();
  }

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
      var region = _map.getRegion(next.regionCoordinate, next.lod);
      _concurrentRegionCreator.addGameObjects(region);
    }
  }

  void movePlayer(double joyStickX, double joyStickY) {
    _player.move(joyStickX, joyStickY);
    _camera.center = _player.getIsoCoordinate();
    var isColliding = findCollisions(
            _dynamicGameObjectManager.regionOf(_player).getAllGameObjects(),
            _player)
        .isNotEmpty;
    _player.isColliding = isColliding;
  }

  void updateDynamicGameObjectRegions() {
    _dynamicGameObjectManager.update();
  }

  /// For debugging
  List<IsoCoordinate> getSprilalOfSearchedRegions() {
    return _visibleRegions.visualizeSpriral();
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

  int get verticesCount => _verticesCount;
}
