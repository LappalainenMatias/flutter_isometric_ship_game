import 'dart:math';

double euclideanDistance(double x1, double y1, double x2, double y2) {
  return sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

double manhattanDistance(var x1, var y1, var x2, var y2) {
  return (x1 - x2).abs() + (y1 - y2).abs();
}