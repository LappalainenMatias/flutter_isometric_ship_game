import 'package:anki/camera/camera.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/region/region_creation_queue.dart';
import 'package:test/test.dart';

void main() {
  test("Queue should not have same value twice", () {
    Camera camera = Camera();
    RegionCreationQueue creationQueue = RegionCreationQueueImpl(camera);

    creationQueue.add(AddGameObjectsTo(const IsoCoordinate(0, 0)));
    creationQueue.add(AddGameObjectsTo(const IsoCoordinate(0, 0)));

    expect(creationQueue.next(), isNotNull);
    expect(creationQueue.next(), isNull);
  });
}
