import 'dart:collection';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/coordinates/iso_coordinate.dart';

import '../../camera/camera.dart';
import '../../coordinates/coordinate_utils.dart';

abstract class RegionCreationQueue {
  /// Returns the region we should create next
  /// Returns null if there is no region to create
  AddGameObjectsTo? next();

  /// Adds a region to the queue if it is not already in the queue
  void add(AddGameObjectsTo regionBuildRules);

  /// Returns the number of items in the queue
  int size();
}

/// The idea of this class is to return the region we want to create next.
/// It uses queue and FIFO principle.
class RegionCreationQueueImpl implements RegionCreationQueue {
  final Queue<AddGameObjectsTo> _queue = Queue();

  RegionCreationQueueImpl();

  /// We do not want to add the same region multiple times
  /// Because of that we need to keep track of existing items.
  final Set<String> _identifier = {};

  @override
  AddGameObjectsTo? next() {
    if (_queue.isNotEmpty) {
      var next = _queue.removeFirst();
      _identifier.remove(next.identifier);
      return next;
    }
    return null;
  }

  @override
  void add(AddGameObjectsTo regionBuildRules) {
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

class AddGameObjectsTo {
  IsoCoordinate regionCoordinate;
  LevelOfDetail lod;

  AddGameObjectsTo(this.lod, this.regionCoordinate);

  String get identifier {
    return "${regionCoordinate.isoX.toInt()},${regionCoordinate.isoY.toInt()},${lod.index}";
  }
}
