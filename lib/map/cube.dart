
import 'dart:math';
import 'dart:ui';

List createCube(
    Point<double> coordinate,
    double tileHeight,
    double scale,
    Color top,
    Color left,
    Color right,
    ) {
  double x = coordinate.x.toDouble() + tileHeight;
  double y = coordinate.y.toDouble() + tileHeight;

  // c = center, l = left, r = right, t = top, b = bottom
  // We create the cube from 6 triangles. Two for each visible side
  Point<double> c_b = _convertToIsometric(Point(x, y));
  Point<double> c_c = _convertToIsometric(Point(x + scale, y + scale));
  Point<double> c_t = _convertToIsometric(Point(x + 2 * scale, y + 2 * scale));
  Point<double> l_b = _convertToIsometric(Point(x, y + scale));
  Point<double> l_t = _convertToIsometric(Point(x + scale, y + 2 * scale));
  Point<double> r_b = _convertToIsometric(Point(x + scale, y));
  Point<double> r_t = _convertToIsometric(Point(x + 2 * scale, y + scale));
  List<double> positions = [
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
  List<int> colors = [];
  colors.addAll(List.generate(6, (index) => left.value));
  colors.addAll(List.generate(6, (index) => top.value));
  colors.addAll(List.generate(6, (index) => right.value));
  return [positions, colors];
}

Point<double> _convertToIsometric(Point<double> point) {
  return Point(2 * point.x - 2 * point.y, point.x + point.y);
}