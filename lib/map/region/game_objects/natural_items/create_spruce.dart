import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';
import '../../game_objects/ground/tile.dart';

class SpruceCreator {

  static const CustomColor trunkTop = CustomColor.fromARGB(255, 126, 56, 5);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 119, 53, 5);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 101, 46, 4);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 14, 145, 45);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 9, 122, 36);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 6, 101, 28);

  /// Creates tree from cubes
  static List positionsAndColors(Point<double> point, double elevation) {
    int random = Random().nextInt(100);
    if (random < 95) {
      return _spruce(point, elevation);
    } else {
      return _spruceTrunk(point, elevation);
    }
  }

  static List _spruce(Point<double> point, double elevation) {
    var trunk = _spruceTrunk(point, elevation);
    var foliage1 = _spruceFoliage(point, elevation);
    trunk[0].addAll(foliage1[0]);
    trunk[1].addAll(foliage1[1]);
    return trunk;
  }

  static List _spruceFoliage(Point<double> point, double elevation) {
    return createCube(
      point,
      elevation + 2.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: (Random().nextDouble() / 5 + 1.0),
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static List _spruceTrunk(Point<double> point, double elevation) {
    return createCube(
      point,
      elevation + 1.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.25,
      heightScale: 2.0 * (Random().nextDouble() + 0.5),
    );
  }
}