import 'dart:collection';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/coordinates/iso_coordinate.dart';

import '../../camera/camera.dart';
import '../../coordinates/coordinate_utils.dart';

abstract class RegionCreationQueue {
  /// Returns the region we should create next
  /// Returns null if there is no region to create
  RegionBuildRule? next();

  /// Adds a region to the queue if it is not already in the queue
  void add(RegionBuildRule regionBuildRules);

  /// Returns the number of items in the queue
  int size();
}

/// The idea of this class is to return the region we want to create next.
/// It uses queue and FIFO principle.
class RegionCreationQueueImpl implements RegionCreationQueue {
  final Queue<RegionBuildRule> _queue = Queue();

  RegionCreationQueueImpl();

  /// We do not want to add the same region multiple times
  /// Because of that we need to keep track of existing items.
  final Set<String> _identifier = {};

  @override
  RegionBuildRule? next() {
    if (_queue.isNotEmpty) {
      var next = _queue.removeFirst();
      _identifier.remove(next.identifier);
      return next;
    }
    return null;
  }

  @override
  void add(RegionBuildRule regionBuildRules) {
    if (_identifier.contains(regionBuildRules.identifier)) {
      return;
    }
    _queue.add(regionBuildRules);
    _identifier.add(regionBuildRules.identifier);
  }

  @override
  toString() {
    return _queue.length.toString();
  }

  @override
  int size() {
    return _queue.length;
  }
}

class RegionBuildRule {
  IsoCoordinate isoCoordinate;
  LevelOfDetail lod;

  RegionBuildRule(this.lod, this.isoCoordinate);

  String get identifier {
    return "${isoCoordinate.isoX.toInt()},${isoCoordinate.isoY.toInt()},${lod.index}";
  }
}
