import 'dart:math';
import 'dart:typed_data';

import '../coordinates/iso_coordinate.dart';
import '../rendering_data/rendering_data.dart';

RenderingData createRenderingData(
  Float32List rect,
  final IsoCoordinate topLeft,
  final double elevation, {
  double scale = 1,
}) {
  final center = topLeft - IsoCoordinate(elevation, elevation);

  // TODO: make this dynamic it now assumes 32x32 pixel sprite items
  const halfAssetWidth = 32 / 2;
  scale *= 0.12656738281; // This number works for 32x32 pixel sprite items.
  var rotation = 0;
  final double scos = cos(rotation) * scale;
  final double ssin = sin(rotation) * scale;
  final tx = center.isoX + -scos * halfAssetWidth + ssin * halfAssetWidth;
  final ty = center.isoY - ssin * halfAssetWidth - scos * halfAssetWidth;

  Float32List rSTransforms = Float32List(4);
  rSTransforms[0] = scos;
  rSTransforms[1] = ssin;
  rSTransforms[2] = tx;
  rSTransforms[3] = ty;
  return RenderingData(rSTransforms, rect);
}

//This uses the rSTransform from dart:ui which cannot be run concurrently in web.
//
//final double scos = math.cos(rotation) * scale;
//final double ssin = math.sin(rotation) * scale;
//final double tx = translateX + -scos * anchorX + ssin * anchorY;
//final double ty = translateY + -ssin * anchorX - scos * anchorY;
//return RSTransform(scos, ssin, tx, ty);
//
