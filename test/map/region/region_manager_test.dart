import 'dart:collection';

import 'package:anki/camera/camera.dart';
import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/map_dto.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("Get vertices in region manager which uses js worker", () async {
    Camera camera = Camera(center: const IsoCoordinate.fromIso(0, 0));
    camera.zoomLevel = 0.1;
    RegionManager regionManager = RegionManager(camera);
    regionManager.updateVisibleRegions();
    MapDTO mapDTO = regionManager.getVerticesInView(LevelOfDetail.lod1x1);
    expect(mapDTO.verticesCount > 0, true);
    expect(mapDTO.underWater.isNotEmpty, true);
    expect(mapDTO.aboveWater.isNotEmpty, true);
  });
}
