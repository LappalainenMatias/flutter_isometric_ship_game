import 'package:anki/map/iso_coordinate.dart';

/// Isometric cube has 7 corners and 3 visible sides.
/// From the 7 corners we can create 6 triangles that make up the cube.
/// The scale makes the cubes thinner/wider/shorter/taller
List createCube(
  IsoCoordinate coordinate,
  double tileHeight,
  int colorTop,
  int colorLeft,
  int colorRight, {
  double heightScale = 1,
  double widthScale = 1,
  IsoCoordinate offset = const IsoCoordinate(0, 0),
}) {
  double x = coordinate.x.toDouble() + tileHeight;
  double y = coordinate.y.toDouble() + tileHeight;
  final cenBot = IsoCoordinate(x, y) + offset;
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
