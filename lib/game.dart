import 'package:anki/collision/collision_detector.dart';
import 'package:anki/textures/texture_coordinates.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/utils/map_dto.dart';
import 'package:flutter/cupertino.dart';
import 'camera/camera.dart';
import 'camera/level_of_detail.dart';
import 'game_objects/dynamic/player/player.dart';
import 'game_objects/static/ground/tile.dart';
import 'game_objects/static/ground/tile_type.dart';
import 'map/region/region.dart';

class Game extends ChangeNotifier {
  final Player _player = Player(const IsoCoordinate(0, 0), 0);
  final Camera _camera = Camera();
  late final RegionManager _regionManager = RegionManager(_camera);
  int _verticesCount = 0;

  MapDTO getVerticesInView([LevelOfDetail? levelOfDetail]) {
    levelOfDetail ??= _camera.getLevelOfDetail();
    MapDTO mapDTO = _regionManager.getVerticesInView(levelOfDetail);
    _verticesCount = mapDTO.verticesCount;
    return mapDTO;
  }

  void moveCamera(double joyStickX, double joyStickY) {
    _camera.move(joyStickX, joyStickY);
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
