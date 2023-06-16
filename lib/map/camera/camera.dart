import 'package:anki/map/iso_coordinate.dart';
import 'camera_mover.dart';

class Camera {
  late IsoCoordinate center;
  final CameraMover _cameraMover = CameraMover();
  double _zoomLevel = 0.5;
  final double _minWidth = 32;
  final double _maxWidth = 1024;
  double _aspectRatio = 1.0;

  Camera({this.center = const IsoCoordinate(0, 0)});

  void move(double joyStickX, double joyStickY) {
    _cameraMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
  }

  set aspectRatio(double ratio) {
    _aspectRatio = ratio;
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

  void setZoomLevel(double zoomLevel) {
    _zoomLevel = zoomLevel;
  }
}
