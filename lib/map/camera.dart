import 'dart:math';

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

  void shift(Point<int> vector) {
    topLeft = topLeft + vector;
    bottomRight = bottomRight + vector;
  }

  Point<int> center() {
    return Point((topLeft.x + bottomRight.x) ~/ 2,
        (topLeft.y + bottomRight.y) ~/ 2);
  }

  int get width => (topLeft.x - bottomRight.x).abs().toInt();

  int get height => (topLeft.y - bottomRight.y).abs().toInt();

  void zoomOut([double scale = 1.5]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width * scale;
    double newHeight = height * scale;

    if (newHeight > 500 || newWidth > 500) {
      return;
    }

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
