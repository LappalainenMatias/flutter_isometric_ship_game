import 'dart:math';
import 'package:collection/collection.dart';
import '../camera/camera.dart';
import '../coordinates/iso_coordinate.dart';
import '../map/map.dart';
import 'region.dart';

abstract class VisibleRegionsHandler {
  /// This list of regions has been sorted by the nearness value (Painter's algorithm).
  List<Region> getVisibleRegionsInDrawingOrder();

  /// Removes invisible regions and adds new visible regions.
  void update(double dt);

  int visibleRegionSize();
}

/// This class keeps track of which regions are visible and returns them in
/// correct order for drawing (Painter's algorithm).
class DefaultVisibleRegionsHandler implements VisibleRegionsHandler {
  final Camera _camera;
  final GameMap _map;

  /// These regions should always be in correct order for drawing.
  final HeapPriorityQueue<Region> _sortedVisibleRegions =
      HeapPriorityQueue<Region>((a, b) => a.nearness().compareTo(b.nearness()));

  final Set<IsoCoordinate> _addedRegionCoordinates = {};

  DefaultVisibleRegionsHandler(this._camera, this._map);

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
    /// Notice that in camera top left is actually at the top left of the screen.
    /// But in the map y coordinates increase downwards. TODO: This is confusing. Atleast a test should be added.
    var cameraRectangle = _camera.getRectangle()..addPadding(50); // we add some padding because of the terrain elevation changes
    return cameraRectangle.overlaps(region.getRectangle());
  }

  @override
  List<Region> getVisibleRegionsInDrawingOrder() {
    return _sortedVisibleRegions.toList();
  }

  @override
  void update(double dt) {
    _removeInvisibleRegions();
    _findNewVisibleRegions();
    for (var region in _sortedVisibleRegions.toList()) {
      region.update(dt);
    }
  }

  /// We go through a few random points at the screen and check what region it is part of.
  /// If the region is not already in the list of visible regions, we add it.
  /// There are more systematic ways to do this, but this is lightweight and works.
  void _findNewVisibleRegions() {
    for (var coordinate in _randomCameraCoordinates(5, _camera)) {
      var region = _map.getRegion(coordinate);
      if (!_addedRegionCoordinates.contains(region.getBottomCoordinate()) &&
          _regionIsInView(region)) {
        _sortedVisibleRegions.add(region);
        _addedRegionCoordinates.add(region.getBottomCoordinate());
      }
    }
  }

  List<IsoCoordinate> _randomCameraCoordinates(int amount, Camera camera) {
    var padding = 100;
    var random = Random();
    var points = <IsoCoordinate>[];
    for (var i = 0; i < amount; i++) {
      var x = camera.topLeft.isoX -
          padding +
          random.nextInt(camera.width().toInt() + 2 * padding);
      var y = camera.topLeft.isoY -
          padding +
          random.nextInt(camera.height().toInt() + 2 * padding);
      points.add(IsoCoordinate.fromIso(x.toDouble(), y.toDouble()));
    }
    return points;
  }

  @override
  int visibleRegionSize() {
    return _sortedVisibleRegions.length;
  }
}
