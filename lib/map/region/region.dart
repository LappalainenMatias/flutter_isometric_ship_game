import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:anki/map/region/game_objects/game_objects_to_vertices.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_creator.dart';
import '../../utils/vertice_dto.dart';
import 'game_objects/game_object.dart';

class Region extends Comparable<Region> {
  int verticesCount = 0;
  IsoCoordinate coord;
  List<GameObject> gameObjects = [];
  ui.Vertices? _aboveWater;
  ui.Vertices? _underWater;
  bool _isDynamic = false;

  Region(
      this.verticesCount,
      this.coord,
      Float32List aboveWaterPositions,
      Int32List aboveWaterColors,
      Float32List underWaterPositions,
      Int32List underWaterColors,
      this.gameObjects) {
    _isDynamic = _containsDynamicGameObject();
    _aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      aboveWaterPositions,
      colors: aboveWaterColors,
    );
    _underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      underWaterPositions,
      colors: underWaterColors,
    );
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

  void removeGameObject(GameObject gameObject) {
    gameObjects.remove(gameObject);
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  void removeGameObjects(List<GameObject> gameObjects) {
    for (var gameObject in gameObjects) {
      this.gameObjects.remove(gameObject);
    }
    _isDynamic = _containsDynamicGameObject();
    _updateVertices();
  }

  _updateVertices() {
    gameObjects.sort();
    Map<String, VerticeDTO> verticeDTOs = toVertices(gameObjects);
    VerticeDTO underWaterVerticeDTO = verticeDTOs['underWater']!;
    VerticeDTO aboveWaterVerticeDTO = verticeDTOs['aboveWater']!;
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
      data.verticesCount,
      data.regionCoordinate,
      data.aboveWaterPositions,
      data.aboveWaterColors,
      data.underWaterPositions,
      data.underWaterColors,
      data.gameObjects,
    );
  }

  int _nearness() {
    return coord.isoX.toInt() + coord.isoY.toDouble().toInt();
  }

  @override
  int compareTo(Region other) {
    if (_nearness() > other._nearness()) {
      return -1;
    }
    return 1;
  }
}
