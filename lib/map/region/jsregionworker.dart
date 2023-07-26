import 'package:anki/map/region/region_creator.dart';
import 'package:js/js.dart';
import 'dart:math';

import '../camera/camera.dart';

/// Run dart compile js -O2 -o web/regionworker.js lib/map/region/jsregionworker.dart
/// when you change anything about the map because we need to update the web/regionworker.js
@JS('jsregionworker')
external set jsregionworker(obj);

void main() {
  jsregionworker = allowInterop((args) {
    RegionCreator regionCreator = RegionCreator();
    int x = args[0];
    int y = args[1];
    int width = args[2];
    int height = args[3];
    int offsetX = args[4];
    int offsetY = args[5];
    LevelOfDetail lod = LevelOfDetail.values[args[6]];

    RegionDTO res = regionCreator.create(Point(x.toDouble(), y.toDouble()),
        width, height, offsetX, offsetY, lod);

    List<String> encoded = [];
    for (var gameObject in res.gameObjects) {
      encoded.add(gameObject.encode());
    }

    return [res.regionCoordinate.x, res.regionCoordinate.y, encoded];
  });
}
