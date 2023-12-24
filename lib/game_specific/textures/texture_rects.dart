import 'dart:typed_data';


/// Tells where the graphics are located in the sprite sheet
/// Useful tool https://codeshack.io/images-sprite-sheet-generator/
/// The A1, A2,... are animation frames.
/// The D1, D2,... are depth values.
enum SpriteSheetItem {
  tileGrass(0, 26),
  tileSand(0, 29),
  tileRock(0, 28),
  tileRockD1(0, 18),
  tileRockD2(0, 19),
  tileRockD3(0, 20),
  tileRockD4(0, 21),
  tileSandD1(0, 22),
  tileSandD2(0, 23),
  tileSandD3(0, 24),
  tileSandD4(0, 25),
  collisionBox(0, 27),
  shipRedDownA1(0, 0, cutOff: 0.5),
  shipRedDownA2(0, 1, cutOff: 0.5),
  shipRedDownA3(0, 2, cutOff: 0.5),
  shipRedLeftA1(1, 0, cutOff: 0.5),
  shipRedLeftA2(1, 1, cutOff: 0.5),
  shipRedLeftA3(1, 2, cutOff: 0.5),
  shipRedRightA1(2, 0, cutOff: 0.5),
  shipRedRightA2(2, 1, cutOff: 0.5),
  shipRedRightA3(2, 2, cutOff: 0.5),
  shipRedUpA1(3, 0, cutOff: 0.5),
  shipRedUpA2(3, 1, cutOff: 0.5),
  shipRedUpA3(3, 2, cutOff: 0.5),
  shipRedDownLeftA1(0, 3, cutOff: 0.5),
  shipRedDownLeftA2(0, 4, cutOff: 0.5),
  shipRedDownLeftA3(0, 5, cutOff: 0.5),
  shipRedDownRightA1(1, 3, cutOff: 0.5),
  shipRedDownRightA2(1, 4, cutOff: 0.5),
  shipRedDownRightA3(1, 5, cutOff: 0.5),
  shipRedUpLeftA1(2, 3, cutOff: 0.5),
  shipRedUpLeftA2(2, 4, cutOff: 0.5),
  shipRedUpLeftA3(2, 5, cutOff: 0.5),
  shipRedUpRightA1(3, 3, cutOff: 0.5),
  shipRedUpRightA2(3, 4, cutOff: 0.5),
  shipRedUpRightA3(3, 5, cutOff: 0.5);

  const SpriteSheetItem(this.row, this.column, {this.cutOff = 0});

  final int row;
  final int column;
  final double cutOff; // Used for trimming the borders

  Float32List getBorders() {
    /// Currently all textures are 32x32 pixels
    const double textureWidth = 32;
    // left, top, right, bottom coordinates from the sprite sheet
    return Float32List.fromList([
      textureWidth * (column) + cutOff,
      textureWidth * (row) + cutOff,
      textureWidth * (column + 1) - cutOff,
      textureWidth * (row + 1) - cutOff,
    ]);
  }
}

