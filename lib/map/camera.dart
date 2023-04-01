import 'dart:math';

import 'package:anki/map/coordinate_helper.dart';

class Camera {
  Point<int> topLeft;
  Point<int> bottomRight;

  Camera({required this.topLeft, required this.bottomRight});

  void centralize(Point<int> coordinate) {
    int width = (topLeft.x - bottomRight.x).abs().toInt();
    int height = (topLeft.y - bottomRight.y).abs().toInt();
    topLeft = Point(coordinate.x - width ~/ 2, coordinate.y + height ~/ 2);
    bottomRight = Point(coordinate.x + width ~/ 2, coordinate.y - height ~/ 2);
  }

  Point<int> getTopRight() {
    return Point(bottomRight.x, topLeft.y);
  }

  Point<int> getIsometricTopLeft() {
    return toIsoMetricPoint(topLeft);
  }

  Point<int> getIsometricBottomRight() {
    return toIsoMetricPoint(bottomRight);
  }

  Point<int> getIsometricTopRight() {
    return toIsoMetricPoint(getTopRight());
  }

  Point<int> getIsometricBottomLeft() {
    return toIsoMetricPoint(getBottomLeft());
  }

  Point<int> getBottomLeft() {
    return Point(topLeft.x, bottomRight.y);
  }

  void shift(Point<int> vector) {
    topLeft = topLeft + vector;
    bottomRight = bottomRight + vector;
  }

  Point<int> get center {
    return Point(
        (topLeft.x + bottomRight.x) ~/ 2, (topLeft.y + bottomRight.y) ~/ 2);
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

    topLeft = Point((centerX - newWidth / 2.0).toInt(),
        (centerY - newHeight / 2.0).toInt());
    bottomRight = Point((centerX + newWidth / 2.0).toInt(),
        (centerY + newHeight / 2.0).toInt());
  }

  void zoomIn([double scale = 1.5]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width / scale;
    double newHeight = height / scale;

    if (newHeight < 10 || newWidth < 10) {
      return;
    }

    topLeft = Point((centerX - newWidth / 2.0).toInt(),
        (centerY - newHeight / 2.0).toInt());
    bottomRight = Point((centerX + newWidth / 2.0).toInt(),
        (centerY + newHeight / 2.0).toInt());
  }
}
