import 'package:anki/map/iso_coordinate.dart';
import 'package:flutter/cupertino.dart';

class Camera {
  late IsoCoordinate topLeft;
  late IsoCoordinate bottomRight;

  /// This is a value the camera will follow
  final ValueNotifier<IsoCoordinate> target;

  Camera(this.target) {
    topLeft = IsoCoordinate(
      target.value.x - 64,
      target.value.y + 64,
    );
    bottomRight = IsoCoordinate(
      target.value.x + 64,
      target.value.y - 64,
    );
    target.addListener(() {
      centralize(target.value);
    });
  }

  void centralize(IsoCoordinate coordinate) {
    double width = (topLeft.x - bottomRight.x).abs();
    double height = (topLeft.y - bottomRight.y).abs();
    topLeft =
        IsoCoordinate(coordinate.x - width / 2, coordinate.y + height / 2);
    bottomRight =
        IsoCoordinate(coordinate.x + width / 2, coordinate.y - height / 2);
  }

  double get width => (topLeft.x - bottomRight.x).abs();

  double get height => (topLeft.y - bottomRight.y).abs();

  void zoomOut([double scale = 2.0]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width * scale;
    double newHeight = height * scale;

    topLeft = IsoCoordinate(
      (centerX - newWidth / 2.0),
      (centerY - newHeight / 2.0),
    );
    bottomRight = IsoCoordinate(
      (centerX + newWidth / 2.0),
      (centerY + newHeight / 2.0),
    );
  }

  void zoomIn([double scale = 2.0]) {
    double centerX = (topLeft.x + bottomRight.x) / 2.0;
    double centerY = (topLeft.y + bottomRight.y) / 2.0;
    double newWidth = width / scale;
    double newHeight = height / scale;

    if (newHeight < 10 || newWidth < 10) {
      return;
    }

    topLeft = IsoCoordinate(
      (centerX - newWidth / 2.0),
      (centerY - newHeight / 2.0),
    );
    bottomRight = IsoCoordinate(
      (centerX + newWidth / 2.0),
      (centerY + newHeight / 2.0),
    );
  }
}
