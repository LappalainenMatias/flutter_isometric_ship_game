import 'dart:collection';
import 'dart:ui' as ui;
import 'package:anki/map/region/visible_regions.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region.dart';
import 'dart:math';
import 'package:anki/map/region/region_creator.dart';
import 'package:flutter/foundation.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import '../../camera/camera.dart';
import '../../camera/level_of_detail.dart';
import '../../game_objects/dynamic/player/player.dart';
import '../../game_objects/game_object.dart';
import '../../utils/map_dto.dart';

class RegionManager {
  final RegionCreator regionCreator = RegionCreator();
  final Map<Point<int>, Region> _regions = {};
  late final VisibleRegion _visibleRegion;

  /// This needs to be power of two because it makes lowering the level of detail easier.
  final int regionSideWidth = 64;

  /// Todo maybe we should create a file for constants like these
  final int _maxRegionCount = 1000000;
  final Set<Point> _creating = {};
  Region? playerRegion;

  RegionManager(Camera camera) {
    _visibleRegion = VisibleRegion(camera, this);
  }

  void updatePlayerRegion(Player player) {
    Region currentRegion =
        getRegion(player.isoCoordinate, LevelOfDetail.lod1x1);
    if (currentRegion != playerRegion) {
      if (playerRegion != null) playerRegion!.removeGameObject(player);
      playerRegion = currentRegion;
      playerRegion!.addDynamicGameObject(player);
    }
  }

  MapDTO getVertices(
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
    LevelOfDetail lod,
  ) {
    _visibleRegion.updateVisibleRegions(lod);
    List<Region> regions = _visibleRegion.getVisibleRegionsInDrawingOrder();
    List<ui.Vertices> aboveWater = [];
    List<ui.Vertices> underWater = [];
    int verticesCount = 0;
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

  Region getRegion(IsoCoordinate coordinate, LevelOfDetail lod) {
    Point<int> point = isoCoordinateToRegionPoint(coordinate);
    if (!_regionExist(point)) {
      if (_tooManyRegionsExist()) {
        /// todo We could reduce the level of detail instead of removing the regions
        _removeFarawayRegions(point);
      }
      _regions[point] = Region(_regionPointToIsoCoordinate(point), {});
    }

    if (!_regions[point]!.hasLevelOfDetail(lod)) {
      _addGameObjectsToRegion(_regions[point]!, lod);
    }

    return _regions[point]!;
  }

  /// Returns the region which the isoCoordinate is part of
  Region getRegionFromIsoCoordinate(IsoCoordinate isoCoordinate, LevelOfDetail lod) {
    Point<int> point = isoCoordinateToRegionPoint(isoCoordinate);

    if (!_regionExist(point)) {
      if (_tooManyRegionsExist()) {
        /// todo We could reduce the level of detail instead of removing the regions
        _removeFarawayRegions(point);
      }
      _regions[point] = Region(_regionPointToIsoCoordinate(point), {});
    }

    if (!_regions[point]!.hasLevelOfDetail(lod)) {
      _addGameObjectsToRegion(_regions[point]!, lod);
    }

    return _regions[point]!;
  }

  bool _regionExist(Point<int> point) {
    return _regions.containsKey(point);
  }

  bool _tooManyRegionsExist() {
    return _regions.length > _maxRegionCount;
  }

  /// Returns the region coordinate which the isoCoordinate is part of
  Point<int> isoCoordinateToRegionPoint(IsoCoordinate isoCoordinate) {
    Point isoPoint = isoCoordinate.toPoint();
    int regionX = (isoPoint.x / regionSideWidth).floor();
    int regionY = (isoPoint.y / regionSideWidth).floor();
    return Point(regionX, regionY);
  }

  IsoCoordinate coordinateToRegionBottomCoordinate(
      IsoCoordinate isoCoordinate) {
    Point<int> regionPoint = isoCoordinateToRegionPoint(isoCoordinate);
    return _regionPointToIsoCoordinate(regionPoint);
  }

  /// Region coordinate to iso coordinate
  IsoCoordinate _regionPointToIsoCoordinate(Point<int> regionCoordinate) {
    var isoCoordinate = IsoCoordinate(
      regionCoordinate.x * regionSideWidth.toDouble(),
      regionCoordinate.y * regionSideWidth.toDouble(),
    );
    return isoCoordinate;
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 60 || (key.y - point.y).abs() > 60) {
        _regions.remove(key);
      }
    }
  }

  void _addGameObjectsToRegion(Region region, LevelOfDetail lod) {
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
    if (_creating.length > 100 || _creating.contains(regionCoordinate)) {
      /// Todo Should we allow large than 1 build queue?
      return;
    }
    _creating.add(regionCoordinate);
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

    int index = 0;
    if (result[0].length != LevelOfDetail.values.length) {
      throw Exception("Wrong number of LODs");
    }

    for (var listOfEncodedObjects in result[0]) {
      List<GameObject> gameObjects = [];
      for (String encoded in listOfEncodedObjects) {
        gameObjects.add(GameObject.decode(encoded));
      }
      gameObjectsByLOD[LevelOfDetail.values[index]] = gameObjects;
      index++;
    }

    for (LevelOfDetail lod in gameObjectsByLOD.keys) {
      if (!_regions[regionCoordinate]!.hasLevelOfDetail(lod) &&
          gameObjectsByLOD[lod]!.isNotEmpty) {
        _regions[regionCoordinate]!
            .addNewLevelOfDetail(gameObjectsByLOD[lod]!, lod);
      }
    }

    _creating.remove(regionCoordinate);
  }

  /// TODO Add concurrency support
  void _otherPlatformsAddGameObjects(Region region, LevelOfDetail lod) {
    Point<int> regionCoordinate =
        isoCoordinateToRegionPoint(region.bottomCoordinate);

    RegionDTO regionDTO = regionCreator.create(
      region.bottomCoordinate,
      regionSideWidth,
      regionSideWidth,
      regionCoordinate.x * regionSideWidth,
      regionCoordinate.y * regionSideWidth,
      lod,
    );

    for (LevelOfDetail lod in regionDTO.gameObjectsByLOD.keys) {
      if (!region.hasLevelOfDetail(lod) &&
          regionDTO.gameObjectsByLOD[lod]!.isNotEmpty) {
        region.addNewLevelOfDetail(regionDTO.gameObjectsByLOD[lod]!, lod);
      }
    }
  }

  int visibleRegionSize() {
    return _visibleRegion.visibleRegionSize();
  }
}

