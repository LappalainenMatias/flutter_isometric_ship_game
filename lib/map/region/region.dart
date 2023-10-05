import 'dart:ui' as ui;
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../camera/level_of_detail.dart';
import '../../game_objects/game_object.dart';
import '../../optimization/list_binary_search.dart';
import 'dart:math';

/// The region contains dynamic and static game objects. Because of zoom out
/// we save static game objects in different levels of detail. The dynamic
/// game objects are always visible.
class Region implements Comparable<Region> {
  IsoCoordinate bottomCoordinate;
  late int _verticesCount;
  final List<GameObject> _dynamicGameObjects = [];
  List<GameObject> _staticGameObjects;
  late ui.Vertices? _aboveWaterVertices;
  late ui.Vertices? _underWaterVertices;
  LevelOfDetail lod;

  Region(this.bottomCoordinate, this._staticGameObjects, this.lod) {
    _updateVertices();
  }

  void addDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.add(gameObject);
  }

  bool isEmpty() {
    return _dynamicGameObjects.isEmpty && _staticGameObjects.isEmpty;
  }

  factory Region.empty(IsoCoordinate bottomCoordinate, LevelOfDetail lod) {
    return Region(bottomCoordinate, [], lod);
  }

  ({ui.Vertices? aboveWater, ui.Vertices? underWater}) getVertices() {
    if (_dynamicGameObjects.isNotEmpty) {
      _updateVertices();
    }
    return (
      aboveWater: _aboveWaterVertices,
      underWater: _underWaterVertices
    );
  }

  void _updateVertices() {
    List<GameObject> allGameObjects = addDynamicObjectsToStaticGameObjects(
      _staticGameObjects,
      _dynamicGameObjects,
    );

    var vertices = gameObjectsToVertices(allGameObjects);
    int verticesCount = (vertices.aboveWater.positions.length +
            vertices.underWater.positions.length) ~/ 2;

    var aboveWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      vertices.aboveWater.positions,
      textureCoordinates: vertices.aboveWater.textures,
    );
    var underWater = ui.Vertices.raw(
      ui.VertexMode.triangles,
      vertices.underWater.positions,
      textureCoordinates: vertices.underWater.textures,
    );

    _aboveWaterVertices = aboveWater;
    _underWaterVertices = underWater;
    _verticesCount = verticesCount;
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

  int getVerticesCount() {
    return _verticesCount;
  }

  void update(List<GameObject> staticGameObjects) {
    _staticGameObjects = staticGameObjects;
    _updateVertices();
  }

  void removeDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.remove(gameObject);
    _updateVertices();
  }

  List<GameObject> getAllGameObjects() {
    return [
      ..._staticGameObjects,
      ..._dynamicGameObjects,
    ];
  }
}
