import 'dart:math';
import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/tile/tile_creator.dart';

import '../cube.dart';
import '../tile.dart';

const CustomColor rockTop = CustomColor.fromARGB(255, 107, 129, 124);
const CustomColor rockLeft = CustomColor.fromARGB(255, 91, 112, 107);
const CustomColor rockRight = CustomColor.fromARGB(255, 83, 105, 100);

/// Used for reducing symmetry
IsoCoordinate offset = const IsoCoordinate(0, 0);

/// Creates rock from cubes
///    _____
///   |____|
/// |______|
/// |________|
List rockPosAndCol(Tile tile) {
  offset = IsoCoordinate(
    Random().nextDouble() / 10,
    Random().nextDouble() / 10,
  );
  int random = Random().nextInt(100);

  /// Todo: This could be refactored to single function which creates random width and height
  if (random < 70) {
    return _smallRock(tile);
  } else if (random < 95) {
    return _mediumRock(tile);
  } else {
    return _largeRock(tile);
  }
}

List _smallRock(Tile tile) {
  var base = createCube(
    tile.coordinate,
    tile.height + 1,
    rockTop,
    rockLeft,
    rockRight,
    widthScale: 0.4,
    heightScale: 0.3,
    offset: offset,
  );
  return base;
}

List _mediumRock(Tile tile) {
  var base = createCube(
    tile.coordinate,
    tile.height + 1,
    rockTop,
    rockLeft,
    rockRight,
    widthScale: 0.75,
    heightScale: 0.6,
    offset: offset,
  );
  return base;
}

List _largeRock(Tile tile) {
  var base = createCube(
    tile.coordinate,
    tile.height + 1,
    rockTop,
    rockLeft,
    rockRight,
    widthScale: 0.9,
    heightScale: 0.7,
    offset: offset,
  );
  return base;
}
