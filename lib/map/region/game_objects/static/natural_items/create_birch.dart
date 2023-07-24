import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
import '../../../../../utils/cube.dart';
import '../../../../../utils/custom_color.dart';

class BirchCreator {
  static const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 164, 152, 147);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

  /// Creates tree from cubes
  static VerticeDTO positionsAndColors(IsoCoordinate isoCoordinate, double elevation) {
    int random = Random().nextInt(100);
    if (random < 95) {
      return _birch(isoCoordinate, elevation);
    } else {
      return _birchTrunk(isoCoordinate, elevation);
    }
  }

  static VerticeDTO _birch(IsoCoordinate isoCoordinate, double elevation) {
    var birch = _birchTrunk(isoCoordinate, elevation);
    birch.addVerticeDTO(_birchFoliage(isoCoordinate, elevation));
    return birch;
  }

  static VerticeDTO _birchFoliage(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(
      isoCoordinate,
      elevation + 1.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: 1.25,
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }


  static VerticeDTO _birchTrunk(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(
      isoCoordinate,
      elevation + 0.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.30,
      heightScale: 2.00 * (Random().nextDouble() + 0.5),
    );
  }
}