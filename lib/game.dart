import 'dart:ui' as ui;
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/region/region_creation/concurrent_region_creator.dart';
import 'package:flutter/cupertino.dart';
import 'camera/camera.dart';
import 'camera/level_of_detail.dart';
import 'dto/map_dto.dart';
import 'map/map.dart';
import 'map/region/region.dart';
import 'map/region/region_creation_queue.dart';
import 'map/region/visible_regions_handler.dart';

/// Todo this is a changenotifier which does not notify anything
class Game extends ChangeNotifier {
  final Camera _camera = Camera();
  late final GameMap _map;
  late final VisibleRegionsHandler _visibleRegions;
  late final RegionCreationQueue _regionCreationQueue;
  late final ConcurrentRegionCreator _concurrentRegionCreator;
  int _verticesCount = 0;

  Game() {
    _regionCreationQueue = RegionCreationQueueImpl();
    _map = GameMap(_regionCreationQueue);
    _visibleRegions = VisibleRegionsHandlerImpl(_camera, _map);
    _concurrentRegionCreator = ConcurrentRegionCreator();
  }

  MapDTO getVerticesInView([LevelOfDetail? levelOfDetail]) {
    List<Region> regions = _visibleRegions.getVisibleRegionsInDrawingOrder();
    List<ui.Vertices> aboveWater = [];
    List<ui.Vertices> underWater = [];
    int verticesCount = 0;

    /// Todo test how much time this adding takes because this is run every frame
    for (Region region in regions) {
      if (region.isEmpty()) {
        continue;
      }
      var verticeData = region.getVertices();
      if (verticeData["aboveWater"] != null) {
        aboveWater.add(verticeData["aboveWater"]!);
      }
      if (verticeData["underWater"] != null) {
        underWater.add(verticeData["underWater"]!);
      }
      verticesCount += region.getVerticesCount();
    }
    _verticesCount = verticesCount;
    return MapDTO(
      underWater: underWater,
      aboveWater: aboveWater,
      verticesCount: verticesCount,
    );
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

  void createNewRegion() {
    if (_concurrentRegionCreator.isRunning) return;
    RegionBuildRule? rule = _regionCreationQueue.next();
    if (rule != null) {
      var region = _map.getRegionFromIsoCoordinate(rule.isoCoordinate, rule.lod);
      _concurrentRegionCreator.create(region);
    }
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
