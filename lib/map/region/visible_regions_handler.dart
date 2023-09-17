import 'package:anki/map/region/region.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../camera/camera.dart';
import '../../coordinates/coordinate_utils.dart';
import '../map.dart';

abstract class VisibleRegionsHandler {
  List<Region> getVisibleRegionsInDrawingOrder();

  /// Updates the visible regions so that they are ready to be drawn.
  void updateVisibleRegions();

  int visibleRegionSize();

  List<IsoCoordinate> visualizeSpriral();
}

/// This class keeps track of which regions are visible and that they are in
/// correct order for drawing.
class VisibleRegionsHandlerImpl implements VisibleRegionsHandler {
  final Camera _camera;
  final GameMap _map;

  /// These regions should always be in correct order for drawing.
  List<Region> _sortedVisibleRegions = [];

  Set<IsoCoordinate> _addedRegionCoordinates = {};

  VisibleRegionsHandlerImpl(this._camera, this._map);

  int _spiralIndex = 0;

  List<IsoCoordinate> _coordinatesInSpiral = [];

  void _removeUnvisibleRegions() {
    /// Todo moving objects to another list might not be optimal.
    List<Region> filtered = [];
    _addedRegionCoordinates = {};
    var currentLod = _camera.getLOD();
    for (var region in _sortedVisibleRegions) {
      if (region.lod == currentLod &&
          isInView(region.bottomCoordinate, _camera)) {
        filtered.add(region);
        _addedRegionCoordinates.add(region.bottomCoordinate);
      }
    }
    _sortedVisibleRegions = filtered;
  }

  @override
  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions;
  }

  /// Todo insert is O(n) so there is room for improvement.
  /// Uses binary search so that the list is always sorted.
  /// priorityqueue might be better.
  void _addRegionInCorrectOrder(Region newRegion) {
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

  @override
  void updateVisibleRegions() {
    _removeUnvisibleRegions();

    _coordinatesInSpiral =
        getSpiralStartingFromCorner(_camera.topLeft, _camera.bottomRight);
    _spiralIndex = _coordinatesInSpiral.length - 1;
    while (_spiralIndex >= 0) {
      IsoCoordinate coordinate = _coordinatesInSpiral[_spiralIndex];
      Region region = _map.getRegionFromIsoCoordinate(coordinate, _camera.getLOD());
      if (!_addedRegionCoordinates.contains(region.bottomCoordinate)) {
        _addRegionInCorrectOrder(region);
        _addedRegionCoordinates.add(region.bottomCoordinate);
      }
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
  List<IsoCoordinate> getSpiralStartingFromCorner(
      IsoCoordinate topLeft, IsoCoordinate bottomRight) {
    int top = topLeft.isoY.round();
    int bottom = bottomRight.isoY.round();
    int left = topLeft.isoX.round();
    int right = bottomRight.isoX.round();
    int step = ((top - bottom).abs()) ~/ 10;

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
    return spiral.where((e) => e != null).cast<IsoCoordinate>().toList();
  }

  @override
  int visibleRegionSize() {
    return _sortedVisibleRegions.length;
  }

  @override
  List<IsoCoordinate> visualizeSpriral() {
    return _coordinatesInSpiral;
  }
}
