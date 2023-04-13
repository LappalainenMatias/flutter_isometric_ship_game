import 'package:anki/map/iso_coordinate.dart';

class Camera {
  IsoCoordinate topLeft;
  IsoCoordinate bottomRight;

  Camera({required this.topLeft, required this.bottomRight});

  Camera.fromCoordinate(IsoCoordinate coordinate)
      : topLeft = IsoCoordinate(coordinate.x - 64, coordinate.y + 64),
        bottomRight = IsoCoordinate(coordinate.x + 64, coordinate.y - 64);

  void centralize(IsoCoordinate coordinate) {
    double width = (topLeft.x - bottomRight.x).abs();
    double height = (topLeft.y - bottomRight.y).abs();
    topLeft =
        IsoCoordinate(coordinate.x - width / 2, coordinate.y + height / 2);
    bottomRight =
        IsoCoordinate(coordinate.x + width / 2, coordinate.y - height / 2);
  }

  IsoCoordinate getTopRight() {
    return IsoCoordinate(bottomRight.x, topLeft.y);
  }

  IsoCoordinate getTopLeft() {
    return topLeft;
  }

  IsoCoordinate getIsometricBottomRight() {
    return bottomRight;
  }

  IsoCoordinate getIsometricTopRight() {
    return IsoCoordinate(bottomRight.x, topLeft.y);
  }

  double get width => (topLeft.x - bottomRight.x).abs();

  double get isoMetricWidth => (topLeft.isoX - bottomRight.isoX).abs();

  double get isoMetricHeight =>
      (getIsometricTopRight().isoY - getIsometricBottomRight().isoY).abs();

  double get height => (topLeft.y - bottomRight.y).abs();

  void zoomOut([double scale = 2.0]) {
    print("zoom out");
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width * scale;
    double newHeight = height * scale;

    topLeft =
        IsoCoordinate((centerX - newWidth / 2.0), (centerY - newHeight / 2.0));
    bottomRight =
        IsoCoordinate((centerX + newWidth / 2.0), (centerY + newHeight / 2.0));
  }

  void zoomIn([double scale = 2.0]) {
    print("zoom in");
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width / scale;
    double newHeight = height / scale;

    if (newHeight < 10 || newWidth < 10) {
      return;
    }

    topLeft =
        IsoCoordinate((centerX - newWidth / 2.0), (centerY - newHeight / 2.0));
    bottomRight =
        IsoCoordinate((centerX + newWidth / 2.0), (centerY + newHeight / 2.0));
  }
}
