import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/region/region.dart';
import 'region_render_data_builder.dart';
import '../coordinates/rectangle.dart';
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
  late Rectangle _rectangle;
  var _visibleGameObjectsLength = 0;

  DefaultRegion(this._bottomCoordinate, this._staticGameObjects) {
    _updateRenderingData();
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
    return (
      underWater: _underWater,
      aboveWater: _aboveWater,
    );
  }

  void _updateRenderingData() {
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
    _updateRenderingData();
    _updateBorders();
  }

  void _updateBorders() {
    if (_staticGameObjects.isNotEmpty) {
      _rectangle = createRectangle(_staticGameObjects);
    } else {
      /// If no static game objects, exist we create a small border.
      var top = _bottomCoordinate.isoY - 1;
      var left = _bottomCoordinate.isoX - 1;
      var right = _bottomCoordinate.isoX + 1;
      var bottom = _bottomCoordinate.isoY + 1;
      _rectangle = Rectangle(top: top, left: left, right: right, bottom: bottom);
    }
  }

  void removeDynamicGameObject(GameObject gameObject) {
    _dynamicGameObjects.remove(gameObject);
    _updateRenderingData();
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
    _updateRenderingData();
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
    if (_dynamicGameObjects.isNotEmpty) {
      _updateRenderingData();
    }
  }

  @override
  Rectangle getRectangle() {
    return _rectangle;
  }
}
