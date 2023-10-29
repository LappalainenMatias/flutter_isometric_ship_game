import 'package:anki/region/region_creation_queue.dart';

/// Does nothing
class RegionCreationQueueMock extends RegionCreationQueue {
  @override
  void add(AddGameObjectsTo regionBuildRules) {}

  @override
  AddGameObjectsTo? next() {
    return null;
  }

  @override
  int size() {
    return 0;
  }
}
