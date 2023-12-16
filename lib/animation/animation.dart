import 'dart:typed_data';
import 'package:anki/textures/texture_rects.dart';

mixin Animation {
  /// Seconds
  final double animationLength = 1;
  /// Seconds
  double _timeSinceLastFrame = 0;
  int _frameIndex = 0;

  List<SpriteSheetItem> animationParts = [];

  /// Updates the SpriteSheetItem to be drawn
  void updateAnimation(double dt) {
    if (animationParts.isEmpty) {
      return;
    }
    _timeSinceLastFrame += dt;
    if (_timeSinceLastFrame > animationLength / animationParts.length) {
      _timeSinceLastFrame = 0;
      _frameIndex++;
      if (_frameIndex >= animationParts.length) {
        _frameIndex = 0;
      }
    }
  }

  Float32List getSpriteSheetRect() {
    if (_frameIndex > animationParts.length) {
      _frameIndex = 0;
    }
    if (animationParts.isEmpty) {
      return getTileTextureCoordinatesRect(SpriteSheetItem.tileSand);
    }
    return getTileTextureCoordinatesRect(animationParts[_frameIndex]);
  }
}

/// Red ship animations
const redShipDown = [
  SpriteSheetItem.shipRedDownA1,
  SpriteSheetItem.shipRedDownA2,
  SpriteSheetItem.shipRedDownA3
];
const redShipUp = [
  SpriteSheetItem.shipRedUpA1,
  SpriteSheetItem.shipRedUpA2,
  SpriteSheetItem.shipRedUpA3
];
const redShipLeft = [
  SpriteSheetItem.shipRedLeftA1,
  SpriteSheetItem.shipRedLeftA2,
  SpriteSheetItem.shipRedLeftA3
];
const redShipRight = [
  SpriteSheetItem.shipRedRightA1,
  SpriteSheetItem.shipRedRightA2,
  SpriteSheetItem.shipRedRightA3
];
const redShipDownLeft = [
  SpriteSheetItem.shipRedDownLeftA1,
  SpriteSheetItem.shipRedDownLeftA2,
  SpriteSheetItem.shipRedDownLeftA3
];
const redShipDownRight = [
  SpriteSheetItem.shipRedDownRightA1,
  SpriteSheetItem.shipRedDownRightA2,
  SpriteSheetItem.shipRedDownRightA3
];
const redShipUpLeft = [
  SpriteSheetItem.shipRedUpLeftA1,
  SpriteSheetItem.shipRedUpLeftA2,
  SpriteSheetItem.shipRedUpLeftA3
];
const redShipUpRight = [
  SpriteSheetItem.shipRedUpRightA1,
  SpriteSheetItem.shipRedUpRightA2,
  SpriteSheetItem.shipRedUpRightA3
];
