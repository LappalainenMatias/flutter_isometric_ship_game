import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';
import '../tile.dart';

const CustomColor purpleTop = CustomColor.fromARGB(255, 150, 76, 150);
const CustomColor purpleLeft = CustomColor.fromARGB(255, 141, 69, 141);
const CustomColor purpleRight = CustomColor.fromARGB(255, 129, 63, 129);
const CustomColor whiteTop = CustomColor.fromARGB(255, 225, 203, 112);
const CustomColor whiteLeft = CustomColor.fromARGB(255, 213, 192, 102);
const CustomColor whiteRight = CustomColor.fromARGB(255, 199, 178, 92);
const CustomColor stemTop = CustomColor.fromARGB(255, 10, 150, 43);
const CustomColor stemLeft = CustomColor.fromARGB(255, 7, 131, 37);
const CustomColor stemRight = CustomColor.fromARGB(255, 5, 112, 30);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates flower from cubes
List flowerPosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 3,
    Random().nextDouble() / 3,
  );
  int random = Random().nextInt(10);
  if (random < 5) {
    return _yellowFlower(tile);
  } else {
    return _purpleFlower(tile);
  }
}

List _yellowFlower(Tile tile) {
  int random = Random().nextInt(10);
  var flower1 = _flowerPosition1(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  var flower2 = _flowerPosition2(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  var flower3 = _flowerPosition3(
    tile,
    whiteTop,
    whiteLeft,
    whiteRight,
  );
  if (random < 4) flower1[0].addAll(flower2[0]);
  if (random < 4) flower1[1].addAll(flower2[1]);
  if (random < 7) flower1[0].addAll(flower3[0]);
  if (random < 7) flower1[1].addAll(flower3[1]);
  return flower1;
}

List _purpleFlower(Tile tile) {
  int random = Random().nextInt(10);
  var flower1 = _flowerPosition1(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  var flower2 = _flowerPosition2(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  var flower3 = _flowerPosition3(
    tile,
    purpleTop,
    purpleLeft,
    purpleRight,
  );
  if (random < 4) flower1[0].addAll(flower2[0]);
  if (random < 4) flower1[1].addAll(flower2[1]);
  if (random < 7) flower1[0].addAll(flower3[0]);
  if (random < 7) flower1[1].addAll(flower3[1]);
  return flower1;
}

List _flowerPosition3(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.0, 0.2),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.2,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.0, 0.2),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}

List _flowerPosition1(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.0,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.3, 0.3),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.15,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.3, 0.3),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}

List _flowerPosition2(
    Tile tile, CustomColor top, CustomColor left, CustomColor right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop,
    stemLeft,
    stemRight,
    widthScale: 0.05,
    heightScale: 0.4,
    offset: offset + const IsoCoordinate(0.2, 0.0),
  );
  var flower = createCube(
    tile.coordinate,
    tile.height + 1.20,
    top,
    left,
    right,
    widthScale: 0.2,
    heightScale: 0.1,
    offset: offset + const IsoCoordinate(0.2, 0.0),
  );
  stem[0].addAll(flower[0]);
  stem[1].addAll(flower[1]);
  return stem;
}
