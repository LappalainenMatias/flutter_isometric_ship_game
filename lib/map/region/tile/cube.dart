import 'dart:ui';
import 'dart:math';
import 'package:anki/map/iso_coordinate.dart';

const Color blueColor = Color(0xFF012E8F);

/// Creates a list of positions and colors
/// Isometric cube has 7 corners and 3 visible sides.
/// From the 7 corners we can create 6 triangles that make up the cube.
/// The scale makes the cubes thinner/wider/shorter/taller
/// offset can be used to reduce symmetry by moving the cube slightly
List createCube(
  Point<double> coordinate,
  double tileHeight,
  int colorTop,
  int colorLeft,
  int colorRight, {
  double heightScale = 1,
  double widthScale = 1,
  IsoCoordinate offset = const IsoCoordinate.fromIso(0, 0),
}) {
  if (tileHeight < 0) {
    double depthPercentage = (tileHeight / 5).abs();
    if (depthPercentage > 1) {
      colorTop = blueColor.value;
      colorLeft = blueColor.value;
      colorRight = blueColor.value;
    } else {
      colorTop = mix(Color(colorTop), blueColor, depthPercentage).value;
      colorLeft = mix(Color(colorLeft), blueColor, depthPercentage).value;
      colorRight = mix(Color(colorRight), blueColor, depthPercentage).value;
    }
  }
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
  List<int> colors = [];
  colors.addAll(List.generate(6, (index) => colorLeft));
  colors.addAll(List.generate(6, (index) => colorTop));
  colors.addAll(List.generate(6, (index) => colorRight));
  return [positions, colors];
}

Color mix(Color color1, Color color2, double percent) {
  return Color.lerp(color1, color2, percent)!;
}
