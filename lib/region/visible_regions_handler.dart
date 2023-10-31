import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/region/region.dart';
import 'package:collection/collection.dart';
import '../../camera/camera.dart';
import '../../coordinates/coordinate_utils.dart';
import '../map/map.dart';

abstract class VisibleRegionsHandler {
  /// This list of regions has been sorted by the nearness value (Painter's algorithm).
  List<Region> getVisibleRegionsInDrawingOrder();

  /// Removes unvisible regions and adds new visible regions.
  void update();

  int visibleRegionSize();

  /// Used for debugging
  List<IsoCoordinate> visualizeSpriral();
}

/// This class keeps track of which regions are visible and returns them in
/// correct order for drawing (Painter's algorithm).
class VisibleRegionsHandlerImpl implements VisibleRegionsHandler {
  final Camera _camera;
  final GameMap _map;

  /// These regions should always be in correct order for drawing.
  final HeapPriorityQueue<Region> _sortedVisibleRegions =
      HeapPriorityQueue<Region>((a, b) => a.nearness().compareTo(b.nearness()));

  final Set<IsoCoordinate> _addedRegionCoordinates = {};

  VisibleRegionsHandlerImpl(this._camera, this._map);

  int _spiralIndex = 0;

  List<IsoCoordinate> _coordinatesInSpiral = [];

  void _removeUnvisibleRegions() {
    var remove = [];
    for (var region in _sortedVisibleRegions.unorderedElements) {
      if (region.borders == null) {
        continue;
      }
      if (!regionIsInView(region)) {
        remove.add(region);
      }
    }
    for (var region in remove) {
      _sortedVisibleRegions.remove(region);
      _addedRegionCoordinates.remove(region.bottomCoordinate);
    }
  }

  bool regionIsInView(Region region) {
    if (region.borders == null) {
      return false;
    }
    return isInView(region.borders!.top, _camera) ||
        isInView(region.borders!.bottom, _camera) ||
        isInView(region.borders!.left, _camera) ||
        isInView(region.borders!.right, _camera);
  }

  @override
  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions.toList();
  }

  @override
  void update() {
    _removeUnvisibleRegions();
    _findNewVisibleRegions();
  }

  void _findNewVisibleRegions() {
    _coordinatesInSpiral =
        _getSpiralStartingFromCorner(_camera.topLeft, _camera.bottomRight);
    _spiralIndex = _coordinatesInSpiral.length - 1;
    while (_spiralIndex >= 0) {
      IsoCoordinate coordinate = _coordinatesInSpiral[_spiralIndex];
      Region region = _map.getRegion(coordinate);
      if (!_addedRegionCoordinates.contains(region.bottomCoordinate) &&
          regionIsInView(region)) {
        _sortedVisibleRegions.add(region);
        _addedRegionCoordinates.add(region.bottomCoordinate);
      }
      _spiralIndex--;
    }
  }

  /// Returns a list of coordinates which are between the two coordinates in spiral form.
  /// We do this so that the regions at the center of the screen are created first.
  /// From:
  /// [1, 2, 3]
  /// [4, 5, 6]
  /// [7, 8, 9]
  /// to:
  /// [1, 2, 3, 6, 9, 8, 7, 4, 5]
  List<IsoCoordinate> _getSpiralStartingFromCorner(
      IsoCoordinate topLeft, IsoCoordinate bottomRight) {
    int top = topLeft.isoY.round();
    int bottom = bottomRight.isoY.round();
    int left = topLeft.isoX.round();
    int right = bottomRight.isoX.round();
    int step = ((top - bottom).abs()) ~/ 20;

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
