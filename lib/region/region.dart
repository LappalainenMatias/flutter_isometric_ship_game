import 'dart:typed_data';
import 'package:anki/coordinates/borders.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/region/region_to_vertices.dart';
import '../../game_objects/game_object.dart';
import 'dart:math';

/// The region contains dynamic and static game objects. We update the vertices
/// if region contains any dynamic game objects.
class Region implements Comparable<Region> {
  IsoCoordinate bottomCoordinate;
  final List<GameObject> _dynamicGameObjects = [];
  List<GameObject> _staticGameObjects;
  late Float32List underWaterrstTransforms;
  late Float32List underWaterRects;
  late Float32List aboveWaterRstTransforms;
  late Float32List aboveWaterRects;
  Borders? borders;
  int _visibleGameObjectsLength = 0;

  Region(this.bottomCoordinate, this._staticGameObjects) {
    _updateRstTransforms();
    _updateBorders();
  }

  void addDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.add(gameObject);
  }

  bool isEmpty() {
    return _dynamicGameObjects.isEmpty && _staticGameObjects.isEmpty;
  }

  factory Region.empty(IsoCoordinate bottomCoordinate) {
    return Region(bottomCoordinate, []);
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

  void _updateRstTransforms() {
    final data =
        RegionToRstTransformsAndRects.create(_staticGameObjects, _dynamicGameObjects);
    underWaterrstTransforms = data.underWaterRstTransforms;
    underWaterRects = data.underWaterRects;
    aboveWaterRstTransforms = data.aboveWaterRstTransforms;
    aboveWaterRects = data.aboveWaterRects;
    _visibleGameObjectsLength = data.amountVisible;
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

  void update(List<GameObject> staticGameObjects) {
    _staticGameObjects = staticGameObjects;
    _updateRstTransforms();
    _updateBorders();
  }

  void _updateBorders() {
    if (_staticGameObjects.isNotEmpty) {
      borders = createBorders(_staticGameObjects);
    }
  }

  void removeDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.remove(gameObject);
    _updateRstTransforms();
  }

  List<GameObject> getStaticGameObjects() {
    return _staticGameObjects;
  }

  int gameObjectsLength() {
    return _staticGameObjects.length + _dynamicGameObjects.length;
  }

  int gameObjectsVisibleLength() {
    return _visibleGameObjectsLength;
  }
}
