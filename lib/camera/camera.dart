import 'dart:math';

import 'package:anki/coordinates/iso_coordinate.dart';
import 'camera_mover.dart';
import 'level_of_detail.dart';

class Camera {
  IsoCoordinate center;
  final CameraMover _cameraMover = CameraMover();
  double _zoomLevel = 0.0005;
  final double _minWidth = 60;
  final double _maxWidth = 100000000;
  double _aspectRatio = 1.0;
  LevelOfDetail _currentLOD = LevelOfDetail.zoomlevel_19;

  Camera({this.center = const IsoCoordinate(0, 0)}) {
    _updateLOD();
  }

  void move(double joyStickX, double joyStickY) {
    _cameraMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  set aspectRatio(double ratio) {
    if (ratio > 0) _aspectRatio = ratio;
  }

  double width() {
    if (_aspectRatio < 1) {
      // This limits the height and width
      return (_zoomLevel * _maxWidth + _minWidth) * _aspectRatio;
    }
    return _zoomLevel * _maxWidth + _minWidth;
  }

  double height() {
    return width() / _aspectRatio;
  }

  IsoCoordinate get bottomRight => IsoCoordinate.fromIso(
      center.isoX + width() / 2, center.isoY - height() / 2);

  IsoCoordinate get topLeft => IsoCoordinate.fromIso(
      center.isoX - width() / 2, center.isoY + height() / 2);

  /// 0 is zoomed in, 1 is zoomed out.
  void setZoomLevel(double newZoomLevel) {
    if (newZoomLevel < 0) {
      _zoomLevel = 0;
    } else if (newZoomLevel > 1) {
      _zoomLevel = 1;
    } else {
      _zoomLevel = newZoomLevel;
    }
    _updateLOD();
  }

  void zoomIn() {
    setZoomLevel(_zoomLevel - 0.02 * _zoomLevel);
  }

  void zoomOut() {
    setZoomLevel(_zoomLevel + 0.02 * _zoomLevel);
  }

  LevelOfDetail getLOD() => _currentLOD;

  double get zoomLevel => _zoomLevel;

  void _updateLOD() {
    double maxSide = max(width(), height());
    int size = 400;
    for (LevelOfDetail lod in LevelOfDetail.values) {
      if (maxSide < size) {
        _currentLOD = lod;
        return;
      }
      size *= 2;
    }
    _currentLOD = LevelOfDetail.values.last;
  }
}
