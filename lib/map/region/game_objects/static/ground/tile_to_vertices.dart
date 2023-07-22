import 'package:anki/map/region/game_objects/static/ground/tile.dart';

import '../../../../../utils/cube.dart';
import '../../../../../utils/vertice_dto.dart';

VerticeDTO singleTilePosAndCols(SingleTile tile) {
  // todo only a test
  if (tile.elevation > 0) {
    return createCube(
      tile.coordinate,
      0,
      tile.type.top,
      tile.type.left,
      tile.type.right,
      heightScale: tile.elevation,
    );
  }
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
  );
}

VerticeDTO areaTilePosAndCols(AreaTile tile) {
  if (tile.elevation > 0) {
    return createCube(
      tile.coordinate,
      0,
      tile.type.top,
      tile.type.left,
      tile.type.right,
      widthScale: tile.width,
      heightScale: tile.elevation,
    );
  }
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
    widthScale: tile.width,
  );
}