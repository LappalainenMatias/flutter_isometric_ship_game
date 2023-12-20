import 'dart:typed_data';


/// Defines the data which can be drawn by the drawRawAtlas() method in dart:ui
class RenderingData {
  /// This defines where and how we draw the game object. Check dart:ui RSTTransform for more info
  final Float32List rSTTransforms;
  /// This defines what we draw. Left, top, right and bottom coordinates of the sprite sheet
  final Float32List rects;

  const RenderingData(this.rSTTransforms, this.rects);
}
