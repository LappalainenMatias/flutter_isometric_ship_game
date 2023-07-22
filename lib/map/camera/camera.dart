import 'package:anki/utils/iso_coordinate.dart';
import 'camera_mover.dart';

class Camera {
  late IsoCoordinate center;
  final CameraMover _cameraMover = CameraMover();
  double _zoomLevel = 0.25;
  final double _minWidth = 32;
  final double _maxWidth = 4096;
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
      return (_zoomLevel * _maxWidth + _minWidth) * _aspectRatio;
    }
    return _zoomLevel * _maxWidth + _minWidth;
  }

  double height() {
    return width() / _aspectRatio;
  }

  IsoCoordinate get bottomRight =>
      IsoCoordinate.fromIso(center.isoX + width() / 2, center.isoY - height() / 2);

  IsoCoordinate get topLeft =>
      IsoCoordinate.fromIso(center.isoX - width() / 2, center.isoY + height() / 2);

  /// From 0 to 1
  void setZoomLevel(double zoomLevel) {
    if (zoomLevel < 0) {
      zoomLevel = 0;
    } else if (zoomLevel > 1) {
      zoomLevel = 1;
    } else {
      _zoomLevel = zoomLevel;
    }
  }
}
