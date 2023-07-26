import 'dart:ui';
import 'package:anki/map/region/game_objects/dynamic/boat/boat.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'camera/camera.dart';

class GameMap {
  final Boat _boat = Boat(const IsoCoordinate(0, 0), 0);
  final RegionManager _regionManager = RegionManager();
  final Camera _camera = Camera();
  int _verticesCount = 0;

  static final GameMap _singleton = GameMap._internal();

  factory GameMap() {
    return _singleton;
  }

  GameMap._internal();

  MapDTO getVerticesInView([LevelOfDetail? levelOfDetail]) {
    levelOfDetail ??= _camera.getLevelOfDetail();
    MapDTO mapDTO = _regionManager.getVertices(
      _camera.topLeft,
      _camera.bottomRight,
      levelOfDetail,
    );
    _verticesCount = mapDTO.verticesCount;
    return mapDTO;
  }

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void moveCamera(double joyStickX, double joyStickY) {
    _camera.move(joyStickX, joyStickY);
  }

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void moveBoat(double joyStickX, double joyStickY) {
    _boat.move(joyStickX, joyStickY);
    _camera.center = _boat.isoCoordinate;
    _regionManager.updateBoatRegion(_boat);
    //_regionManager.boatCollision(_boat);
  }

  int get verticesCount => _verticesCount;

  double get width => _camera.width();

  double get height => _camera.height();

  IsoCoordinate get cameraTopLeft => _camera.topLeft;

  IsoCoordinate get cameraBottomRight => _camera.bottomRight;

  IsoCoordinate get cameraCenter => _camera.center;

  double get zoomLevel => _camera.zoomLevel;

  void setAspectRatio(double ratio) {
    _camera.aspectRatio = ratio;
  }

  void setZoomLevel(double level) {
    _camera.setZoomLevel(level);
  }
}

class MapDTO {
  final List<Vertices> underWater;
  final List<Vertices> aboveWater;
  final int verticesCount;

  MapDTO({
    required this.underWater,
    required this.aboveWater,
    required this.verticesCount,
  });
}
