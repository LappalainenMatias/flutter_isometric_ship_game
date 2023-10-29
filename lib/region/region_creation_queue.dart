import 'dart:collection';

import 'package:anki/coordinates/iso_coordinate.dart';
import '../../camera/camera.dart';
import '../coordinates/coordinate_utils.dart';

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
/// It prioritizes regions that are in the camera view
class RegionCreationQueueImpl implements RegionCreationQueue {
  final List<AddGameObjectsTo> _queue = [];

  late final Camera _camera;

  /// This variable was created to make sure that same region does not get
  /// created twice. This can happen in the time between next() and when the
  /// region is actually created.
  final HashSet<String> _created = HashSet();

  RegionCreationQueueImpl(this._camera);

  /// Tracks that the queue has each item only once
  final Set<String> _queueIdentifiers = {};

  @override
  AddGameObjectsTo? next() {
    for (int i = 0; i < _queue.length; i++) {
      var buildNext = _queue[i];
      _queue.removeAt(i);
      _queueIdentifiers.remove(buildNext.identifier);
      if (isInView(buildNext.regionCoordinate, _camera)) {
        _created.add(buildNext.identifier);
        return buildNext;
      }
    }
    return null;
  }

  @override
  void add(AddGameObjectsTo regionBuildRules) {
    if (_queue.length > 200) {
      // Prevents the queue from growing too large
      return;
    }
    if (_queueIdentifiers.contains(regionBuildRules.identifier)) {
      return;
    }
    if (_created.contains(regionBuildRules.identifier)) {
      return;
    }
    _queue.add(regionBuildRules);
    _queueIdentifiers.add(regionBuildRules.identifier);
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

/// Todo this class is unnecessary because lod does not exist anymore
class AddGameObjectsTo {
  IsoCoordinate regionCoordinate;

  AddGameObjectsTo(this.regionCoordinate);

  String get identifier {
    return "${regionCoordinate.isoX.toInt()},${regionCoordinate.isoY.toInt()}";
  }
}
