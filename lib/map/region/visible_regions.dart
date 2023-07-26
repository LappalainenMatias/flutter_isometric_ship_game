import 'package:anki/map/camera/camera.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/utils/iso_coordinate.dart';

/// Managing and sorting regions every frame is slow when the camera is zoomed out.
/// This class allows us to get visible regions faster. This class implements the following ideas:
/// 1. We do not need to update visible regions list every frame.
/// 2. Instead of creating a new list of visible regions every frame, we store the list and update it.
class VisibleRegion {
  final Camera _camera;
  /// These regions are ready for painting. No need to sort them for correct painting order.
  List<Region> sortedVisibleRegions = [];

  VisibleRegion(this._camera);

  void removeUnvisibleRegions() {
    IsoCoordinate topLeft = _camera.topLeft;
    IsoCoordinate bottomRight = _camera.bottomRight;
    for (var region in sortedVisibleRegions) {

    }
  }
}