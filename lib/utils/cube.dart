import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';

import 'custom_color.dart';

const CustomColor blueColor = CustomColor.fromARGB(255, 1, 46, 143);

/// Returns a list of positions and colors. Everything visible at the map uses this
/// function (except whater shader).
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side). The 3 visible sides
/// have different colors (colorTop, colorLeft, colorRight).
/// The heightScale/widthScale makes the cubes thinner/wider/shorter/taller.
/// Offset can be used to reduce symmetry by moving the cube slightly
List createCube(
  Point<double> coordinate,
  double tileHeight,
  CustomColor colorTop,
  CustomColor colorLeft,
  CustomColor colorRight, {
  double heightScale = 1,
  double widthScale = 1,
  IsoCoordinate offset = const IsoCoordinate.fromIso(0, 0),
}) {
  if (tileHeight < 0) {
    // Adds blueish color to underwater cubes
    double depthPercentage = 0.20 + ((tileHeight - 0.20) / 5).abs();
    if (depthPercentage > 1) {
      colorTop = blueColor;
      colorLeft = blueColor;
      colorRight = blueColor;
    } else {
      colorTop = mix(colorTop, blueColor, depthPercentage);
      colorLeft = mix(colorLeft, blueColor, depthPercentage);
      colorRight = mix(colorRight, blueColor, depthPercentage);
    }
  }
  // Creates the 7 corners of the cube
  final cenBot =
      IsoCoordinate(coordinate.x + tileHeight, coordinate.y + tileHeight) +
          offset;
  final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
  final lefBot = cenBot + IsoCoordinate(0, widthScale);
  final lefTop = cenCen + IsoCoordinate(0, widthScale);
  final rigBot = cenBot + IsoCoordinate(widthScale, 0);
  final rigTop = cenCen + IsoCoordinate(widthScale, 0);
  final cenTop = lefTop + IsoCoordinate(widthScale, 0);
  List<double> positions = [
    cenBot.isoX,
    cenBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefBot.isoX,
    lefBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefBot.isoX,
    lefBot.isoY,
    lefTop.isoX,
    lefTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    lefTop.isoX,
    lefTop.isoY,
    cenTop.isoX,
    cenTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    cenTop.isoX,
    cenTop.isoY,
    rigTop.isoX,
    rigTop.isoY,
    cenCen.isoX,
    cenCen.isoY,
    rigTop.isoX,
    rigTop.isoY,
    rigBot.isoX,
    rigBot.isoY,
    cenCen.isoX,
    cenCen.isoY,
    rigBot.isoX,
    rigBot.isoY,
    cenBot.isoX,
    cenBot.isoY,
  ];
  List<int> colors = List<int>.filled(18, 0, growable: true);
  for (var i = 0; i < 6; i++) {
    colors[i] = colorLeft.value;
    colors[i + 6] = colorTop.value;
    colors[i + 12] = colorRight.value;
  }
  return [positions, colors];
}

CustomColor mix(CustomColor color1, CustomColor color2, double percent) {
  return CustomColor.fromNormalizedARGB(
    _lerp(color1.normalizedA, color2.normalizedA, percent),
    _lerp(color1.normalizedR, color2.normalizedR, percent),
    _lerp(color1.normalizedG, color2.normalizedG, percent),
    _lerp(color1.normalizedB, color2.normalizedB, percent),
  );
}

double _lerp(double a, double b, double t) {
  return a + (b - a) * t;
}
