import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/utils/map_dto.dart';
import 'package:flutter/cupertino.dart';
import 'camera/camera.dart';
import 'camera/level_of_detail.dart';
import 'game_objects/dynamic/player/player.dart';

class Game extends ChangeNotifier {
  final Player _player = Player(const IsoCoordinate(0, 0), 0);
  final Camera _camera = Camera();
  late final RegionManager _regionManager = RegionManager(_camera);
  int _verticesCount = 0;

  /// Notice that this method does not update what is currently visible
  MapDTO getVerticesInView([LevelOfDetail? levelOfDetail]) {
    levelOfDetail ??= _camera.getLevelOfDetail();
    MapDTO mapDTO = _regionManager.getVerticesInView(levelOfDetail);
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
  void movePlayer(double joyStickX, double joyStickY) {
    _player.move(joyStickX, joyStickY);
    _camera.center = _player.isoCoordinate;
    //_regionManager.updatePlayerRegion(_player);
  }

  int get verticesCount => _verticesCount;

  double get viewWidth => _camera.width();

  double get viewHeight => _camera.height();

  IsoCoordinate get viewTopLeft => _camera.topLeft;

  IsoCoordinate get viewBottomRight => _camera.bottomRight;

  IsoCoordinate get viewCenter => _camera.center;

  double get zoomLevel => _camera.zoomLevel;

  int amountOfVisibleRegions() {
    return _regionManager.visibleRegionSize();
  }

  void updateScreenAspectRatio(double ratio) {
    _camera.aspectRatio = ratio;
  }

  void setZoomLevel(double level) {
    _camera.setZoomLevel(level);
  }

  void updateVisibleRegions() {
    _regionManager.updateVisibleRegions();
  }
}
