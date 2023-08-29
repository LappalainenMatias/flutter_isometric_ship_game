import 'dart:ui' as ui;
import 'package:anki/map/region/region_creation_stack.dart';
import 'package:anki/map/region/visible_regions.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/region/region.dart';
import 'dart:math';
import 'package:anki/map/region/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import '../../camera/camera.dart';
import '../../camera/level_of_detail.dart';
import '../../constants.dart';
import '../../dto/map_dto.dart';
import '../../game_objects/dynamic/player/player.dart';
import '../../game_objects/game_object.dart';
import '../../coordinates/coordinate_utils.dart';

class RegionManager {
  final RegionCreator _regionCreator = RegionCreator();
  final Map<Point<int>, Region> _regions = {};
  late final VisibleRegions _visibleRegions;
  late final RegionCreationQueue _regionCreationQueue;
  bool _isCreatingRegion = false;

  RegionManager(Camera camera) {
    _visibleRegions = VisibleRegions(camera, this);
    _regionCreationQueue = RegionCreationQueue(camera);
  }

  MapDTO getVerticesInView(LevelOfDetail lod) {
    List<Region> regions = _visibleRegions.getVisibleRegionsInDrawingOrder();
    List<ui.Vertices> aboveWater = [];
    List<ui.Vertices> underWater = [];
    int verticesCount = 0;

    /// Todo test how much time this adding takes because this is run every frame
    for (Region region in regions) {
      var verticeData = region.getVertices(lod);
      if (verticeData["aboveWater"] != null) {
        aboveWater.add(verticeData["aboveWater"]!);
      }
      if (verticeData["underWater"] != null) {
        underWater.add(verticeData["underWater"]!);
      }
      verticesCount += region.getVerticesCount(lod);
    }
    return MapDTO(
      underWater: underWater,
      aboveWater: aboveWater,
      verticesCount: verticesCount,
    );
  }

  Region getRegion(IsoCoordinate coordinate, LevelOfDetail minLOD) {
    Point<int> point = isoCoordinateToRegionPoint(coordinate);
    if (_regionDoesNotExist(point)) {
      if (_tooManyRegionsExist()) {
        /// todo We could reduce the level of detail instead of removing the regions
        _removeFarawayRegions(point);
      }
      _regions[point] = Region(regionPointToIsoCoordinate(point), {});
    }

    Region region = _regions[point]!;

    if (!region.hasLevelOfDetail(minLOD)) {
      RegionBuildRule rule = RegionBuildRule(
        isoCoordinateToRegionPoint(region.bottomCoordinate),
        minLOD,
      );
      _regionCreationQueue.add(rule);
    }

    return region;
  }

  bool _regionDoesNotExist(Point<int> point) {
    return !_regions.containsKey(point);
  }

  bool _tooManyRegionsExist() {
    return _regions.length > maxRegionCount;
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 60 || (key.y - point.y).abs() > 60) {
        _regions.remove(key);
      }
    }
  }

  void _addLevelOfDetailToRegion(Region region, LevelOfDetail lod) {
    _isCreatingRegion = true;
    if (kIsWeb) {
      _webAddGameObjects(region, lod);
    } else {
      _otherPlatformsAddGameObjects(region, lod);
    }
  }

  /// Creates the game objects concurrently
  void _webAddGameObjects(Region region, LevelOfDetail minLOD) async {
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.bottomCoordinate);
    var result = await JsIsolatedWorker().run(
      functionName: 'jsregionworker',
      arguments: [
        regionSideWidth,
        regionSideWidth,
        regionCoordinate.x * regionSideWidth,
        regionCoordinate.y * regionSideWidth,
        minLOD.index,
      ],
    );
    Map<LevelOfDetail, List<GameObject>> gameObjectsByLOD = {};
    List levelsOfDetail = result[0];
    List encodedGameObjectsByLOD = result[1];
    for (int i = 0; i < levelsOfDetail.length; i++) {
      List<GameObject> gameObjects = [];
      for (List encoded in encodedGameObjectsByLOD[i]) {
        gameObjects.add(GameObject.gameObjectFromList(encoded));
      }
      gameObjectsByLOD[LevelOfDetail.values[levelsOfDetail[i]]] = gameObjects;
    }
    for (LevelOfDetail lod in gameObjectsByLOD.keys) {
      if (!region.hasLevelOfDetail(lod)) {
        region.addNewLevelOfDetail(gameObjectsByLOD[lod]!, lod);
      }
    }
    _isCreatingRegion = false;
  }

  /// TODO Add concurrency support
  void _otherPlatformsAddGameObjects(Region region, LevelOfDetail lod) {
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.bottomCoordinate);

    RegionDTO regionDTO = _regionCreator.create(
      region.bottomCoordinate,
      regionSideWidth,
      regionSideWidth,
      regionCoordinate.x * regionSideWidth,
      regionCoordinate.y * regionSideWidth,
      lod,
    );

    for (LevelOfDetail lod in regionDTO.gameObjectsByLOD.keys) {
      if (!region.hasLevelOfDetail(lod)) {
        region.addNewLevelOfDetail(regionDTO.gameObjectsByLOD[lod]!, lod);
      }
    }
    _isCreatingRegion = false;
  }

  int visibleRegionSize() {
    return _visibleRegions.visibleRegionSize();
  }

  void updateVisibleRegions() {
    _visibleRegions.updateVisibleRegions();
  }

  void createNewRegion() {
    if (_isCreatingRegion) return;

    RegionBuildRule? rule = _regionCreationQueue.next();
    if (rule == null) return;

    _addLevelOfDetailToRegion(
      _regions[rule.coordinate]!,
      rule.lod,
    );
  }
}
