import 'dart:math';
import 'package:anki/game_objects/static/ground/tile.dart';

import '../utils/custom_color.dart';
import '../utils/iso_coordinate.dart';
import '../utils/vertice_dto.dart';

class BirchToVertices {
  static const CustomColor trunkTop = CustomColor.fromARGB(255, 197, 187, 181);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 183, 173, 167);
  static const CustomColor trunkRight =
      CustomColor.fromARGB(255, 164, 152, 147);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 15, 169, 52);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 10, 152, 44);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 8, 133, 38);

  /// Creates tree from cubes
  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    int random = Random().nextInt(100);
    if (random < 95) {
      return _birch(isoCoordinate, elevation);
    } else {
      return _birchTrunk(isoCoordinate, elevation);
    }
  }

  static VerticeDTO _birch(IsoCoordinate isoCoordinate, double elevation) {
    var birch = _birchTrunk(isoCoordinate, elevation);
    birch.addVerticeDTO(_birchFoliage(isoCoordinate, elevation));
    return birch;
  }

  static VerticeDTO _birchFoliage(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
      isoCoordinate,
      elevation + 1.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: 1.25,
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static VerticeDTO _birchTrunk(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
      isoCoordinate,
      elevation + 0.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.30,
      heightScale: 2.00 * (Random().nextDouble() + 0.5),
    );
  }
}

class RockToVertices {
  static const CustomColor rockTop = CustomColor.fromARGB(255, 140, 136, 120);
  static const CustomColor rockLeft = CustomColor.fromARGB(255, 120, 116, 100);
  static const CustomColor rockRight = CustomColor.fromARGB(255, 100, 96, 80);

  /// Creates rock from cubes
  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
      isoCoordinate,
      elevation,
      rockTop,
      rockLeft,
      rockRight,
      widthScale: 0.6,
      heightScale: 0.35,
    );
  }
}

class SpruceToVertices {
  static const CustomColor trunkTop = CustomColor.fromARGB(255, 126, 56, 5);
  static const CustomColor trunkLeft = CustomColor.fromARGB(255, 119, 53, 5);
  static const CustomColor trunkRight = CustomColor.fromARGB(255, 101, 46, 4);
  static const CustomColor foliageTop = CustomColor.fromARGB(255, 14, 145, 45);
  static const CustomColor foliageLeft = CustomColor.fromARGB(255, 9, 122, 36);
  static const CustomColor foliageRight = CustomColor.fromARGB(255, 6, 101, 28);

  /// Creates tree from cubes
  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    /// Todo we have to remove all the random stuff because the trees might get relocated
    int random = Random().nextInt(100);
    if (random < 95) {
      return _spruce(isoCoordinate, elevation);
    } else {
      return _spruceTrunk(isoCoordinate, elevation);
    }
  }

  static VerticeDTO _spruce(IsoCoordinate isoCoordinate, double elevation) {
    var trunk = _spruceTrunk(isoCoordinate, elevation);
    trunk.addVerticeDTO(_spruceFoliage(isoCoordinate, elevation));
    return trunk;
  }

  static VerticeDTO _spruceFoliage(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
      isoCoordinate,
      elevation + 1.00,
      foliageTop,
      foliageLeft,
      foliageRight,
      widthScale: (Random().nextDouble() / 5 + 1.0),
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static VerticeDTO _spruceTrunk(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
      isoCoordinate,
      elevation + 0.25,
      trunkTop,
      trunkLeft,
      trunkRight,
      widthScale: 0.25,
      heightScale: 2.0 * (Random().nextDouble() + 0.5),
    );
  }
}

class TileToVertices {
  static VerticeDTO toVertices(Tile tile) {
    // todo only a test. remove the heightscale elevation at some point
    if (tile.elevation > 0) {
      return CubeVerticeCreator.toVertices(
        tile.isoCoordinate,
        0,
        tile.type.top,
        tile.type.left,
        tile.type.right,
        widthScale: tile.width.toDouble(),
        heightScale: tile.elevation,
      );
    }
    return CubeVerticeCreator.toVertices(
      tile.isoCoordinate,
      tile.elevation,
      tile.type.top,
      tile.type.left,
      tile.type.right,
      widthScale: tile.width.toDouble(),
    );
  }
}

class PlayerToVertices {
  static const CustomColor boatTop = CustomColor.fromARGB(255, 157, 129, 124);
  static const CustomColor boatLeft = CustomColor.fromARGB(255, 141, 112, 107);
  static const CustomColor boatRight = CustomColor.fromARGB(255, 123, 105, 100);

  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticeCreator.toVertices(
        isoCoordinate, elevation, boatTop, boatLeft, boatRight,
        widthScale: 2, heightScale: 2);
  }
}

/// Returns a list of positions and colors. Everything visible at the map uses this
/// function (except water shader).
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side). The 3 visible sides
/// have different colors (colorTop, colorLeft, colorRight).
/// The heightScale and widthScale makes the cubes thinner/wider/shorter/taller.
/// Offset can be used to reduce symmetry by moving the cube slightly so that
/// every tree and rock does not line up perfectly.
class CubeVerticeCreator {
  static const CustomColor blueColor = CustomColor.fromARGB(255, 1, 46, 143);

  static VerticeDTO toVertices(
    IsoCoordinate isoCoordinate,
    double elevation,
    CustomColor colorTop,
    CustomColor colorLeft,
    CustomColor colorRight, {
    double heightScale = 1,
    double widthScale = 1,
    IsoCoordinate offset = const IsoCoordinate.fromIso(0, 0),
  }) {
    /// Todo This should not be here
    if (elevation < 0) {
      // Adds blueish color to underwater cubes
      double depthPercentage = 0.20 + ((elevation - 0.20) / 5).abs();
      if (depthPercentage > 1) {
        colorTop = blueColor;
        colorLeft = blueColor;
        colorRight = blueColor;
      } else {
        colorTop = _mix(colorTop, blueColor, depthPercentage);
        colorLeft = _mix(colorLeft, blueColor, depthPercentage);
        colorRight = _mix(colorRight, blueColor, depthPercentage);
      }
    }
    // Creates the 7 corners of the cube
    final cenBot = isoCoordinate + IsoCoordinate(elevation, elevation) + offset;
    final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
    final lefBot = cenBot + IsoCoordinate(0, widthScale);
    final lefTop = cenCen + IsoCoordinate(0, widthScale);
    final rigBot = cenBot + IsoCoordinate(widthScale, 0);
    final rigTop = cenCen + IsoCoordinate(widthScale, 0);
    final cenTop = lefTop + IsoCoordinate(widthScale, 0);
    List<double> positions = [
      cenBot.isoX,
      cenBot.isoY,
      cenCen.isoX,
      cenCen.isoY,
      lefBot.isoX,
      lefBot.isoY,
      cenCen.isoX,
      cenCen.isoY,
      lefBot.isoX,
      lefBot.isoY,
      lefTop.isoX,
      lefTop.isoY,
      cenCen.isoX,
      cenCen.isoY,
      lefTop.isoX,
      lefTop.isoY,
      cenTop.isoX,
      cenTop.isoY,
      cenCen.isoX,
      cenCen.isoY,
      cenTop.isoX,
      cenTop.isoY,
      rigTop.isoX,
      rigTop.isoY,
      cenCen.isoX,
      cenCen.isoY,
      rigTop.isoX,
      rigTop.isoY,
      rigBot.isoX,
      rigBot.isoY,
      cenCen.isoX,
      cenCen.isoY,
      rigBot.isoX,
      rigBot.isoY,
      cenBot.isoX,
      cenBot.isoY,
    ];
    List<int> colors = List<int>.filled(18, 0, growable: true);
    for (var i = 0; i < 6; i++) {
      colors[i] = colorLeft.value;
      colors[i + 6] = colorTop.value;
      colors[i + 12] = colorRight.value;
    }
    return VerticeDTO(positions, colors);
  }

  /// Todo move this to some other class
  static CustomColor _mix(
      CustomColor color1, CustomColor color2, double percent) {
    return CustomColor.fromNormalizedARGB(
      _lerp(color1.normalizedA, color2.normalizedA, percent),
      _lerp(color1.normalizedR, color2.normalizedR, percent),
      _lerp(color1.normalizedG, color2.normalizedG, percent),
      _lerp(color1.normalizedB, color2.normalizedB, percent),
    );
  }

  static double _lerp(double a, double b, double t) {
    return a + (b - a) * t;
  }
}
