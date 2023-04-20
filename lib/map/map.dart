import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'camera/camera.dart';

class MapModel extends ChangeNotifier {
  final RegionManager _regionManager = RegionManager();
  final Camera _camera = Camera();

  Map<String, List<Vertices>> getVerticesInView() {
    return _regionManager.getVertices(_camera.topLeft, _camera.bottomRight);
  }

  /// Moves the camera in the direction indicated by the origin (0, 0) and (x, y)
  /// (0, 1) = up, (-1, 0) = left
  void moveCamera(double joyStickX, double joyStickY) {
    _camera.move(joyStickX, joyStickY);
    notifyListeners();
  }

  double get width => _camera.width;

  double get height => _camera.height;

  IsoCoordinate get center => _camera.center;

  void zoomIn() {
    _camera.zoomIn();
    notifyListeners();
  }

  void zoomOut() {
    _camera.zoomOut();
    notifyListeners();
  }
}
