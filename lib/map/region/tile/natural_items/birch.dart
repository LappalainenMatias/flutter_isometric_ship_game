import 'dart:math';
import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';

import '../cube.dart';
import '../tile.dart';

const Color trunkTop = Color.fromARGB(255, 197, 187, 181);
const Color trunkLeft = Color.fromARGB(255, 183, 173, 167);
const Color trunkRight = Color.fromARGB(255, 173, 162, 156);
const Color lineTop = Color.fromARGB(255, 108, 105, 104);
const Color lineLeft = Color.fromARGB(255, 89, 86, 85);
const Color lineRight = Color.fromARGB(255, 91, 87, 87);
const Color foliageTop = Color.fromARGB(255, 15, 169, 52);
const Color foliageLeft = Color.fromARGB(255, 10, 152, 44);
const Color foliageRight = Color.fromARGB(255, 8, 133, 38);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates tree from cubes
///   _______
///  |______|
///   |______|
/// |________|
/// |________|
///    |__|
///    |__|
List birch(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 80) {
    return _birch(tile);
  } else if (random < 95) {
    return _birchLowFoliage(tile);
  } else {
    return _randomTrunk(tile);
  }
}

List _birchLowFoliage(Tile tile) {
  var trunk = _randomTrunk(tile);
  var foliage1 = _birchFoliageFirstLayer(tile);
  var foliage2 = _birchFoliageSecondLayer(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  trunk[0].addAll(foliage2[0]);
  trunk[1].addAll(foliage2[1]);
  return trunk;
}

List _randomTrunk(Tile tile) {
  if (Random().nextInt(2) < 1) {
    return _birchTrunk2(tile);
  } else {
    return _birchTrunk(tile);
  }
}

List _birch(Tile tile) {
  var trunk = _randomTrunk(tile);
  var foliage1 = _birchFoliageFirstLayer(tile);
  var foliage2 = _birchFoliageSecondLayer(tile);
  var foliage3 = _birchFoliageThirdLayer(tile);
  var foliage4 = _birchFoliageFourthLayer(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  trunk[0].addAll(foliage2[0]);
  trunk[1].addAll(foliage2[1]);
  trunk[0].addAll(foliage3[0]);
  trunk[1].addAll(foliage3[1]);
  trunk[0].addAll(foliage4[0]);
  trunk[1].addAll(foliage4[1]);
  return trunk;
}

List _birchFoliageFirstLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 3.80,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    widthScale: 1.25,
    offset: offset,
  );
}

List _birchFoliageSecondLayer(Tile tile) {
  return createCube(tile.coordinate, tile.height + 2.7, foliageTop.value,
      foliageLeft.value, foliageRight.value,
      widthScale: 0.7,
      heightScale: 1.0,
      offset: offset + const IsoCoordinate(1.0, 0.1));
}

List _birchFoliageThirdLayer(Tile tile) {
  return createCube(tile.coordinate, tile.height + 3.0, foliageTop.value,
      foliageLeft.value, foliageRight.value,
      widthScale: 0.75,
      heightScale: 1.2,
      offset: offset + const IsoCoordinate(-1.0, 0.0));
}

List _birchFoliageFourthLayer(Tile tile) {
  return createCube(tile.coordinate, tile.height + 3.0, foliageTop.value,
      foliageLeft.value, foliageRight.value,
      widthScale: 0.5, heightScale: 0.7, offset: offset);
}

List _birchTrunk(Tile tile) {
  List trunkStart = createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 1.5,
    offset: offset,
  );
  List blackLine = createCube(
    tile.coordinate,
    tile.height + 2.6,
    lineTop.value,
    lineLeft.value,
    lineRight.value,
    widthScale: 0.25,
    heightScale: 0.2,
    offset: offset,
  );
  List trunkEnd = createCube(
    tile.coordinate,
    tile.height + 2.8,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 1.5,
    offset: offset,
  );
  trunkStart[0].addAll(blackLine[0]);
  trunkStart[1].addAll(blackLine[1]);
  trunkStart[0].addAll(trunkEnd[0]);
  trunkStart[1].addAll(trunkEnd[1]);
  return trunkStart;
}

List _birchTrunk2(Tile tile) {
  List trunkStart = createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 0.8,
    offset: offset,
  );
  List blackLine = createCube(
    tile.coordinate,
    tile.height + 2.0,
    lineTop.value,
    lineLeft.value,
    lineRight.value,
    widthScale: 0.25,
    heightScale: 0.2,
    offset: offset,
  );
  List trunkMiddle = createCube(
    tile.coordinate,
    tile.height + 2.2,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 0.40,
    offset: offset,
  );
  List blackLineTop = createCube(
    tile.coordinate,
    tile.height + 2.4,
    lineTop.value,
    lineLeft.value,
    lineRight.value,
    widthScale: 0.25,
    heightScale: 0.2,
    offset: offset,
  );
  List trunkEnd = createCube(
    tile.coordinate,
    tile.height + 2.6,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 1.5,
    offset: offset,
  );
  trunkStart[0].addAll(blackLine[0]);
  trunkStart[1].addAll(blackLine[1]);
  trunkStart[0].addAll(trunkMiddle[0]);
  trunkStart[1].addAll(trunkMiddle[1]);
  trunkStart[0].addAll(blackLineTop[0]);
  trunkStart[1].addAll(blackLineTop[1]);
  trunkStart[0].addAll(trunkEnd[0]);
  trunkStart[1].addAll(trunkEnd[1]);
  return trunkStart;
}
