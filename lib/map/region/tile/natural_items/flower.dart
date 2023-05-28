import 'dart:math';
import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';

import '../cube.dart';
import '../tile.dart';

const Color purpleTop = Color.fromARGB(255, 150, 76, 150);
const Color purpleLeft = Color.fromARGB(255, 141, 69, 141);
const Color purpleRight = Color.fromARGB(255, 129, 63, 129);
const Color whiteTop = Color.fromARGB(255, 225, 203, 112);
const Color whiteLeft = Color.fromARGB(255, 213, 192, 102);
const Color whiteRight = Color.fromARGB(255, 199, 178, 92);
const Color stemTop = Color.fromARGB(255, 10, 150, 43);
const Color stemLeft = Color.fromARGB(255, 7, 131, 37);
const Color stemRight = Color.fromARGB(255, 5, 112, 30);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates flower from cubes
///   _______
///  |______|
///   |____|
///      \
///       \
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
    whiteTop.value,
    whiteLeft.value,
    whiteRight.value,
  );
  var flower2 = _flowerPosition2(
    tile,
    whiteTop.value,
    whiteLeft.value,
    whiteRight.value,
  );
  var flower3 = _flowerPosition3(
    tile,
    whiteTop.value,
    whiteLeft.value,
    whiteRight.value,
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
    purpleTop.value,
    purpleLeft.value,
    purpleRight.value,
  );
  var flower2 = _flowerPosition2(
    tile,
    purpleTop.value,
    purpleLeft.value,
    purpleRight.value,
  );
  var flower3 = _flowerPosition3(
    tile,
    purpleTop.value,
    purpleLeft.value,
    purpleRight.value,
  );
  if (random < 4) flower1[0].addAll(flower2[0]);
  if (random < 4) flower1[1].addAll(flower2[1]);
  if (random < 7) flower1[0].addAll(flower3[0]);
  if (random < 7) flower1[1].addAll(flower3[1]);
  return flower1;
}

List _flowerPosition3(Tile tile, int top, int left, int right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop.value,
    stemLeft.value,
    stemRight.value,
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

List _flowerPosition1(Tile tile, int top, int left, int right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.0,
    stemTop.value,
    stemLeft.value,
    stemRight.value,
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

List _flowerPosition2(Tile tile, int top, int left, int right) {
  var stem = createCube(
    tile.coordinate,
    tile.height + 1.00,
    stemTop.value,
    stemLeft.value,
    stemRight.value,
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
