import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:anki/coordinates/borders.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/region/region_to_vertices.dart';
import '../../camera/level_of_detail.dart';
import '../../game_objects/game_object.dart';
import 'dart:math';

/// The region contains dynamic and static game objects. We update the vertices
/// if region contains any dynamic game objects.
class Region implements Comparable<Region> {
  IsoCoordinate bottomCoordinate;
  late int _verticesCount;
  final List<GameObject> _dynamicGameObjects = [];
  List<GameObject> _staticGameObjects;
  late ui.Vertices? _aboveWaterVertices;
  late ui.Vertices? _underWaterVertices;
  late Float32List underWaterrstTransforms;
  late Float32List underWaterRects;
  late Float32List aboveWaterRstTransforms;
  late Float32List aboveWaterRects;
  LevelOfDetail lod;
  Borders? borders;

  Region(this.bottomCoordinate, this._staticGameObjects, this.lod) {
    //_updateVertices();
    _updateRstTransforms();
    _updateBorders();
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

  ({
    Float32List rstTransformsUnderWater,
    Float32List rectsUnderWater,
    Float32List rstTransformsAboveWater,
    Float32List rectsAboveWater,
  }) getRstTransformsAndRects() {
    if (_dynamicGameObjects.isNotEmpty) {
      _updateRstTransforms();
    }
    return (
      rstTransformsUnderWater: underWaterrstTransforms,
      rectsUnderWater: underWaterRects,
      rstTransformsAboveWater: aboveWaterRstTransforms,
      rectsAboveWater: aboveWaterRects
    );
  }

  ({ui.Vertices? aboveWater, ui.Vertices? underWater}) getVertices() {
    if (_dynamicGameObjects.isNotEmpty) {
      _updateVertices();
    }
    return (aboveWater: _aboveWaterVertices, underWater: _underWaterVertices);
  }

  void _updateRstTransforms() {
    final data =
        RegionToRstTransformsAndRects.toAtlasData(_staticGameObjects, _dynamicGameObjects);
    underWaterrstTransforms = data.underWaterRstTransforms;
    underWaterRects = data.underWaterRects;
    aboveWaterRstTransforms = data.aboveWaterRstTransforms;
    aboveWaterRects = data.aboveWaterRects;
    _verticesCount = 0;
  }

  void _updateVertices() {
    final data =
        RegionToVertices.toVertices(_staticGameObjects, _dynamicGameObjects);
    _aboveWaterVertices = data.aboveWater;
    _underWaterVertices = data.underWater;
    _verticesCount = data.verticesCount;
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
    _updateRstTransforms();
    //_updateVertices();
    _updateBorders();
  }

  void _updateBorders() {
    if (_staticGameObjects.isNotEmpty) {
      borders = createBorders(_staticGameObjects);
    }
  }

  void removeDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.remove(gameObject);
    //_updateVertices();
    _updateRstTransforms();
  }

  List<GameObject> getStaticGameObjects() {
    return _staticGameObjects;
  }

  int gameObjectsLength() {
    return _staticGameObjects.length + _dynamicGameObjects.length;
  }
}
