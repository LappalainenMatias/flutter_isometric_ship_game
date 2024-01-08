import 'camera.dart';
import '../coordinates/iso_coordinate.dart';

class DefaultCamera extends Camera {
  @override
  IsoCoordinate center;
  double _zoomLevel = 0.5;
  final double _minWidth = 60;
  final double _maxWidth = 500;
  double _aspectRatio = 1.0;

  DefaultCamera({this.center = const IsoCoordinate(0, 0), double aspectRatio = 1.0}) {
    this.aspectRatio = aspectRatio;
  }

  set aspectRatio(double ratio) {
    if (ratio > 0) _aspectRatio = ratio;
  }

  @override
  double width() {
    if (_aspectRatio < 1) {
      // This limits the height and width
      return (_zoomLevel * _maxWidth + _minWidth) * _aspectRatio;
    }
    return _zoomLevel * _maxWidth + _minWidth;
  }

  @override
  double height() {
    return width() / _aspectRatio;
  }

  @override
  IsoCoordinate get bottomRight => IsoCoordinate.fromIso(
      center.isoX + width() / 2, center.isoY + height() / 2);

  @override
  IsoCoordinate get topLeft => IsoCoordinate.fromIso(
      center.isoX - width() / 2, center.isoY - height() / 2);

  /// 0 is zoomed in, 1 is zoomed out.
  @override
  void setZoomLevel(double newZoomLevel) {
    if (newZoomLevel < 0.01) {
      _zoomLevel = 0.01;
    } else if (newZoomLevel > 1) {
      _zoomLevel = 1;
    } else {
      _zoomLevel = newZoomLevel;
    }
  }

  @override
  void zoomIn() {
    setZoomLevel(_zoomLevel - 0.04 * _zoomLevel);
  }

  @override
  void zoomOut() {
    setZoomLevel(_zoomLevel + 0.04 * _zoomLevel);
  }

  @override
  double get zoomLevel => _zoomLevel;

  @override
  IsoCoordinate getGameCoordinate(
      double screenXPercentage, double screenYPercentage) {
    return IsoCoordinate.fromIso(topLeft.isoX + screenXPercentage * width(),
        topLeft.isoY + screenYPercentage * height());
  }

  @override
  double get aspectRatio => _aspectRatio;
}