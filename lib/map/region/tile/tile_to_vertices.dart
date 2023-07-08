import 'package:anki/map/region/tile/tile.dart';
import '../../../utils/cube.dart';

List getPosAndCols(Tile tile) {
  List? posAndCols = createCube(
    tile.coordinate,
    tile.elevation,
    tile.type.top,
    tile.type.left,
    tile.type.right,
    widthScale: tile.width,
  );
  var function = tile.naturalItem.positionsAndColors;
  if (function != null) {
    var posAndCol = function(tile);
    posAndCols[0].addAll(posAndCol[0]);
    posAndCols[1].addAll(posAndCol[1]);
  }
  return posAndCols;
}