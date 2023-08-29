import 'package:anki/coordinates/iso_coordinate.dart';
import 'camera_mover.dart';
import 'level_of_detail.dart';

class Camera {
  IsoCoordinate center;
  final CameraMover _cameraMover = CameraMover();
  double zoomLevel = 0.05;
  final double _minWidth = 32;
  final double _maxWidth = 8192;
  double _aspectRatio = 1.0;

  Camera({this.center = const IsoCoordinate(0, 0)});

  void move(double joyStickX, double joyStickY) {
    _cameraMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  set aspectRatio(double ratio) {
    if (ratio > 0) _aspectRatio = ratio;
  }

  double width() {
    if (_aspectRatio < 1) {
      // This limits the height and width
      return (zoomLevel * _maxWidth + _minWidth) * _aspectRatio;
    }
    return zoomLevel * _maxWidth + _minWidth;
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
      zoomLevel = 0;
    } else if (newZoomLevel > 1) {
      zoomLevel = 1;
    } else {
      zoomLevel = newZoomLevel;
    }
  }

  LevelOfDetail getLevelOfDetail() {
    if (zoomLevel < 0.05) return LevelOfDetail.lod1x1;
    if (zoomLevel < 0.10) return LevelOfDetail.lod2x2;
    if (zoomLevel < 0.20) return LevelOfDetail.lod4x4;
    if (zoomLevel < 0.40) return LevelOfDetail.lod8x8;
    if (zoomLevel < 0.70) return LevelOfDetail.lod16x16;
    return LevelOfDetail.lod32x32;
  }
}
