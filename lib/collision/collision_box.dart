import 'package:anki/coordinates/iso_coordinate.dart';

class CollisionBox {
  /// Bottom-center point in isometric coordinates.
  IsoCoordinate point;
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
