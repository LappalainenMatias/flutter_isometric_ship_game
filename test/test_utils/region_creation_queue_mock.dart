

import 'package:anki/game_specific/region/region_creation_queue.dart';

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
