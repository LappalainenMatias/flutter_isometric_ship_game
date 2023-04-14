import 'dart:ui';
import '../cube.dart';
import '../tile.dart';

const Color trunkTop =  Color.fromARGB(255, 126, 56, 5);
const Color trunkLeft =  Color.fromARGB(255, 119, 53, 5);
const Color trunkRight =  Color.fromARGB(255, 101, 46, 4);

const Color foliageTop =  Color.fromARGB(255, 14, 145, 45);
const Color foliageLeft =  Color.fromARGB(255, 9, 122, 36);
const Color foliageRight =  Color.fromARGB(255, 6, 101, 28);

/// Creates tree from cubes
///    __
///   |__|
///  |____|
/// |______|
///   |__|
///   |__|
List<dynamic> createBasicTree(Tile tile) {
  List<dynamic> treeTrunk = createCube(
    tile.coordinate,
    tile.height + 1.1,
    0.8,
    trunkTop,
    trunkLeft,
    trunkRight,
  );
  List<dynamic> treeTrunk2 = createCube(
    tile.coordinate,
    tile.height + 1.90,
    0.8,
    trunkTop,
    trunkLeft,
    trunkRight,
  );
  List<dynamic> foliage = createCube(
    tile.coordinate,
    tile.height + 2.30,
    1.2,
    foliageTop,
    foliageLeft,
    foliageRight,
  );
  List<dynamic> foliage2 = createCube(
    tile.coordinate,
    tile.height + 3.70,
    0.80,
    foliageTop,
    foliageLeft,
    foliageRight,
  );
  List<dynamic> foliage3 = createCube(
    tile.coordinate,
    tile.height + 4.60,
    0.5,
    foliageTop,
    foliageLeft,
    foliageRight,
  );
  treeTrunk[0].addAll(treeTrunk2[0]);
  treeTrunk[1].addAll(treeTrunk2[1]);
  treeTrunk[0].addAll(foliage[0]);
  treeTrunk[1].addAll(foliage[1]);
  treeTrunk[0].addAll(foliage2[0]);
  treeTrunk[1].addAll(foliage2[1]);
  treeTrunk[0].addAll(foliage3[0]);
  treeTrunk[1].addAll(foliage3[1]);
  return treeTrunk;
}
