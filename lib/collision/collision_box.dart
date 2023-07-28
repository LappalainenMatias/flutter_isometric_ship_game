import 'package:anki/utils/iso_coordinate.dart';

class CollisionBox {
  IsoCoordinate startPoint;
  double width;
  double height;

  CollisionBox(this.startPoint, this.width, this.height);

  double get left => startPoint.isoX;
  double get right => startPoint.isoX + width;
  double get bottom => startPoint.isoY;
  double get top => startPoint.isoY + height;

  bool overlaps(CollisionBox other) {
    if (right <= other.left || other.right <= left) {
      return false;
    }
    if (top <= other.bottom || other.top <= bottom) {
      return false;
    }
    return true;
  }
}