import '../coordinates/iso_coordinate.dart';

class CollisionBox {
  late double leftX;
  late double rightX;
  late double bottomY;
  late double topY;
  late double bottomZ;
  late double topZ;

  CollisionBox(IsoCoordinate topLeft, double sideWidth, double elevation) {
    final point = topLeft.toPoint();
    leftX = point.x;
    rightX = point.x + sideWidth;
    bottomY = point.y;
    topY = point.y + sideWidth;
    bottomZ = elevation;
    topZ = elevation + sideWidth;
  }

  bool overlaps(CollisionBox other) {
    bool xOverlap = (leftX < other.rightX) && (other.leftX < rightX);
    bool yOverlap = (bottomY < other.topY) && (other.bottomY < topY);
    bool zOverlap = (bottomZ < other.topZ) && (other.bottomZ < topZ);
    return xOverlap && yOverlap && zOverlap;
  }

  void update(
      IsoCoordinate newIsoCoordinate, double newWidth, double newElevation) {
    final point = newIsoCoordinate.toPoint();
    leftX = point.x;
    rightX = point.x + newWidth;
    bottomY = point.y;
    topY = point.y + newWidth;
    bottomZ = newElevation;
    topZ = newElevation + newWidth;
  }
}
