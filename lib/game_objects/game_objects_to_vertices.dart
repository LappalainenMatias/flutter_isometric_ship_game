import 'dart:math';
import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile.dart';

import '../utils/custom_color.dart';
import '../utils/iso_coordinate.dart';
import '../utils/vertice_dto.dart';
import 'game_object.dart';

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
    var trunk = _birchFoliage(isoCoordinate, elevation);
    var position = birch.positions.toList()..addAll(trunk.positions.toList());
    var colors = birch.colors.toList()..addAll(trunk.colors.toList());
    return VerticeDTO(
        Float32List.fromList(position), Int32List.fromList(colors));
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
    var spruce = _spruceTrunk(isoCoordinate, elevation);
    var trunk = _spruceFoliage(isoCoordinate, elevation);
    var position = spruce.positions.toList()..addAll(trunk.positions.toList());
    var colors = spruce.colors.toList()..addAll(trunk.colors.toList());
    return VerticeDTO(
        Float32List.fromList(position), Int32List.fromList(colors));
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

/// Almost everything visible at the map uses this so performance is important.
///
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side). The 3 visible sides
/// have different colors (colorTop, colorLeft, colorRight).
///
/// The heightScale and widthScale makes the cubes thinner/wider/shorter/taller.
///
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
    /*
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
     */
    // Creates the 7 corners of the cube
    final cenBot = isoCoordinate + IsoCoordinate(elevation, elevation) + offset;
    final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
    final lefBot = cenBot + IsoCoordinate(0, widthScale);
    final lefTop = cenCen + IsoCoordinate(0, widthScale);
    final rigBot = cenBot + IsoCoordinate(widthScale, 0);
    final rigTop = cenCen + IsoCoordinate(widthScale, 0);
    final cenTop = lefTop + IsoCoordinate(widthScale, 0);

    Float32List positions = Float32List(36);
    positions[0] = cenBot.isoX;
    positions[1] = cenBot.isoY;
    positions[2] = cenCen.isoX;
    positions[3] = cenCen.isoY;
    positions[4] = lefBot.isoX;
    positions[5] = lefBot.isoY;
    positions[6] = cenCen.isoX;
    positions[7] = cenCen.isoY;
    positions[8] = lefBot.isoX;
    positions[9] = lefBot.isoY;
    positions[10] = lefTop.isoX;
    positions[11] = lefTop.isoY;
    positions[12] = cenCen.isoX;
    positions[13] = cenCen.isoY;
    positions[14] = lefTop.isoX;
    positions[15] = lefTop.isoY;
    positions[16] = cenTop.isoX;
    positions[17] = cenTop.isoY;
    positions[18] = cenCen.isoX;
    positions[19] = cenCen.isoY;
    positions[20] = cenTop.isoX;
    positions[21] = cenTop.isoY;
    positions[22] = rigTop.isoX;
    positions[23] = rigTop.isoY;
    positions[24] = cenCen.isoX;
    positions[25] = cenCen.isoY;
    positions[26] = rigTop.isoX;
    positions[27] = rigTop.isoY;
    positions[28] = rigBot.isoX;
    positions[29] = rigBot.isoY;
    positions[30] = cenCen.isoX;
    positions[31] = cenCen.isoY;
    positions[32] = rigBot.isoX;
    positions[33] = rigBot.isoY;
    positions[34] = cenBot.isoX;
    positions[35] = cenBot.isoY;

    Int32List colors = Int32List(18);
    colors[0] = colors[1] =
        colors[2] = colors[3] = colors[4] = colors[5] = colorLeft.value;
    colors[6] = colors[7] =
        colors[8] = colors[9] = colors[10] = colors[11] = colorTop.value;
    colors[12] = colors[13] =
        colors[14] = colors[15] = colors[16] = colors[17] = colorRight.value;

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

class CubeVerticeCreator2 {
  // The 7 cube corners.
  // [0] is the center bottom corner.
  // [1] is the center center corner.
  // [2] is the center top corner.
  // [3] is the left bottom corner.
  // [4] is the left top corner.
  // [5] is the right bottom corner.
  // [6] is the right top corner.
  static const List<IsoCoordinate> cubePrototype = [
    IsoCoordinate(0, 0),
    IsoCoordinate(0, 2),
    IsoCoordinate(-2, -1),
    IsoCoordinate(-2, 3),
    IsoCoordinate(2, 1),
    IsoCoordinate(2, 3),
    IsoCoordinate(0, 4),
  ];

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
    // Transform cubePrototype into the correct position
    List<IsoCoordinate> cubeVertices = cubePrototype.map((prototypeVertex) {
      return transform(prototypeVertex, isoCoordinate, heightScale, widthScale,
          offset, elevation);
    }).toList();

    // Converting vertices to Float32List
    Float32List positions =
        Float32List(cubeVertices.length * 2); // Each vertex has 2 coordinates
    for (int i = 0; i < cubeVertices.length; i++) {
      positions[i * 2] = cubeVertices[i].isoX;
      positions[i * 2 + 1] = cubeVertices[i].isoY;
    }

    // Creating color list
    List<int> colors = List<int>.filled(18, 0, growable: false);
    for (var i = 0; i < 6; i++) {
      colors[i] = colorLeft.value;
      colors[i + 6] = colorTop.value;
      colors[i + 12] = colorRight.value;
    }

    return VerticeDTO(positions, Int32List.fromList(colors));
  }

  static IsoCoordinate transform(
    IsoCoordinate prototypeVertex,
    IsoCoordinate isoCoordinate,
    double heightScale,
    double widthScale,
    IsoCoordinate offset,
    double elevation,
  ) {
    double transformedX =
        prototypeVertex.isoX * heightScale + isoCoordinate.isoX + offset.isoX;
    double transformedY =
        prototypeVertex.isoY * widthScale + isoCoordinate.isoY + offset.isoY;
    return IsoCoordinate(transformedX, transformedY + elevation);
  }
}

/// We do not want to draw every game object individually (because it's slow).
/// Here we combine all the the vertices of all the game objects into one.
Map<String, VerticeDTO> gameObjectsToVertices(List<GameObject> gameObjects) {
  int aboveWaterColorSize = gameObjects.fold(
    0,
    (previousValue, gameObject) =>
        previousValue +
        (gameObject.isUnderWater()
            ? 0
            : gameObject.getVertices().colors.length),
  );

  int underWaterColorSize = gameObjects.fold(
    0,
    (previousValue, gameObject) =>
        previousValue +
        (!gameObject.isUnderWater()
            ? 0
            : gameObject.getVertices().colors.length),
  );

  /// Using Float32List.fromList() would be easier but updating the Float32List size is faster.
  /// Color list is always half the size of positions list.
  Float32List aboveWaterPositions = Float32List(aboveWaterColorSize * 2);
  Int32List aboveWaterColors = Int32List(aboveWaterColorSize);
  Float32List underWaterPositions = Float32List(underWaterColorSize * 2);
  Int32List underWaterColors = Int32List(underWaterColorSize);

  int aboveWaterOffset = 0;
  int underWaterOffset = 0;

  for (var gameObject in gameObjects) {
    var vertices = gameObject.getVertices();

    if (gameObject.isUnderWater()) {
      underWaterPositions.setAll(underWaterOffset, vertices.positions);
      underWaterColors.setAll(underWaterOffset ~/ 2, vertices.colors);
      underWaterOffset += vertices.positions.length;
    } else {
      aboveWaterPositions.setAll(aboveWaterOffset, vertices.positions);
      aboveWaterColors.setAll(aboveWaterOffset ~/ 2, vertices.colors);
      aboveWaterOffset += vertices.positions.length;
    }
  }

  return {
    'underWater': VerticeDTO(underWaterPositions, underWaterColors),
    'aboveWater': VerticeDTO(aboveWaterPositions, aboveWaterColors)
  };
}
