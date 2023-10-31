import 'package:anki/camera/camera.dart';
import 'package:anki/map/map.dart';
import 'package:anki/region/region_creation_queue.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Neighbouring regions', () {
    var camera = Camera();
    var regionCreationQueue = RegionCreationQueueImpl(camera);
    final GameMap map = GameMap(camera);
    /// todo
  });
}