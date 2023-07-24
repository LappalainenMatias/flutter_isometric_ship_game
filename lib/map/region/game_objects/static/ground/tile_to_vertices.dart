import 'package:anki/map/region/game_objects/static/ground/tile.dart';

import '../../../../../utils/cube.dart';
import '../../../../../utils/vertice_dto.dart';

VerticeDTO singleTileVertices(SingleTile tile) {
  // todo only a test. remove the heightscale elevation at some point
  if (tile.elevation > 0) {
    return createCube(
      tile.isoCoordinate,
      0,
      tile.type.top,
      tile.type.left,
      tile.type.right,
      heightScale: tile.elevation,
    );
  }
  return createCube(
    tile.isoCoordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
  );
}

VerticeDTO areaTileVertices(AreaTile tile) {
  // todo only a test. remove the heightscale elevation at some point
  if (tile.elevation > 0) {
    return createCube(
      tile.isoCoordinate,
      0,
      tile.type.top,
      tile.type.left,
      tile.type.right,
      widthScale: tile.width,
      heightScale: tile.elevation,
    );
  }
  return createCube(
    tile.isoCoordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
    widthScale: tile.width,
  );
}