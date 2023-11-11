import 'dart:typed_data';
import '../game_objects/static/ground/tile_type.dart';


/// Tells where the graphics are located in the sprite sheet
/// Useful tool https://codeshack.io/images-sprite-sheet-generator/
/// The A1, A2,... are animation frames.
enum SpriteSheetItem {
  tileGreen(0, 19),
  tileRed(0, 20),
  tileGrey(0, 18),
  shipRedDownA1(0, 0),
  shipRedDownA2(0, 1),
  shipRedDownA3(0, 2),
  shipRedLeftA1(1, 0),
  shipRedLeftA2(1, 1),
  shipRedLeftA3(1, 2),
  shipRedRightA1(2, 0),
  shipRedRightA2(2, 1),
  shipRedRightA3(2, 2),
  shipRedUpA1(3, 0),
  shipRedUpA2(3, 1),
  shipRedUpA3(3, 2),
  shipRedDownLeftA1(0, 3),
  shipRedDownLeftA2(0, 4),
  shipRedDownLeftA3(0, 5),
  shipRedDownRightA1(1, 3),
  shipRedDownRightA2(1, 4),
  shipRedDownRightA3(1, 5),
  shipRedUpLeftA1(2, 3),
  shipRedUpLeftA2(2, 4),
  shipRedUpLeftA3(2, 5),
  shipRedUpRightA1(3, 3),
  shipRedUpRightA2(3, 4),
  shipRedUpRightA3(3, 5);

  const SpriteSheetItem(this.row, this.column);

  final int row;
  final int column;
}

const double textureWidth = 32;
const double cutOff = 0.4; // Used for trimming the borders

Float32List getTileTextureCoordinatesRect(SpriteSheetItem type) {
  // left, top, right, bottom
  return Float32List.fromList([
    textureWidth * (type.column) + cutOff,
    textureWidth * (type.row) + cutOff,
    textureWidth * (type.column + 1) - cutOff,
    textureWidth * (type.row + 1) - cutOff,
  ]);
}
