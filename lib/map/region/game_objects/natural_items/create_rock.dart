import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/vertice_dto.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';

class RockCreator {
  static const CustomColor rockTop = CustomColor.fromARGB(255, 107, 129, 124);
  static const CustomColor rockLeft = CustomColor.fromARGB(255, 91, 112, 107);
  static const CustomColor rockRight = CustomColor.fromARGB(255, 83, 105, 100);

  /// Creates rock from cubes
  static VerticeDTO positionsAndColors(Point<double> point, double elevation) {
    double random = Random().nextDouble() / 2 + 0.25;
    return createCube(
      point,
      elevation + 1,
      rockTop,
      rockLeft,
      rockRight,
      widthScale: 1.0 * random,
      heightScale: 0.8 * random,
      offset: IsoCoordinate(
        Random().nextDouble() / 10,
        Random().nextDouble() / 10,
      ),
    );
  }
}
