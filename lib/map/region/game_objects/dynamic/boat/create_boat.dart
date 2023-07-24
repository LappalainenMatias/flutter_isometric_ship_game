import 'package:anki/utils/cube.dart';
import 'package:anki/utils/vertice_dto.dart';
import '../../../../../utils/custom_color.dart';
import '../../../../../utils/iso_coordinate.dart';

class CreateBoat {
  static const CustomColor boatTop = CustomColor.fromARGB(255, 157, 129, 124);
  static const CustomColor boatLeft = CustomColor.fromARGB(255, 141, 112, 107);
  static const CustomColor boatRight = CustomColor.fromARGB(255, 123, 105, 100);

  VerticeDTO positionsAndColors(IsoCoordinate isoCoordinate, double elevation) {
    return createCube(isoCoordinate, elevation, boatTop, boatLeft, boatRight,
        widthScale: 2, heightScale: 2);
  }
}
