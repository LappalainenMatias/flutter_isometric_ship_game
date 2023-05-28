import 'dart:math';
import 'dart:ui';
import 'package:anki/map/iso_coordinate.dart';
import '../cube.dart';
import '../tile.dart';

const Color trunkTop = Color.fromARGB(255, 126, 56, 5);
const Color trunkLeft = Color.fromARGB(255, 119, 53, 5);
const Color trunkRight = Color.fromARGB(255, 101, 46, 4);
const Color foliageTop = Color.fromARGB(255, 14, 145, 45);
const Color foliageLeft = Color.fromARGB(255, 9, 122, 36);
const Color foliageRight = Color.fromARGB(255, 6, 101, 28);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates tree from cubes
///     __
///    |__|
///   |____|
///  |______|
/// |________|
///    |__|
///    |__|
List sprucePosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 80) {
    return _spruce(tile);
  } else if (random < 95) {
    return _spruceLowFoliage(tile);
  } else {
    return _spruceWithoutFoliage(tile);
  }
}

List _spruce(Tile tile) {
  var trunk = _spruceTrunk(tile);
  var foliage1 = _spruceFoliageFirstLayer(tile);
  var foliage2 = _spruceFoliageSecondLayer(tile);
  var foliage3 = _spruceFoliageThirdLayer(tile);
  var foliage4 = _spruceFoliageFourthLayer(tile);
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

List _spruceWithoutFoliage(Tile tile) {
  var trunk = _spruceTrunk(tile);
  return trunk;
}

List _spruceLowFoliage(Tile tile) {
  var trunk = _spruceTrunk(tile);
  var foliage2 = _spruceFoliageSecondLayer(tile);
  var foliage3 = _spruceFoliageThirdLayer(tile);
  var foliage4 = _spruceFoliageFourthLayer(tile);
  trunk[0].addAll(foliage2[0]);
  trunk[1].addAll(foliage2[1]);
  trunk[0].addAll(foliage3[0]);
  trunk[1].addAll(foliage3[1]);
  trunk[0].addAll(foliage4[0]);
  trunk[1].addAll(foliage4[1]);
  return trunk;
}

List _spruceFoliageFirstLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 2.00,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    offset: offset,
  );
}

List _spruceFoliageSecondLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 3.1,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    widthScale: 0.7,
    offset: offset,
  );
}

List _spruceFoliageThirdLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 4.2,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    widthScale: 0.5,
    heightScale: 0.8,
    offset: offset,
  );
}

List _spruceFoliageFourthLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 5.1,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    widthScale: 0.3,
    heightScale: 0.8,
    offset: offset,
  );
}

List _spruceTrunk(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 1.25,
    trunkTop.value,
    trunkLeft.value,
    trunkRight.value,
    widthScale: 0.25,
    heightScale: 3.0,
    offset: offset,
  );
}
