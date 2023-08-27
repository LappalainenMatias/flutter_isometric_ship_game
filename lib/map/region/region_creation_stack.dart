import 'dart:math';
import 'dart:collection';
import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/utils/iso_coordinate.dart';
import '../../utils/coordinate_utils.dart';

/// The idea of this class is to:
/// 1. Have a stack of regions that we want to create
/// 2. Decide do we actually want to create the region
/// (For example: region is not visible anymore)
class RegionCreationQueue {
  final Queue<RegionBuildRule> _queue = Queue();

  /// We do not want to add the same region multiple times
  /// Because of that we need to keep track of existing items.
  /// Set has O(1) contains method.
  final Set<String> _identifier = {};
  final Camera _camera;

  RegionCreationQueue(this._camera);

  /// Returns the region we want to create next
  RegionBuildRule? next() {
    if (_queue.isEmpty) {
      return null;
    }
    RegionBuildRule first = _queue.removeFirst();
    while (!_regionShouldBeCreated(first)) {
      if (_queue.isEmpty) {
        return null;
      }
      first = _queue.removeFirst();
      _identifier.remove(first.identifier);
    }
    return first;
  }

  void add(RegionBuildRule regionBuildRules) {
    if (_isInQueue(regionBuildRules)) {
      return;
    }
    _queue.add(regionBuildRules);
    _identifier.add(regionBuildRules.identifier);
  }

  bool _isInQueue(RegionBuildRule regionBuildRules) {
    return _identifier.contains(regionBuildRules.identifier);
  }

  bool _regionShouldBeCreated(RegionBuildRule regionBuildRules) {
    /// If the queue is small there is no need to prioritize
    if (_queueIsSmall()) {
      return true;
    }

    /// Do not create region which is not visible
    IsoCoordinate isoCoordinate =
        regionPointToIsoCoordinate(regionBuildRules.coordinate);
    if (!isInView(isoCoordinate, _camera)) {
      return false;
    }

    /// Do not create regions with unnecessary high level of detail
    if (regionBuildRules.lod.tileMinWidth <
        _camera.getLevelOfDetail().tileMinWidth) {
      return false;
    }

    return true;
  }

  bool _queueIsSmall() {
    return _queue.length < 10;
  }
}

class RegionBuildRule {
  Point<int> coordinate;
  LevelOfDetail lod;

  RegionBuildRule(this.coordinate, this.lod);

  String get identifier {
    return "${coordinate.x},${coordinate.y},${lod.tileMinWidth}";
  }
}
