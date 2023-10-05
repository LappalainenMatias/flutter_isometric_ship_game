import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/map/region/region_creation_queue.dart';
import 'package:test/test.dart';

void main() {
  test("Queue should not have same value twice", () {
    RegionCreationQueue creationQueue = RegionCreationQueueImpl();

    creationQueue.add(
        AddGameObjectsTo(LevelOfDetail.zoomlevel_0, const IsoCoordinate(0, 0)));
    creationQueue.add(
        AddGameObjectsTo(LevelOfDetail.zoomlevel_0, const IsoCoordinate(0, 0)));

    expect(creationQueue.next(), isNotNull);
    expect(creationQueue.next(), isNull);
  });
}
