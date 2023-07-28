import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/utils/iso_coordinate.dart';

import '../../camera/camera.dart';
import '../../camera/level_of_detail.dart';

/// Managing and sorting regions every frame is slow when the camera is zoomed out.
/// This class allows us to get visible regions faster. This class implements the following ideas:
/// 1. We do not need to update visible regions list every frame. // todo
/// 2. Instead of creating a new list of visible regions every frame, we store the list and update it.
class VisibleRegion {
  final Camera _camera;
  final RegionManager _regionManager;

  /// Some regions are so tall that they are visible even when they are not in
  /// the camera view. This padding fixes that.
  final double _visibleRegionPadding = 300;

  /// These regions should always be in correct order for drawing.
  List<Region> _sortedVisibleRegions = [];

  final Set<IsoCoordinate> _addedRegionCoordinates = {};

  VisibleRegion(this._camera, this._regionManager);

  void removeUnvisibleRegions() {
    List<Region> filtered = [];
    IsoCoordinate topLeft =
        _camera.topLeft + IsoCoordinate.fromIso(-1 * _visibleRegionPadding, 0);
    IsoCoordinate bottomRight = _camera.bottomRight +
        IsoCoordinate.fromIso(
            _visibleRegionPadding, -1 * _visibleRegionPadding);
    for (var region in _sortedVisibleRegions) {
      if (region.regionBottomCoordinate.isBetween(topLeft, bottomRight)) {
        filtered.add(region);
      } else {
        _addedRegionCoordinates.remove(region.regionBottomCoordinate);
      }
    }
    _sortedVisibleRegions = filtered;
  }

  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions;
  }

  /// Uses binary search so that the list is always sorted.
  void addRegion(Region newRegion) {
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

  void updateVisibleRegions(LevelOfDetail lod) {
    /// Todo we could do this every 10 frame and it would still be unvisible. It takes about 1ms every frame.
    removeUnvisibleRegions();
    Stopwatch stopwatch = Stopwatch()..start();
    List coordinatesInSpiral = getSpiralStartingFromCorner(
        _camera.topLeft, _camera.bottomRight, _regionManager.regionSideWidth);
    for (int i = coordinatesInSpiral.length - 1; i >= 0; i--) {
      Region? region = _regionManager.getRegion(coordinatesInSpiral[i], lod);
      if (region != null &&
          !_addedRegionCoordinates.contains(region.regionBottomCoordinate)) {
        addRegion(region);
        _addedRegionCoordinates.add(region.regionBottomCoordinate);
      }
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
    IsoCoordinate topLeft,
    IsoCoordinate bottomRight,
    step,
  ) {
    /// Notice that we do not want to create points that would be removed in removeUnvisibleRegions().
    double top = topLeft.isoY;
    double bottom = bottomRight.isoY - _visibleRegionPadding / 2;
    double left = topLeft.isoX - _visibleRegionPadding / 2;
    double right = bottomRight.isoX + _visibleRegionPadding / 2;

    var spiral = [];

    int dir = 1;

    while (top >= bottom && left <= right) {
      if (dir == 1) {
        // moving left->right
        for (double i = left; i <= right; i += step) {
          spiral.add(IsoCoordinate.fromIso(i, top));
        }
        top -= step;
        dir = 2;
      } else if (dir == 2) {
        // moving top->bottom
        for (double i = top; i >= bottom; i -= step) {
          spiral.add(IsoCoordinate.fromIso(right, i));
        }
        right -= step;
        dir = 3;
      } else if (dir == 3) {
        // moving right->left
        for (double i = right; i >= left; i -= step) {
          spiral.add(IsoCoordinate.fromIso(i, bottom));
        }
        bottom += step;
        dir = 4;
      } else if (dir == 4) {
        // moving bottom->up
        for (double i = bottom; i <= top; i += step) {
          spiral.add(IsoCoordinate.fromIso(left, i));
        }
        left += step;
        dir = 1;
      }
    }
    return spiral;
  }

  int visibleRegionSize() {
    return _sortedVisibleRegions.length;
  }
}
