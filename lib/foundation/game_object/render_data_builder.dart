import 'dart:typed_data';

import '../coordinates/iso_coordinate.dart';
import '../rendering_data/rendering_data.dart';

///This uses the RSTransform from dart:ui. We copied the implementation so that it can be used concurrently in web
///
///final double scos = math.cos(rotation) * scale;
///final double ssin = math.sin(rotation) * scale;
///final double tx = translateX + -scos * anchorX + ssin * anchorY;
///final double ty = translateY + -ssin * anchorX - scos * anchorY;
///return RSTransform(scos, ssin, tx, ty);
///
RenderingData createRenderingData(
    Float32List rect,
    final IsoCoordinate topLeft,
    final double elevation, {
      double scale = 1,
    }) {
  final center = topLeft - IsoCoordinate(elevation, elevation);

  scale *= 0.12656738281; // Adjusted scale for 32x32 pixel sprite items.
  final tx = center.isoX - 16 * scale; // Inline halfAssetWidth and scos
  final ty = center.isoY - 16 * scale; // Inline halfAssetWidth and scos

  Float32List rSTransforms = Float32List(4);
  rSTransforms[0] = scale; // scos is always equal to scale as rotation is 0
  rSTransforms[1] = 0; // ssin is always 0 as rotation is 0
  rSTransforms[2] = tx;
  rSTransforms[3] = ty;

  return RenderingData(rSTransforms, rect);
}