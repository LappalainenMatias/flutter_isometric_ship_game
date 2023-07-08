import 'dart:math';
import 'package:anki/utils/iso_coordinate.dart';
import '../../../../utils/cube.dart';
import '../../../../utils/custom_color.dart';
import '../tile.dart';

class SpruceCreator {

  static const CustomColor trunkTop = CustomColor.fromARGB(255, 126, 56, 5);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 119, 53, 5);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 101, 46, 4);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 14, 145, 45);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 9, 122, 36);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 6, 101, 28);

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
      return _spruce(tile);
    } else {
      return _spruceTrunk(tile);
    }
  }

  static List _spruce(Tile tile) {
    var trunk = _spruceTrunk(tile);
    var foliage1 = _spruceFoliage(tile);
    trunk[0].addAll(foliage1[0]);
    trunk[1].addAll(foliage1[1]);
    return trunk;
  }

  static List _spruceFoliage(Tile tile) {
    return createCube(
      tile.coordinate,
      tile.elevation + 2.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: (Random().nextDouble() / 5 + 1.0),
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
      offset: offset,
    );
  }

  static List _spruceTrunk(Tile tile) {
    return createCube(
      tile.coordinate,
      tile.elevation + 1.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.25,
      heightScale: 2.0 * (Random().nextDouble() + 0.5),
      offset: offset,
    );
  }
}