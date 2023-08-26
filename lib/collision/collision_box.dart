import 'package:anki/utils/iso_coordinate.dart';

class CollisionBox {
  IsoCoordinate point; // Bottom-center point in isometric coordinates.
  double width;
  double height;

  CollisionBox(this.point, this.width, this.height);

  double get left => point.isoX - (width / 2);
  double get right => point.isoX + (width / 2);
  double get bottom => point.isoY - (height / 2);
  double get top => point.isoY + (height / 2);

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
