import 'dart:math';

Point<int> toIsoMetricPoint(Point<int> point) {
  return Point(point.x * 2 - point.y, point.y + point.x);
}