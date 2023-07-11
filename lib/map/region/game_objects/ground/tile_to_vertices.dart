import 'package:anki/map/region/game_objects/ground/tile.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/vertice_dto.dart';

VerticeDTO singleTilePosAndCols(SingleTile tile) {
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
  );
}

VerticeDTO areaTilePosAndCols(AreaTile tile) {
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
    widthScale: tile.width,
  );
}