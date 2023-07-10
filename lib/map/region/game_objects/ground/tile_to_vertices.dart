import 'package:anki/map/region/game_objects/ground/tile.dart';
import '../../../../utils/cube.dart';

List singleTilePosAndCols(SingleTile tile) {
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
  );
}

List areaTilePosAndCols(AreaTile tile) {
  return createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
    widthScale: tile.width,
  );
}