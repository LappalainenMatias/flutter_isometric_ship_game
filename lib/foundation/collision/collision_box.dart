import '../coordinates/iso_coordinate.dart';

class CollisionBox {
  late double leftX;
  late double rightX;
  late double bottomY;
  late double topY;
  late double bottomZ;
  late double topZ;

  CollisionBox(IsoCoordinate topLeft, double sideWidth, double elevation) {
    var point = topLeft.isoToCartesian();
    leftX = point.$1;
    rightX = point.$1 + sideWidth;
    bottomY = point.$2;
    topY = point.$2 + sideWidth;
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
    var point = newIsoCoordinate.isoToCartesian();
    leftX = point.$1;
    rightX = point.$1 + newWidth;
    bottomY = point.$2;
    topY = point.$2 + newWidth;
    bottomZ = newElevation;
    topZ = newElevation + newWidth;
  }
}
