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
