import 'package:anki/utils/iso_coordinate.dart';
import 'camera_mover.dart';

class Camera {
  late IsoCoordinate center;
  final CameraMover _cameraMover = CameraMover();
  double zoomLevel = 0.25;
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
    if (zoomLevel < 0.25) return LevelOfDetail.maximum;
    if (zoomLevel < 0.50) return LevelOfDetail.mid;
    if (zoomLevel < 0.75) return LevelOfDetail.low;
    return LevelOfDetail.minimal;
  }
}

/// In practice low level of detail causes the elevation and moisture noise to have less detail.
/// Because of this the map will have larger tiles (rendering is faster).
///
/// From:
/// [1, 2, 3, 4],
/// [5, 6, 7, 8],
/// [9, 10, 11, 12],
/// [13, 14, 15, 16]
/// to:
/// [1, 1, 3, 3],
/// [1, 1, 3, 3],
/// [9, 9, 11, 11],
/// [9, 9, 11, 11]
enum LevelOfDetail {
  maximum(1, true),
  mid(2, false),
  low(4, false),
  minimal(8, false);

  const LevelOfDetail(this.tileMinSize, this.containsNaturalItems);
  final int tileMinSize;
  final bool containsNaturalItems;
}
