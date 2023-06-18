import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';
import '../tile.dart';

const CustomColor rockTop = CustomColor.fromARGB(255, 107, 129, 124);
const CustomColor rockLeft = CustomColor.fromARGB(255, 91, 112, 107);
const CustomColor rockRight = CustomColor.fromARGB(255, 83, 105, 100);

/// Creates rock from cubes
List rockPosAndCol(Tile tile) {
  double random = Random().nextDouble() / 2 + 0.25;
  return createCube(
    tile.coordinate,
    tile.height + 1,
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
