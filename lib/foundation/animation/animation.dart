import 'dart:typed_data';

mixin Animation {
  double animationLengthInSeconds = 1;
  double _timeSinceLastFrameInSeconds = 0;
  int _frameIndex = 0;

  /// List of top, left, bottom, right coordinates of the sprite sheet
  /// To create an animation we loop through this list
  List<Float32List> animationParts = [];

  /// Updates the SpriteSheetItem to be drawn
  void updateAnimation(double dt) {
    if (animationParts.isEmpty) {
      return;
    }
    _timeSinceLastFrameInSeconds += dt;
    if (_timeSinceLastFrameInSeconds > animationLengthInSeconds / animationParts.length) {
      _timeSinceLastFrameInSeconds = 0;
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
      throw Exception('No animation defined');
    }
    return animationParts[_frameIndex];
  }
}
