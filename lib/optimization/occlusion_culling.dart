
/// Todo WIP The idea is to remove triangles that are not visible (behind other triangles).
/// This could reduce even 1 / 3 of the triangles because the left and right side of the
/// ground tiles are often behind other tiles.
List<double> occlusionCulling(List<double> vertices) {
  int triangleCount = vertices.length ~/ 6;

  List<bool> isVisible = List<bool>.filled(triangleCount, true);

  for (int i = 0; i < triangleCount; i++) {
    for (int j = i + 1; j < triangleCount; j++) {
      if (isVisible[i] && covers(vertices, j * 6, vertices, i * 6)) {
        isVisible[i] = false;
        break;
      }
    }
  }

  List<double> culledVertices = [];
  for (int i = 0; i < triangleCount; i++) {
    if (isVisible[i]) {
      culledVertices.addAll(vertices.sublist(i * 6, (i + 1) * 6));
    }
  }

  return culledVertices;
}

bool covers(List<double> triangle1, int offset1, List<double> triangle2, int offset2) {
  for (int i = 0; i < 3; i++) {
    if (!isInsideTriangle(triangle1, offset1, triangle2[i * 2 + offset2], triangle2[i * 2 + 1 + offset2])) {
      return false;
    }
  }
  return true;
}

bool isInsideTriangle(List<double> triangle, int offset, double x, double y) {
  int intersections = 0;

  for (int i = 0; i < 3; i++) {
    double x1 = triangle[(i * 2 + offset) % 6];
    double y1 = triangle[(i * 2 + 1 + offset) % 6];
    double x2 = triangle[((i + 1) * 2 + offset) % 6];
    double y2 = triangle[((i + 1) * 2 + 1 + offset) % 6];

    if (rayIntersectsSegment(x, y, x1, y1, x2, y2)) {
      intersections++;
    }
  }

  return intersections % 2 == 1;
}

bool rayIntersectsSegment(double px, double py, double x1, double y1, double x2, double y2) {
  double rx1 = px;
  double ry1 = py;
  double rx2 = px + 1;
  double ry2 = py;

  double denominator = ((rx2 - rx1) * (y2 - y1)) - ((ry2 - ry1) * (x2 - x1));
  double numerator1 = ((ry1 - y1) * (x2 - x1)) - ((rx1 - x1) * (y2 - y1));
  double numerator2 = ((ry1 - y1) * (rx2 - rx1)) - ((rx1 - x1) * (ry2 - ry1));

  // Detect coincident lines
  if (denominator == 0) return numerator1 == 0 && numerator2 == 0;

  double r = numerator1 / denominator;
  double s = numerator2 / denominator;

  return (r > 0 && r < 1) && (s >= 0 && s <= 1);
}

