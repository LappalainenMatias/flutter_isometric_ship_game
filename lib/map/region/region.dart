import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:anki/map/camera/camera.dart';
import 'package:anki/map/region/region_creator.dart';
import '../../utils/vertice_dto.dart';
import 'game_objects/game_object.dart';
import 'dart:math';

/// The region contains dynamic and static game objects. Because of zoom out
/// we save static game objects in different levels of detail. The dynamic
/// game objects are always visible.
class Region extends Comparable<Region> {
  Point regionCoordinate;
  final List<GameObject> _dynamicGameObjects = [];
  final Map<LevelOfDetail, List<GameObject>> _staticGameObjectsByDetailLevel = {};
  RegionLOD regionLOD = RegionLOD();

  /// When we create the region for the first time we only add static game objects
  /// for a single level of detail to make it faster.
  Region(this.regionCoordinate, List<GameObject> staticGameObjects, LevelOfDetail lod) {
    /// todo lod should not be a variable here because it is confusing. update the comment
    _staticGameObjectsByDetailLevel[lod] = staticGameObjects;
    _createNewVertices();
  }

  void addNewLevelOfDetail(List<GameObject> staticGameObjects, LevelOfDetail lod) {
    _staticGameObjectsByDetailLevel[lod] = staticGameObjects;
    _createNewVertices();
  }

  bool hasLevelOfDetail(LevelOfDetail lod) {
    return _staticGameObjectsByDetailLevel.containsKey(lod);
  }

  Map<String, ui.Vertices?> getVertices(LevelOfDetail lod) {
    if (_dynamicGameObjects.isNotEmpty) {
      _createNewVertices();
    }
    return {
      "aboveWater": regionLOD.getAboveWaterDetail(lod),
      "underWater": regionLOD.getUnderWaterDetail(lod)
    };
  }

  void addDynamicGameObject(GameObject gameObject) {
    if (!gameObject.isDynamic()) {
      /// Todo we only support adding dynamic game objects. Static game objects are harder to add because there is multiple levels of detail.
      throw Exception("Can only add dynamic game objects");
    }
    _dynamicGameObjects.add(gameObject);
    _createNewVertices();
  }

  void removeGameObject(GameObject removeGameObject) {
    if (removeGameObject.isDynamic()) {
      _dynamicGameObjects.remove(removeGameObject);
    } else {
      throw Exception("Can only remove dynamic game objects");
    }
    _createNewVertices();
  }

  void _createNewVertices() {
    regionLOD = RegionLOD();
    for (LevelOfDetail lod in _staticGameObjectsByDetailLevel.keys) {
      List<GameObject> staticGameObjects =
          _staticGameObjectsByDetailLevel[lod] ?? [];
      List<GameObject> allGameObjects = [
        ...staticGameObjects,
        ..._dynamicGameObjects
      ];
      allGameObjects.sort();
      if (allGameObjects.isNotEmpty) {
        Map<String, VerticeDTO> verticeDTOs = toVertices(allGameObjects);
        VerticeDTO underWaterVerticeDTO = verticeDTOs['underWater']!;
        VerticeDTO aboveWaterVerticeDTO = verticeDTOs['aboveWater']!;
        int verticesCount = underWaterVerticeDTO.verticesCount() +
            aboveWaterVerticeDTO.verticesCount();
        var aboveWater = ui.Vertices.raw(
          ui.VertexMode.triangles,
          Float32List.fromList(aboveWaterVerticeDTO.positions),
          colors: Int32List.fromList(aboveWaterVerticeDTO.colors),
        );
        var underWater = ui.Vertices.raw(
          ui.VertexMode.triangles,
          Float32List.fromList(underWaterVerticeDTO.positions),
          colors: Int32List.fromList(underWaterVerticeDTO.colors),
        );
        regionLOD.setDetail(
          lod,
          aboveWater,
          underWater,
          verticesCount,
        );
      }
    }
  }

  factory Region.fromRegionDTO(RegionDTO data) {
    return Region(
      data.regionCoordinate,
      data.gameObjects,
      data.lod,
    );
  }

  int _nearness() {
    return -1 * (regionCoordinate.x + regionCoordinate.y).toInt();
  }

  @override
  int compareTo(Region other) {
    if (_nearness() > other._nearness()) {
      return 1;
    }
    return -1;
  }

  int getVerticesCount(LevelOfDetail lod) {
    return regionLOD.getVerticeCount(lod);
  }
}

/// Contains different levels of details for a region
/// Used for making rendering faster when zoomed out
class RegionLOD {
  final Map<LevelOfDetail, int> _verticesCountByDetailLevel = {};
  final Map<LevelOfDetail, ui.Vertices> _aboveWaterDetails = {};
  final Map<LevelOfDetail, ui.Vertices> _underWaterDetails = {};

  void setDetail(LevelOfDetail level, ui.Vertices aboveWater,
      ui.Vertices underWater, int count) {
    _verticesCountByDetailLevel[level] = count;
    _aboveWaterDetails[level] = aboveWater;
    _underWaterDetails[level] = underWater;
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
}
