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
  final Map<Point<int>, Region> _regions = {};
  late final VisibleRegion _visibleRegion;

  /// This needs to be power of two because it makes the level of detail changes easier.
  final int regionSideWidth = 32;

  /// Todo maybe we should create a file for constants like these
  final int _maxRegionCount = 4096;
  final Set<Point> _buildQueue = {};
  Region? playerRegion;

  RegionManager(Camera camera) {
    _visibleRegion = VisibleRegion(camera, this);
  }

  void updatePlayerRegion(Player player) {
    Region? currentRegion =
    getRegion(player.isoCoordinate, LevelOfDetail.maximum);
    if (currentRegion == null) return;
    if (currentRegion != playerRegion) {
      if (playerRegion != null) playerRegion!.removeGameObject(player);
      playerRegion = currentRegion;
      playerRegion!.addDynamicGameObject(player);
    }
  }

  MapDTO getVertices(IsoCoordinate topLeft,
      IsoCoordinate bottomRight,
      LevelOfDetail lod,) {
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

  /// Returns the region which the isoCoordinate is part of
  Region? getRegion(IsoCoordinate isoCoordinate, LevelOfDetail lod) {
    Point isoPoint = isoCoordinate.toPoint();
    int regionX = (isoPoint.x / regionSideWidth).floor();
    int regionY = (isoPoint.y / regionSideWidth).floor();
    Point<int> point = Point(regionX, regionY);
    if (_regions.containsKey(point)) {
      if (!_regions[point]!.hasLevelOfDetail(lod)) {
        _createRegion(regionX, regionY, lod);
      }
      return _regions[point]!;
    } else {
      if (_regions.length > _maxRegionCount) {
        _removeFarawayRegions(point);
      } else {
        _createRegion(regionX, regionY, lod);
      }
    }
    return null;
  }

  bool hasRegion(IsoCoordinate isoCoordinate) {
    Point isoPoint = isoCoordinate.toPoint();
    int regionX = (isoPoint.x / regionSideWidth).floor();
    int regionY = (isoPoint.y / regionSideWidth).floor();
    Point<int> point = Point(regionX, regionY);
    return _regions.containsKey(point);
  }

  void _removeFarawayRegions(Point<int> point) {
    for (var key in _regions.keys.toList()) {
      if ((key.x - point.x).abs() > 60 || (key.y - point.y).abs() > 60) {
        _regions.remove(key);
      }
    }
  }

  void _createRegion(int regionX, int regionY, LevelOfDetail lod) {
    if (kIsWeb) {
      _webCreateRegion(regionX, regionY, lod);
    } else {
      _otherPlatformsCreateRegion(regionX, regionY, lod);
    }
  }

  /// Creates the region concurrently
  void _webCreateRegion(int regionX, int regionY, LevelOfDetail minLOD) async {
    if (_buildQueue.isNotEmpty ||
        _buildQueue.contains(Point(regionX, regionY))) {
      /// Todo Should we allow large than 1 build queue?
      return;
    }
    _buildQueue.add(Point(regionX, regionY));
    var result = await JsIsolatedWorker().run(
      functionName: 'jsregionworker',
      arguments: [
        regionSideWidth,
        regionSideWidth,
        regionX * regionSideWidth,
        regionY * regionSideWidth,
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

    if (_regions.containsKey(Point(regionX, regionY))) {
      for (LevelOfDetail lod in gameObjectsByLOD.keys) {
        if (!_regions[Point(regionX, regionY)]!.hasLevelOfDetail(lod) &&
            gameObjectsByLOD[lod]!.isNotEmpty) {
          _regions[Point(regionX, regionY)]!
              .addNewLevelOfDetail(gameObjectsByLOD[lod]!, lod);
        }
      }
    } else {
      var regionDTO = RegionDTO(
        IsoCoordinate(
          regionX * regionSideWidth.toDouble(),
          regionY * regionSideWidth.toDouble(),
        ),
        gameObjectsByLOD,
      );
      _regions[Point(regionX, regionY)] = Region.fromRegionDTO(regionDTO);
    }
    _buildQueue.remove(Point(regionX, regionY));
  }

  /// TODO Add concurrency support
  void _otherPlatformsCreateRegion(int x, int y, LevelOfDetail lod) {
    RegionDTO regionDTO = RegionCreator().create(
        IsoCoordinate(
          x * regionSideWidth.toDouble(),
          y * regionSideWidth.toDouble(),
        ),
        regionSideWidth,
        regionSideWidth,
        x * regionSideWidth,
        y * regionSideWidth,
        lod);
    _regions[Point(x, y)] = Region.fromRegionDTO(regionDTO);
  }

  int visibleRegionSize() {
    return _visibleRegion.visibleRegionSize();
  }
}
