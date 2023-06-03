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
///  ________
/// |________|
/// |________|
/// |________|
///    |__|
///    |__|
List sprucePosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 2,
    Random().nextDouble() / 2,
  );
  int random = Random().nextInt(100);
  if (random < 95) {
    return _spruce(tile);
  } else {
    return _spruceTrunk(tile);
  }
}

List _spruce(Tile tile) {
  var trunk = _spruceTrunk(tile);
  var foliage1 = _spruceFoliageFirstLayer(tile);
  trunk[0].addAll(foliage1[0]);
  trunk[1].addAll(foliage1[1]);
  return trunk;
}

List _spruceFoliageFirstLayer(Tile tile) {
  return createCube(
    tile.coordinate,
    tile.height + 2.00,
    foliageTop.value,
    foliageLeft.value,
    foliageRight.value,
    heightScale: 2.5 * (Random().nextDouble() + 0.5),
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
    heightScale: 2.0 * (Random().nextDouble() + 0.5),
    offset: offset,
  );
}
