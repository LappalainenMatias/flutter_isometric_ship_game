import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/textures/texture_rects.dart';

mixin Animation {
  /// Total animation time / amount of sprites
  /// This is seconds
  final double _changeFrameEvery = 1 / 6;
  int _frameIndex = 0;
  double _timeSinceLastFrame = 0;

  void updateAnimation(double dt) {
    _timeSinceLastFrame += dt;
    if (_timeSinceLastFrame > _changeFrameEvery) {
      _timeSinceLastFrame = 0;
      _frameIndex++;
      if (_frameIndex >= TileType.values.length) {
        _frameIndex = 0;
      }
    }
  }
  
  Float32List getTexture() {
    return getTileTextureCoordinatesRect(TileType.values[_frameIndex]);
  }
}
