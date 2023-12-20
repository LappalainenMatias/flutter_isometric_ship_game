import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/region/region.dart';
import '../../game_specific/region/region_render_data_builder.dart';
import '../coordinates/borders.dart';
import '../game_object/game_object.dart';
import '../rendering_data/rendering_data.dart';

/// The region contains dynamic and static game objects. We update the vertices
/// if region contains any dynamic game objects.
class DefaultRegion extends Region {
  IsoCoordinate _bottomCoordinate;
  final List<DynamicGameObject> _dynamicGameObjects = [];
  late List<StaticGameObject> _staticGameObjects;
  late RenderingData _underWater;
  late RenderingData _aboveWater;
  Borders? borders;
  int _visibleGameObjectsLength = 0;

  DefaultRegion(this._bottomCoordinate, this._staticGameObjects) {
    _updateRstTransforms();
    _updateBorders();
  }

  @override
  IsoCoordinate getBottomCoordinate() {
    return _bottomCoordinate;
  }

  @override
  bool isEmpty() {
    return _staticGameObjects.isEmpty;
  }

  factory DefaultRegion.empty(IsoCoordinate bottomCoordinate) {
    return DefaultRegion(bottomCoordinate, []);
  }

  @override
  ({
    RenderingData underWater,
    RenderingData aboveWater,
  }) getRenderingData() {
    if (_dynamicGameObjects.isNotEmpty) {
      _updateRstTransforms();
    }
    return (
      underWater: _underWater,
      aboveWater: _aboveWater,
    );
  }

  void _updateRstTransforms() {
    final data = regionToDrawingDTO(_staticGameObjects, _dynamicGameObjects);
    _underWater = data.underWater;
    _aboveWater = data.aboveWater;
    _visibleGameObjectsLength = data.amountVisible;
  }

  @override
  int nearness() {
    return getBottomCoordinate().isoY.toInt();
  }

  void changeStaticGameObjects(List<StaticGameObject> staticGameObjects) {
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

  int gameObjectsLength() {
    return _staticGameObjects.length + _dynamicGameObjects.length;
  }

  int gameObjectsVisibleLength() {
    return _visibleGameObjectsLength;
  }

  @override
  void addGameObject(GameObject gameObject) {
    if (gameObject is DynamicGameObject) {
      _dynamicGameObjects.add(gameObject);
      _dynamicGameObjects.sort();
    } else if (gameObject is StaticGameObject) {
      _staticGameObjects.add(gameObject);
    } else {
      throw Exception('Unknown game object type');
    }
    _updateRstTransforms();
  }

  @override
  List<GameObject> getGameObjects() {
    return [..._staticGameObjects, ..._dynamicGameObjects];
  }

  @override
  void removeGameObject(GameObject gameObject) {
    // TODO: implement removeGameObject
  }

  @override
  void update() {
    // TODO: implement update
  }
}
