import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../cube.dart';
import '../../../../utils/custom_color.dart';
import '../tile.dart';

const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
const CustomColor trunkRight = CustomColor.fromARGB(255, 164, 152, 147);
const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates tree from cubes
List birchPosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 95) {
    return _birch(tile);
  } else {
    return _birchTrunk(tile);
  }
}

List _birch(Tile tile) {
  var trunk = _birchTrunk(tile);
  var foliage1 = _birchFoliage(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  return trunk;
}

List _birchFoliage(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 2.00,
    foliageTop,
    foliageLeft,
    foliageRight,
    widthScale: 1.25,
    heightScale: 3.5 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}


List _birchTrunk(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop,
    trunkLeft,
    trunkRight,
    widthScale: 0.30,
    heightScale: 2.00 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}