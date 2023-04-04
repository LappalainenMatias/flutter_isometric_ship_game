import 'dart:math';

import 'map_helper.dart';

class Camera {
  Point<double> topLeft;
  Point<double> bottomRight;

  Camera({required this.topLeft, required this.bottomRight});

  void centralize(Point<dynamic> coordinate) {
    double width = (topLeft.x - bottomRight.x).abs();
    double height = (topLeft.y - bottomRight.y).abs();
    topLeft = Point(coordinate.x - width / 2, coordinate.y + height / 2);
    bottomRight = Point(coordinate.x + width / 2, coordinate.y - height / 2);
  }

  Point getTopRight() {
    return Point(bottomRight.x, topLeft.y);
  }

  Point getIsometricTopLeft() {
    return toIsoMetricPoint(topLeft);
  }

  Point getIsometricBottomRight() {
    return toIsoMetricPoint(bottomRight);
  }

  Point getIsometricTopRight() {
    return toIsoMetricPoint(getTopRight());
  }

  Point getIsometricBottomLeft() {
    return toIsoMetricPoint(getBottomLeft());
  }

  Point<double> getBottomLeft() {
    return Point(topLeft.x, bottomRight.y);
  }

  void shift(Point<double> vector) {
    topLeft = topLeft + vector;
    bottomRight = bottomRight + vector;
  }

  Point<double> get center {
    return Point(
        (topLeft.x + bottomRight.x) / 2, (topLeft.y + bottomRight.y) / 2);
  }

  int get shorterSide {
    return min(width, height);
  }

  int get width => (topLeft.x - bottomRight.x).abs().toInt();

  int get isoMetricWidth =>
      (getIsometricTopLeft().x - getIsometricBottomRight().x).abs().toInt();

  int get isoMetricHeight =>
      (getIsometricTopRight().y - getIsometricBottomLeft().y).abs().toInt();

  int get height => (topLeft.y - bottomRight.y).abs().toInt();

  void zoomOut([double scale = 1.5]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width * scale;
    double newHeight = height * scale;

    topLeft = Point((centerX - newWidth / 2.0),
        (centerY - newHeight / 2.0));
    bottomRight = Point((centerX + newWidth / 2.0),
        (centerY + newHeight / 2.0));
  }

  void zoomIn([double scale = 1.5]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width / scale;
    double newHeight = height / scale;

    if (newHeight < 10 || newWidth < 10) {
      return;
    }

    topLeft = Point((centerX - newWidth / 2.0),
        (centerY - newHeight / 2.0));
    bottomRight = Point((centerX + newWidth / 2.0),
        (centerY + newHeight / 2.0));
  }
}
