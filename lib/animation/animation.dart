import 'dart:typed_data';
import 'package:anki/textures/texture_rects.dart';

mixin Animation {
  /// Seconds
  final double animationLength = 1;
  int _frameIndex = 0;
  double _timeSinceLastFrame = 0;

  void updateAnimation(double dt) {
    if (currentAnimation().isEmpty) {
      return;
    }
    _timeSinceLastFrame += dt;
    if (_timeSinceLastFrame > animationLength / currentAnimation().length) {
      _timeSinceLastFrame = 0;
      _frameIndex++;
      if (_frameIndex >= currentAnimation().length) {
        _frameIndex = 0;
      }
    }
  }

  Float32List getTexture() {
    if (_frameIndex > currentAnimation().length) {
      _frameIndex = 0;
    }
    if (currentAnimation().isEmpty) {
      return getTileTextureCoordinatesRect(SpriteSheetItem.tileRed);
    }
    return getTileTextureCoordinatesRect(currentAnimation()[_frameIndex]);
  }

  List<SpriteSheetItem> currentAnimation();
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
