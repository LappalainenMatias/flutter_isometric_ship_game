import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_creator.dart';
import '../../utils/vertice_dto.dart';
import 'game_objects/game_object.dart';
import 'dart:math';

class Region extends Comparable<Region> {
  int verticesCount = 0;
  Point regionCoordinate;
  List<GameObject> gameObjects = [];
  ui.Vertices? _aboveWater;
  ui.Vertices? _underWater;
  bool _isDynamic = false;

  Region(this.regionCoordinate, this.gameObjects) {
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  Map<String, ui.Vertices?> getVertices() {
    if (_isDynamic) {
      _updateVertices();
    }
    return {"aboveWater": _aboveWater, "underWater": _underWater};
  }

  bool _containsDynamicGameObject() {
    for (var gameObject in gameObjects) {
      if (gameObject.isDynamic()) {
        return true;
      }
    }
    return false;
  }

  void addGameObject(GameObject gameObject) {
    gameObjects.add(gameObject);
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  void removeGameObject(GameObject removeGameObject) {
    gameObjects.remove(removeGameObject);
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  void removeGameObjects(List<GameObject> removeGameObjects) {
    for (var gameObject in removeGameObjects) {
      gameObjects.remove(gameObject);
    }
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  _updateVertices() {
    gameObjects.sort();
    Map<String, VerticeDTO> verticeDTOs = toVertices(gameObjects);
    VerticeDTO underWaterVerticeDTO = verticeDTOs['underWater']!;
    VerticeDTO aboveWaterVerticeDTO = verticeDTOs['aboveWater']!;
    verticesCount = underWaterVerticeDTO.verticesCount() +
        aboveWaterVerticeDTO.verticesCount();
    _aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      Float32List.fromList(aboveWaterVerticeDTO.positions),
      colors: Int32List.fromList(aboveWaterVerticeDTO.colors),
    );
    _underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      Float32List.fromList(underWaterVerticeDTO.positions),
      colors: Int32List.fromList(underWaterVerticeDTO.colors),
    );
  }

  factory Region.fromRegionDTO(RegionDTO data) {
    return Region(
      data.regionCoordinate,
      data.gameObjects,
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
}
