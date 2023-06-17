import 'dart:math';
import 'package:anki/map/iso_coordinate.dart';
import '../cube.dart';
import '../custom_color.dart';
import '../tile.dart';

const CustomColor rockTop = CustomColor.fromARGB(255, 107, 129, 124);
const CustomColor rockLeft = CustomColor.fromARGB(255, 91, 112, 107);
const CustomColor rockRight = CustomColor.fromARGB(255, 83, 105, 100);

/// Creates rock from cubes
///  ________
/// |________|
/// |________|
List rockPosAndCol(Tile tile) {
  double random = Random().nextDouble();
  return createCube(
    tile.coordinate,
    tile.height + 1,
    rockTop,
    rockLeft,
    rockRight,
    widthScale: 0.9 * random,
    heightScale: 0.7 * random,
    offset: IsoCoordinate(
      Random().nextDouble() / 10,
      Random().nextDouble() / 10,
    ),
  );
}
