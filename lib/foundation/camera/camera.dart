import 'package:anki/foundation/coordinates/rectangle.dart';

import '../coordinates/iso_coordinate.dart';

abstract class Camera {
  IsoCoordinate get bottomRight;

  IsoCoordinate get topLeft;

  IsoCoordinate get center;

  set center(IsoCoordinate newCenter);

  double get zoomLevel;

  /// 0 is zoomed in, 1 is zoomed out.
  void setZoomLevel(double newZoomLevel);

  double width();

  double height();

  void zoomIn();

  void zoomOut();

  /// Turns screen coordinates into game coordinates.
  /// (1.0, 1.0) is the bottom right corner of the screen.
  /// (0.5, 0.5) is the center of the screen.
  IsoCoordinate getGameCoordinate(
      double screenXPercentage, double screenYPercentage) {
    return IsoCoordinate.fromIso(topLeft.isoX + screenXPercentage * width(),
        topLeft.isoY + screenYPercentage * height());
  }

  Rectangle getRectangle() {
    return Rectangle(
        top: bottomRight.isoY,
        bottom: topLeft.isoY,
        left: topLeft.isoX,
        right: bottomRight.isoX);
  }
}
