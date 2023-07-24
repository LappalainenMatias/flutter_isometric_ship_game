import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';

import '../../../../../utils/cube.dart';
import '../../../../../utils/custom_color.dart';
import '../../../../../utils/vertice_dto.dart';

class SpruceCreator {

  static const CustomColor trunkTop = CustomColor.fromARGB(255, 126, 56, 5);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 119, 53, 5);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 101, 46, 4);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 14, 145, 45);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 9, 122, 36);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 6, 101, 28);

  /// Creates tree from cubes
  static VerticeDTO positionsAndColors(IsoCoordinate isoCoordinate, double elevation) {
    /// Todo we have to remove all the random stuff because the trees might get relocated
    int random = Random().nextInt(100);
    if (random < 95) {
      return _spruce(isoCoordinate, elevation);
    } else {
      return _spruceTrunk(isoCoordinate, elevation);
    }
  }

  static VerticeDTO _spruce(IsoCoordinate isoCoordinate, double elevation) {
    var trunk = _spruceTrunk(isoCoordinate, elevation);
    trunk.addVerticeDTO(_spruceFoliage(isoCoordinate, elevation));
    return trunk;
  }

  static VerticeDTO _spruceFoliage(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(
      isoCoordinate,
      elevation + 1.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: (Random().nextDouble() / 5 + 1.0),
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static VerticeDTO _spruceTrunk(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(
      isoCoordinate,
      elevation + 0.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.25,
      heightScale: 2.0 * (Random().nextDouble() + 0.5),
    );
  }
}