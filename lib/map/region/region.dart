import 'dart:ui' as ui;
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import '../../camera/level_of_detail.dart';
import '../../game_objects/game_object.dart';
import '../../utils/list_binary_search.dart';
import '../../utils/vertice_dto.dart';
import 'dart:math';

/// The region contains dynamic and static game objects. Because of zoom out
/// we save static game objects in different levels of detail. The dynamic
/// game objects are always visible.
class Region extends Comparable<Region> {
  IsoCoordinate bottomCoordinate;
  final List<GameObject> _dynamicGameObjects = [];
  Map<LevelOfDetail, List<GameObject>> staticGameObjectsByLOD;
  final RegionLOD _regionLOD = RegionLOD();

  Region(this.bottomCoordinate, this.staticGameObjectsByLOD) {
    _updateAllLevelsOfDetail();
  }

  void addNewLevelOfDetail(
      List<GameObject> staticGameObjects, LevelOfDetail lod) {
    staticGameObjectsByLOD[lod] = staticGameObjects;
    _updateLevelOfDetail(lod);
  }

  bool hasLevelOfDetail(LevelOfDetail lod) {
    return _regionLOD.hasLevelOfDetail(lod);
  }

  Map<String, ui.Vertices?> getVertices(LevelOfDetail lod) {
    if (_dynamicGameObjects.isNotEmpty) {
      _updateLevelOfDetail(lod);
    }
    return {
      "aboveWater": _regionLOD.getAboveWaterDetail(lod),
      "underWater": _regionLOD.getUnderWaterDetail(lod)
    };
  }

  void addDynamicGameObject(GameObject gameObject) {
    if (!gameObject.isDynamic()) {
      throw Exception("Can only add dynamic game objects");
    }
    _dynamicGameObjects.add(gameObject);
    _updateAllLevelsOfDetail();
  }

  void removeGameObject(GameObject removeGameObject) {
    if (removeGameObject.isDynamic()) {
      _dynamicGameObjects.remove(removeGameObject);
    } else {
      throw Exception("Can only remove dynamic game objects");
    }
    _updateAllLevelsOfDetail();
  }

  void _updateAllLevelsOfDetail() {
    for (LevelOfDetail lod in staticGameObjectsByLOD.keys) {
      _updateLevelOfDetail(lod);
    }
  }

  void _updateLevelOfDetail(LevelOfDetail lod) {
    List<GameObject> allGameObjects = addDynamicObjectsToStaticGameObjects(
      staticGameObjectsByLOD[lod] ?? [],
      _dynamicGameObjects,
    );

    Map<String, VerticeDTO> verticeDTOs = gameObjectsToVertices(allGameObjects);
    int verticesCount = (verticeDTOs['aboveWater']!.positions.length +
            verticeDTOs['underWater']!.positions.length) ~/ 2;

    var aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      verticeDTOs['aboveWater']!.positions,
      textureCoordinates: verticeDTOs['aboveWater']!.textures,
    );
    var underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      verticeDTOs['underWater']!.positions,
      textureCoordinates: verticeDTOs['underWater']!.textures,
    );

    _regionLOD.setDetail(
      lod,
      aboveWater,
      underWater,
      verticesCount,
    );
  }

  factory Region.fromRegionDTO(RegionDTO data) {
    return Region(data.regionBottomCoordinate, data.gameObjectsByLOD);
  }

  int nearness() {
    Point bottom = bottomCoordinate.toPoint();
    return -1 * (bottom.x + bottom.y).toInt();
  }

  @override
  int compareTo(Region other) {
    if (nearness() > other.nearness()) {
      return 1;
    }
    return -1;
  }

  int getVerticesCount(LevelOfDetail lod) {
    return _regionLOD.getVerticeCount(lod);
  }
}

/// Contains different levels of details for a region
/// Used for making rendering faster when zoomed out
class RegionLOD {
  final Map<LevelOfDetail, int> _verticesCountByDetailLevel = {};
  final Map<LevelOfDetail, ui.Vertices> _aboveWaterDetails = {};
  final Map<LevelOfDetail, ui.Vertices> _underWaterDetails = {};
  final Set<LevelOfDetail> _addedLevelsOfDetail = {};

  void setDetail(LevelOfDetail level, ui.Vertices aboveWater,
      ui.Vertices underWater, int count) {
    _verticesCountByDetailLevel[level] = count;
    _aboveWaterDetails[level] = aboveWater;
    _underWaterDetails[level] = underWater;
    _addedLevelsOfDetail.add(level);
  }

  /// If level of detail is not found we return the highest level of detail we find
  int getVerticeCount(LevelOfDetail targetLOD) {
    if (_verticesCountByDetailLevel.containsKey(targetLOD)) {
      return _verticesCountByDetailLevel[targetLOD] ?? 0;
    }
    for (var lod in LevelOfDetail.values) {
      if (_verticesCountByDetailLevel.containsKey(lod)) {
        return _verticesCountByDetailLevel[lod] ?? 0;
      }
    }
    return 0;
  }

  /// If level of detail is not found we return the highest level of detail we find
  ui.Vertices? getAboveWaterDetail(LevelOfDetail targetLOD) {
    if (_aboveWaterDetails.containsKey(targetLOD)) {
      return _aboveWaterDetails[targetLOD];
    } else {
      for (var levelOfDetail in LevelOfDetail.values) {
        if (_aboveWaterDetails.containsKey(levelOfDetail)) {
          return _aboveWaterDetails[levelOfDetail];
        }
      }
    }
    return null;
  }

  /// If level of detail is not found we return the highest level of detail we find
  ui.Vertices? getUnderWaterDetail(LevelOfDetail targetLOD) {
    if (_underWaterDetails.containsKey(targetLOD)) {
      return _underWaterDetails[targetLOD];
    } else {
      for (var levelOfDetail in LevelOfDetail.values) {
        if (_underWaterDetails.containsKey(levelOfDetail)) {
          return _underWaterDetails[levelOfDetail];
        }
      }
    }
    return null;
  }

  bool hasLevelOfDetail(LevelOfDetail lod) {
    return _addedLevelsOfDetail.contains(lod);
  }
}
