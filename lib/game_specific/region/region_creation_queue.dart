import 'dart:collection';

import '../../foundation/camera/camera.dart';
import '../../foundation/coordinates/coordinate_utils.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/region/region.dart';

abstract class RegionTerrainCreationQueue {
  /// Returns the region we should create next
  /// Returns null if there is no region to create
  Region? next();

  /// Adds a region to the queue if it is not already in the queue
  void add(Region region);

  /// Returns the number of items in the queue
  int size();
}

/// Returns the region we should add terrain next
/// Priority is based on how close the region is to the camera center
class DefaultRegionTerrainCreationQueue implements RegionTerrainCreationQueue {
  final int _maxQueueSize = 20;

  final Set<Region> _queue = {};

  late final Camera _camera;

  /// This variable was created to make sure that same region does not get
  /// created twice. This can happen in the time between next() and when the
  /// region is actually created. TODO: what happens if region gets removed?
  final HashSet<IsoCoordinate> _created = HashSet();

  DefaultRegionTerrainCreationQueue(this._camera);

  @override
  Region? next() {
    if (_queue.isEmpty) {
      return null;
    }
    // Find the region which is closes to the camera center
    var closestRegion = _queue.first;
    var lowestDistance =
        closestRegion.getBottomCoordinate().manhattanDistanceTo(_camera.center);
    for (var region in _queue) {
      var newDistance =
          region.getBottomCoordinate().manhattanDistanceTo(_camera.center);
      if (newDistance < lowestDistance) {
        lowestDistance = newDistance;
        closestRegion = region;
      }
    }
    _queue.remove(closestRegion);
    return closestRegion;
  }

  @override
  void add(Region region) {
    if (_queue.length >= _maxQueueSize) {
      return;
    }
    if (_created.contains(region.getBottomCoordinate())) {
      return;
    }
    if (_queue.contains(region)) {
      return;
    }
    _queue.add(region);
  }

  @override
  int size() {
    return _queue.length;
  }
}
