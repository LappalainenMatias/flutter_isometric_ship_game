import 'package:anki/foundation/camera/default_camera.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/region/default_region.dart';
import 'package:anki/game_specific/region/region_creation_queue.dart';
import 'package:test/test.dart';

void main() {
  test("Queue should not have same value twice", () {
    var camera = DefaultCamera();
    var creationQueue = DefaultRegionTerrainCreationQueue(camera);
    var region = DefaultRegion.empty(const IsoCoordinate(0, 0));

    creationQueue.add(region);
    creationQueue.add(region);

    expect(creationQueue.next(), isNotNull);
    expect(creationQueue.next(), isNull);
  });
}
