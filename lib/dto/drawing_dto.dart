import 'dart:typed_data';

class DrawingDTO {
  /// This defines how we draw the game object. Check dart:ui RSTransform for more info
  Float32List rSTransforms;
  /// This is the left, top, right, bottom coordinates of the sprite sheet
  Float32List rects;

  DrawingDTO(this.rSTransforms, this.rects);
}
