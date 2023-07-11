import 'dart:math';
import 'package:anki/utils/cube.dart';
import 'package:anki/utils/vertice_dto.dart';

import '../../../../utils/custom_color.dart';

class CreateBoat {
  static const CustomColor boatTop = CustomColor.fromARGB(255, 157, 129, 124);
  static const CustomColor boatLeft = CustomColor.fromARGB(255, 141, 112, 107);
  static const CustomColor boatRight = CustomColor.fromARGB(255, 123, 105, 100);

  VerticeDTO positionsAndColors(Point<double> point, double elevation) {
    return createCube(point, elevation, boatTop, boatLeft, boatRight,
        widthScale: 2, heightScale: 2);
  }
}
