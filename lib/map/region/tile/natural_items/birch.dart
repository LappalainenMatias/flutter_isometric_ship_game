import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';
import '../tile.dart';

class BirchCreator {
  static const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 164, 152, 147);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

  /// Used for reducing symmetry
  static IsoCoordinate offset = const IsoCoordinate(0, 0);

  /// Creates tree from cubes
  static List positionsAndColors(Tile tile) {
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

  static List _birch(Tile tile) {
    var trunk = _birchTrunk(tile);
    var foliage1 = _birchFoliage(tile);
    trunk[0].addAll(foliage1[0]);
    trunk[1].addAll(foliage1[1]);
    return trunk;
  }

  static List _birchFoliage(Tile tile) {
    return createCube(
      tile.coordinate,
      tile.elevation + 2.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: 1.25,
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
      offset: offset,
    );
  }


  static List _birchTrunk(Tile tile) {
    return createCube(
      tile.coordinate,
      tile.elevation + 1.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.30,
      heightScale: 2.00 * (Random().nextDouble() + 0.5),
      offset: offset,
    );
  }
}