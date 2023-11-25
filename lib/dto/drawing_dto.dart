import 'dart:typed_data';

class DrawingDTO {
  /// This defines how we draw the game object. Check dart:ui RSTransform for more info
  final Float32List rSTransforms;
  /// This is the left, top, right and bottom coordinates of the sprite sheet
  final Float32List rects;

  const DrawingDTO(this.rSTransforms, this.rects);
}
