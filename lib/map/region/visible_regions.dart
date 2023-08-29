import 'package:anki/constants.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../camera/camera.dart';
import '../../camera/level_of_detail.dart';
import '../../coordinates/coordinate_utils.dart';

/// Managing and sorting regions every frame is slow when the camera is zoomed out.
/// This class allows us to get visible regions faster. This class implements the following ideas:
/// 1. We do not need to update ALL visible regions list every frame.
/// 2. When adding items use binary search for keeping the list always sorted.
class VisibleRegions {
  final Camera _camera;
  final RegionManager _regionManager;

  /// These regions should always be in correct order for drawing.
  List<Region> _sortedVisibleRegions = [];

  final Set<IsoCoordinate> _addedRegionCoordinates = {};

  VisibleRegions(this._camera, this._regionManager);

  int _spiralIndex = 0;

  List _coordinatesInSpiral = [];

  void removeUnvisibleRegions() {
    /// Todo moving objects to another list might not be optimal.
    List<Region> filtered = [];
    for (var region in _sortedVisibleRegions) {
      if (isInView(region.bottomCoordinate, _camera)) {
        filtered.add(region);
      } else {
        _addedRegionCoordinates.remove(region.bottomCoordinate);
      }
    }
    _sortedVisibleRegions = filtered;
  }

  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions;
  }

  /// Todo insert is O(n) so there is room for improvement.
  /// Uses binary search so that the list is always sorted.
  void addRegionInCorrectOrder(Region newRegion) {
    int min = 0;
    int max = _sortedVisibleRegions.length;
    while (min < max) {
      int mid = min + ((max - min) >> 1);
      if (newRegion.nearness() < _sortedVisibleRegions[mid].nearness()) {
        max = mid;
      } else {
        min = mid + 1;
      }
    }
    _sortedVisibleRegions.insert(min, newRegion);
  }

  void updateVisibleRegions() {
    removeUnvisibleRegions();

    LevelOfDetail lod = _camera.getLevelOfDetail();
    if (_spiralIndex == 0) {
      _coordinatesInSpiral = getSpiralStartingFromCorner(
          _camera.topLeft, _camera.bottomRight, regionSideWidth);
      _spiralIndex = _coordinatesInSpiral.length - 1;
    }

    int checked = 0;
    while (_spiralIndex > 0) {
      IsoCoordinate coordinate = _coordinatesInSpiral[_spiralIndex];
      if (!isInView(coordinate, _camera)) {
        _spiralIndex = 0; // Stops the loop.
        break;
      }
      Region region = _regionManager.getRegion(coordinate, lod);
      if (!_addedRegionCoordinates.contains(region.bottomCoordinate)) {
        addRegionInCorrectOrder(region);
        _addedRegionCoordinates.add(region.bottomCoordinate);
      }
      if (checked > 100) {
        break;
      }
      checked++;
      _spiralIndex--;
    }
  }

  /// Returns a list of coordinates which are between the two coordinates in spiral form.
  /// We do this so that regions center of the screen are created first.
  /// From:
  /// [1, 2, 3]
  /// [4, 5, 6]
  /// [7, 8, 9]
  /// to:
  /// [1, 2, 3, 6, 9, 8, 7, 4, 5]
  List getSpiralStartingFromCorner(
      IsoCoordinate topLeft, IsoCoordinate bottomRight, int step) {
    int top = topLeft.isoY.round();
    int bottom = bottomRight.isoY.round();
    int left = topLeft.isoX.round();
    int right = bottomRight.isoX.round();

    int width = right - left;
    int height = top - bottom;

    if (width <= 0 || height <= 0) {
      throw Exception("Width and height must be >= 0");
    }

    int size = ((width / step).floor() + 1) * ((height / step).floor() + 1);
    var spiral = List<IsoCoordinate?>.filled(size, null, growable: false);

    int dir = 1;
    int index = 0;

    while (top >= bottom && left <= right) {
      switch (dir) {
        case 1:
          for (int i = left; i <= right; i += step) {
            spiral[index++] =
                IsoCoordinate.fromIso(i.toDouble(), top.toDouble());
          }
          top -= step;
          dir = 2;
          break;
        case 2:
          for (int i = top; i >= bottom; i -= step) {
            spiral[index++] =
                IsoCoordinate.fromIso(right.toDouble(), i.toDouble());
          }
          right -= step;
          dir = 3;
          break;
        case 3:
          for (int i = right; i >= left; i -= step) {
            spiral[index++] =
                IsoCoordinate.fromIso(i.toDouble(), bottom.toDouble());
          }
          bottom += step;
          dir = 4;
          break;
        case 4:
          for (int i = bottom; i <= top; i += step) {
            spiral[index++] =
                IsoCoordinate.fromIso(left.toDouble(), i.toDouble());
          }
          left += step;
          dir = 1;
          break;
      }
    }
    return spiral;
  }

  int visibleRegionSize() {
    return _sortedVisibleRegions.length;
  }
}
