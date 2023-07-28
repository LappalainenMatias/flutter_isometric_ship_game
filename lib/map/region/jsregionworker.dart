import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:js/js.dart';

import '../../camera/level_of_detail.dart';

/// Todo maybe we could add the dart compile to the build process
/// Todo create own folder and file for concurrency
/// Run dart compile js -O2 -o web/regionworker.js lib/map/region/jsregionworker.dart
/// when you change anything about the map because we need to update the web/regionworker.js
@JS('jsregionworker')
external set jsregionworker(obj);

void main() {
  jsregionworker = allowInterop((args) {
    RegionCreator regionCreator = RegionCreator();
    int width = args[0];
    int height = args[1];
    double pointX = args[2];
    double pointY = args[3];
    LevelOfDetail lod = LevelOfDetail.values[args[4]];
    RegionDTO regionDTO = regionCreator.create(IsoCoordinate(pointX, pointY), width,
        height, pointX.toInt(), pointY.toInt(), lod);

    List<List<String>> encodedByLOD = [];

    for (LevelOfDetail lod in LevelOfDetail.values) {
      List<String> encoded = [];
      if (regionDTO.gameObjectsByLOD.containsKey(lod)) {
        for (var gameObject in regionDTO.gameObjectsByLOD[lod]!) {
          encoded.add(gameObject.encode());
        }
      }
      encodedByLOD.add(encoded);
    }
    return [encodedByLOD];
  });
}
