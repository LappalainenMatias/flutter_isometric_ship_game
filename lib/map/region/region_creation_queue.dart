import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import '../../camera/camera.dart';

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
/// It prioritizes regions that have the same level of detail as the camera.
class RegionCreationQueueImpl implements RegionCreationQueue {
  final List<AddGameObjectsTo> _queue = [];

  late final Camera _camera;

  RegionCreationQueueImpl(this._camera);

  /// Tracks that the queue has each item only once
  final Set<String> _identifier = {};

  @override
  AddGameObjectsTo? next() {
    /// First create regions with the current level of detail
    var lod = _camera.getLOD();
    for (int i = 0; i < _queue.length; i++) {
      if (_queue[i].lod == lod) {
        var buildNext = _queue[i];
        _identifier.remove(buildNext.identifier);
        _queue.removeAt(i);
        return buildNext;
      }
    }

    /// Create rergion with any level of detail
    if (_queue.isNotEmpty) {
      var buildNext = _queue[0];
      _identifier.remove(buildNext.identifier);
      _queue.removeAt(0);
      return buildNext;
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
