import 'package:anki/map/region/region_creator.dart';
import 'package:js/js.dart';

import '../../utils/iso_coordinate.dart';

///Run dart compile js -O2 -o web/regionworker.js lib/map/region/jsregionworker.dart
///When you change anything about the map like the region/tile/natural_items/tiletype...
///Because we need to update the web/regionworker.js

@JS('jsregionworker')
external set jsregionworker(obj);
void main() {
  jsregionworker = allowInterop((args) {
    RegionCreator regionCreator = RegionCreator();
    var res = regionCreator.create(IsoCoordinate.fromIso(args[0], args[1]), args[2], args[3], args[4], args[5]);
    return [res.regionCoordinate.isoX, res.regionCoordinate.isoY, res.verticesCount,
      res.aboveWaterPositions, res.aboveWaterColors,
      res.underWaterPositions, res.underWaterColors, res.gameObjects];
  });
}