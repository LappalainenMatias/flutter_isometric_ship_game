import 'dart:math';

import 'package:anki/foundation/coordinates/rectangle.dart';
import 'package:collection/collection.dart';
import '../camera/camera.dart';
import '../coordinates/iso_coordinate.dart';
import '../map/map.dart';
import 'region.dart';

abstract class VisibleRegionsHandler {
  /// This list of regions has been sorted by the nearness value (Painter's algorithm).
  List<Region> getVisibleRegionsInDrawingOrder();

  /// Removes unvisible regions and adds new visible regions.
  void update();

  int visibleRegionSize();
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

  void _removeInvisibleRegions() {
    var remove = [];
    for (var region in _sortedVisibleRegions.unorderedElements) {
      if (!_regionIsInView(region)) {
        remove.add(region);
      }
    }
    for (var region in remove) {
      _sortedVisibleRegions.remove(region);
      _addedRegionCoordinates.remove(region.getBottomCoordinate());
    }
  }

  bool _regionIsInView(Region region) {
    var rectangle = region.getRectangle();
    var cameraRectangle = Rectangle(
      top: _camera.topLeft.isoY,
      bottom: _camera.bottomRight.isoY,
      left: _camera.topLeft.isoX,
      right: _camera.bottomRight.isoX,
    );
    return rectangle.overlaps(cameraRectangle);
  }

  @override
  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions.toList();
  }

  @override
  void update() {
    _removeInvisibleRegions();
    _findNewVisibleRegions();
  }

  /// We go through a few random points at the screen and check what region it is part of.
  /// If the region is not already in the list of visible regions, we add it.
  /// There are more systematic ways to do this, but this is lightweight and works.
  void _findNewVisibleRegions() {
    for (var coordinate in _randomCameraCoordinates(5, _camera)) {
      Region region = _map.getRegion(coordinate);
      if (!_addedRegionCoordinates.contains(region.getBottomCoordinate()) &&
          _regionIsInView(region)) {
        _sortedVisibleRegions.add(region);
        _addedRegionCoordinates.add(region.getBottomCoordinate());
      }
    }
  }

  List<IsoCoordinate> _randomCameraCoordinates(int amount, Camera camera) {
    var random = Random();
    var points = <IsoCoordinate>[];
    for (var i = 0; i < amount; i++) {
      var x = camera.topLeft.isoX + random.nextInt(camera.width().toInt());
      var y = camera.topLeft.isoY + random.nextInt(camera.height().toInt());
      points.add(IsoCoordinate.fromIso(x.toDouble(), y.toDouble()));
    }
    return points;
  }

  @override
  int visibleRegionSize() {
    return _sortedVisibleRegions.length;
  }
}
