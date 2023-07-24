import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';

import '../../../../../utils/cube.dart';
import '../../../../../utils/custom_color.dart';

class RockCreator {
  static const CustomColor rockTop = CustomColor.fromARGB(255, 140, 136, 120);
  static const CustomColor rockLeft = CustomColor.fromARGB(255, 120, 116, 100);
  static const CustomColor rockRight = CustomColor.fromARGB(255, 100, 96, 80);

  /// Creates rock from cubes
  static VerticeDTO positionsAndColors(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(
      isoCoordinate,
      elevation,
      rockTop,
      rockLeft,
      rockRight,
      widthScale: 0.6,
      heightScale: 0.35,
    );
  }
}
