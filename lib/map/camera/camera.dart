import 'package:anki/map/iso_coordinate.dart';
import 'camera_mover.dart';

class Camera {
  late IsoCoordinate topLeft;
  late IsoCoordinate bottomRight;
  final CameraMover cameraMover = CameraMover();

  Camera({IsoCoordinate center = const IsoCoordinate(0, 0)}) {
    topLeft = IsoCoordinate(
      center.x - 128,
      center.y + 128,
    );
    bottomRight = IsoCoordinate(
      center.x + 128,
      center.y - 128,
    );
  }

  void move(double joyStickX, double joyStickY) {
    cameraMover.joyStickIsometricMovement(joyStickX, joyStickY, this);
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

  IsoCoordinate get center {
    return IsoCoordinate(
      (topLeft.x + bottomRight.x) / 2.0,
      (topLeft.y + bottomRight.y) / 2.0,
    );
  }

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
