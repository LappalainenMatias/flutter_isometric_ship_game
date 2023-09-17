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

  int get verticesCount => _verticesCount;

  double get viewWidth => _camera.width();

  double get viewHeight => _camera.height();

  IsoCoordinate get viewTopLeft => _camera.topLeft;

  IsoCoordinate get viewBottomRight => _camera.bottomRight;

  IsoCoordinate get viewCenter => _camera.center;

  double get zoomLevel => _camera.zoomLevel;

  int amountOfVisibleRegions() {
    return _visibleRegions.visibleRegionSize();
  }

  void updateScreenAspectRatio(double ratio) {
    _camera.aspectRatio = ratio;
  }

  void setZoomLevel(double level) {
    _camera.setZoomLevel(level);
  }

  void updateVisibleRegions() {
    _visibleRegions.updateVisibleRegions();
  }

  String regionCreationQueueStats() {
    return _regionCreationQueue.toString();
  }

  void createNewRegion() {
    if (_concurrentRegionCreator.isRunning) return;
    RegionBuildRule? rule = _regionCreationQueue.next();
    if (rule != null) {
      var region = _map.getRegionFromIsoCoordinate(rule.isoCoordinate, rule.lod);
      _concurrentRegionCreator.create(region);
    }
  }

  List<IsoCoordinate> getSprilal() {
    return _visibleRegions.visualizeSpriral();
  }
}
