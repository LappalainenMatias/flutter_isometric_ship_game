import 'dart:math';
import 'package:anki/map/creation/tile.dart';

List<dynamic> getVertices(Point<int> coordinate, Tile tile) {
  var type = tile.type;
  int x = coordinate.x;
  int y = coordinate.y;

  /// Here we convert the coordinates to isometric coordinates
  Point<double> c_b = _convertToIsometric(Point(x.toDouble(), y.toDouble()));
  Point<double> c_c =
      _convertToIsometric(Point(x.toDouble() + 1, y.toDouble() + 1));
  Point<double> c_t =
      _convertToIsometric(Point(x.toDouble() + 2, y.toDouble() + 2));
  Point<double> l_b =
      _convertToIsometric(Point(x.toDouble(), y.toDouble() + 1));
  Point<double> l_t =
      _convertToIsometric(Point(x.toDouble() + 1, y.toDouble() + 2));
  Point<double> r_b =
      _convertToIsometric(Point(x.toDouble() + 1, y.toDouble()));
  Point<double> r_t =
      _convertToIsometric(Point(x.toDouble() + 2, y.toDouble() + 1));
  //c = center, l = left, r = right, t = top, b = bottom
  List<double> vertices = [
    c_b.x,
    c_b.y,
    c_c.x,
    c_c.y,
    l_b.x,
    l_b.y,
    c_c.x,
    c_c.y,
    l_b.x,
    l_b.y,
    l_t.x,
    l_t.y,
    c_c.x,
    c_c.y,
    l_t.x,
    l_t.y,
    c_t.x,
    c_t.y,
    c_c.x,
    c_c.y,
    c_t.x,
    c_t.y,
    r_t.x,
    r_t.y,
    c_c.x,
    c_c.y,
    r_t.x,
    r_t.y,
    r_b.x,
    r_b.y,
    c_c.x,
    c_c.y,
    r_b.x,
    r_b.y,
    c_b.x,
    c_b.y,
  ];
  List<int> colors = List.generate(18, (index) => type.color.value);
  colors[0] = type.lightShadowColor.value;
  colors[1] = type.lightShadowColor.value;
  colors[2] = type.lightShadowColor.value;
  colors[3] = type.lightShadowColor.value;
  colors[4] = type.lightShadowColor.value;
  colors[5] = type.lightShadowColor.value;
  colors[12] = type.darkShadowColor.value;
  colors[13] = type.darkShadowColor.value;
  colors[14] = type.darkShadowColor.value;
  colors[15] = type.darkShadowColor.value;
  colors[16] = type.darkShadowColor.value;
  colors[17] = type.darkShadowColor.value;
  return [vertices, colors];
}

Point<double> _convertToIsometric(Point<double> point) {
  return Point(2 * point.x - 2 * point.y, point.x + point.y);
}
