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
  final List<DynamicGameObject> _dynamicUnderWater = [];
  final List<DynamicGameObject> _dynamicAboveWater = [];
  List<StaticGameObject> _staticUnderWater;
  List<StaticGameObject> _staticAboveWater;
  late RenderingData _underWater;
  late RenderingData _aboveWater;
  late Rectangle _rectangle;
  var _visibleGameObjectsLength = 0;

  DefaultRegion(this._bottomCoordinate, this._staticUnderWater,
      this._staticAboveWater) {
    _updateRenderingData();
    _updateBorders();
  }

  @override
  IsoCoordinate getBottomCoordinate() {
    return _bottomCoordinate;
  }

  @override
  bool isEmpty() {
    return _staticUnderWater.isEmpty && _staticAboveWater.isEmpty;
  }

  factory DefaultRegion.empty(IsoCoordinate bottomCoordinate) {
    return DefaultRegion(bottomCoordinate, [], []);
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
    final data = regionToDrawingDTO2(staticUnderWater: _staticUnderWater,
        staticAboveWater: _staticAboveWater,
        dynamicUnderWater: _dynamicUnderWater,
        dynamicAboveWater: _dynamicAboveWater);
    _underWater = data.underWater;
    _aboveWater = data.aboveWater;
    _visibleGameObjectsLength = data.amountVisible;
  }

  @override
  int nearness() {
    return getBottomCoordinate().isoY.toInt();
  }

  void changeStaticGameObjects({required List<StaticGameObject> underWater,
      required List<StaticGameObject> aboveWater}) {
    _staticUnderWater = underWater;
    _staticAboveWater = aboveWater;
    _updateRenderingData();
    _updateBorders();
  }

  void _updateBorders() {
    if (!isEmpty()) {
      _rectangle = createRectangle([..._staticUnderWater, ..._staticAboveWater]);
    } else {
      /// If no static game objects, exist we create a small border.
      var top = _bottomCoordinate.isoY - 1;
      var left = _bottomCoordinate.isoX - 1;
      var right = _bottomCoordinate.isoX + 1;
      var bottom = _bottomCoordinate.isoY + 1;
      _rectangle =
          Rectangle(top: top, left: left, right: right, bottom: bottom);
    }
  }

  int gameObjectsVisibleLength() {
    return _visibleGameObjectsLength;
  }

  @override
  void addGameObject(GameObject gameObject) {
    if (gameObject is DynamicGameObject) {
      if (gameObject.isUnderWater()) {
        _dynamicUnderWater.add(gameObject);
        _dynamicUnderWater.sort();
      } else {
        _dynamicAboveWater.add(gameObject);
        _dynamicAboveWater.sort();
      }
    } else {
        throw Exception('Not implemented');
        /// This requires binary search because we do not want to sort the whole list every time
    }
  }

  @override
  void removeGameObject(GameObject gameObject) {
    if (gameObject is DynamicGameObject) {
      if (gameObject.isUnderWater()) {
        _dynamicUnderWater.remove(gameObject);
      } else {
        _dynamicAboveWater.remove(gameObject);
      }
      if (_dynamicUnderWater.isEmpty && _dynamicAboveWater.isEmpty) {
        // If the region has other dynamic game objects, the rendering data will be updated next frame
        _updateRenderingData();
      }
    } else {
      if (gameObject.isUnderWater()) {
        _staticUnderWater.remove(gameObject);
      } else {
        _staticAboveWater.remove(gameObject);
      }
      _updateRenderingData();
    }
  }

  @override
  void update(double dt) {
    for (var gameObject in _dynamicUnderWater.toList()) {
      gameObject.update(dt);
    }
    for (var gameObject in _dynamicAboveWater.toList()) {
      gameObject.update(dt);
    }
    if (_dynamicUnderWater.isNotEmpty || _dynamicAboveWater.isNotEmpty) {
      _updateRenderingData();
    }
  }

  @override
  Rectangle getRectangle() {
    return _rectangle;
  }

  @override
  List<DynamicGameObject> getAboveWaterDynamicGameObjects() {
    return _dynamicAboveWater;
  }

  @override
  List<StaticGameObject> getAboveWaterStaticGameObjects() {
    return _staticAboveWater;
  }

  @override
  List<DynamicGameObject> getUnderWaterDynamicGameObjects() {
    return _dynamicUnderWater;
  }

  @override
  List<StaticGameObject> getUnderWaterStaticGameObjects() {
    return _staticUnderWater;
  }
}
