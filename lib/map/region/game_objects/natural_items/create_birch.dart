import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';

class BirchCreator {
  static const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 164, 152, 147);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

  /// Creates tree from cubes
  static List positionsAndColors(Point<double> point, double elevation) {
    int random = Random().nextInt(100);
    if (random < 95) {
      return _birch(point, elevation);
    } else {
      return _birchTrunk(point, elevation);
    }
  }

  static List _birch(Point<double> point, double elevation) {
    var trunk = _birchTrunk(point, elevation);
    var foliage1 = _birchFoliage(point, elevation);
    trunk[0].addAll(foliage1[0]);
    trunk[1].addAll(foliage1[1]);
    return trunk;
  }

  static List _birchFoliage(Point<double> point, double elevation) {
    return createCube(
      point,
      elevation + 2.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: 1.25,
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }


  static List _birchTrunk(Point<double> point, double elevation) {
    return createCube(
      point,
      elevation + 1.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.30,
      heightScale: 2.00 * (Random().nextDouble() + 0.5),
    );
  }
}