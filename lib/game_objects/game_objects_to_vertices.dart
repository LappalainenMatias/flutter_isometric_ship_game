import 'dart:math';
import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/textures/texture_coordinates.dart';

import '../collision/collision_box.dart';
import '../dto/vertice_dto.dart';
import '../utils/custom_color.dart';
import '../coordinates/iso_coordinate.dart';
import 'dynamic/player/player.dart';
import 'game_object.dart';

class BirchToVertices {
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
    var textures = birch.textures.toList()..addAll(trunk.textures.toList());
    return VerticeDTO(
        Float32List.fromList(position), Float32List.fromList(textures));
  }

  static VerticeDTO _birchFoliage(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      Float32List(0),
      isoCoordinate,
      elevation + 1.00,
      widthScale: 1.25,
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static VerticeDTO _birchTrunk(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      Float32List(0),
      isoCoordinate,
      elevation + 0.25,
      widthScale: 0.30,
      heightScale: 2.00 * (Random().nextDouble() + 0.5),
    );
  }
}

class RockToVertices {
  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      Float32List(0),
      isoCoordinate,
      elevation,
      widthScale: 0.6,
      heightScale: 0.35,
    );
  }
}

class SpruceToVertices {
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

    /// Todo create a better way to do this.
    var position = spruce.positions.toList()..addAll(trunk.positions.toList());
    var textures = spruce.textures.toList()..addAll(trunk.textures.toList());
    return VerticeDTO(
        Float32List.fromList(position), Float32List.fromList(textures));
  }

  static VerticeDTO _spruceFoliage(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      Float32List(0),
      isoCoordinate,
      elevation + 1.00,
      widthScale: (Random().nextDouble() / 5 + 1.0),
      heightScale: 3.5 * (Random().nextDouble() + 0.5),
    );
  }

  static VerticeDTO _spruceTrunk(
      IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      Float32List(0),
      isoCoordinate,
      elevation + 0.25,
      widthScale: 0.25,
      heightScale: 2.0 * (Random().nextDouble() + 0.5),
    );
  }
}

class TileToVertices {
  static VerticeDTO toVertices(Tile tile) {
    var textures = getTileTextureCoordinates(tile.type);
    return CubeVerticesCreator.toVertices(
      textures,
      tile.isoCoordinate,
      tile.elevation,
      widthScale: tile.width.toDouble(),
      heightScale: tile.width.toDouble(),
    );
  }
}

class CollisionBoxToVertices {
  static VerticeDTO toVertices(CollisionBox box) {
    return CubeVerticesCreator.toVertices(
        getTileTextureCoordinates(TileType.rock), box.point, 0,
        widthScale: box.width, heightScale: box.height);
  }
}

class PlayerToVertices {
  static VerticeDTO toVertices(Player player) {
    return CubeVerticesCreator.toVertices(
      getTileTextureCoordinates(TileType.deathGrass),
      player.isoCoordinate,
      player.elevation,
    );
  }
}

/// Almost everything visible at the map uses this so performance is important.
///
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side).
///
/// The heightScale and widthScale makes the cubes thinner/wider/shorter/taller.
class CubeVerticesCreator {
  static const CustomColor blueColor = CustomColor.fromARGB(255, 1, 46, 143);

  static VerticeDTO toVertices(
    Float32List textures,
    IsoCoordinate isoCoordinate,
    double z, {
    double heightScale = 1,
    double widthScale = 1,
  }) {
    /// Creates the 7 corners of the isometric cube
    final cenBot = isoCoordinate + IsoCoordinate(z, z);
    final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
    final lefBot = cenBot + IsoCoordinate(0, widthScale);
    final lefTop = cenCen + IsoCoordinate(0, widthScale);
    final rigBot = cenBot + IsoCoordinate(widthScale, 0);
    final rigTop = cenCen + IsoCoordinate(widthScale, 0);
    final cenTop = lefTop + IsoCoordinate(widthScale, 0);

    /// Notice that the triangles are created in a counter clockwise order
    /// This is important for the textures to work
    Float32List positions = Float32List(36);
    positions[0] = cenCen.isoX;
    positions[1] = cenCen.isoY;
    positions[2] = lefBot.isoX;
    positions[3] = lefBot.isoY;
    positions[4] = cenBot.isoX;
    positions[5] = cenBot.isoY;
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

    return VerticeDTO(positions, textures);
  }
}

/// We do not want to draw every game object individually (because it's slow).
/// Here we combine all the the vertices of all the game objects into one.
({VerticeDTO underWater, VerticeDTO aboveWater}) gameObjectsToVertices(
    List<GameObject> gameObjects) {
  int aboveWaterPositionsSize = 0;
  int underWaterPositionsSize = 0;
  for (var gameObject in gameObjects) {
    if (gameObject.isUnderWater()) {
      underWaterPositionsSize += gameObject.getVertices().positions.length;
    } else {
      aboveWaterPositionsSize += gameObject.getVertices().positions.length;
    }
  }

  /// Using Float32List.fromList() would be easier but updating the Float32List is faster.
  /// Texture/Color list is always half the size of positions list.
  Float32List aboveWaterPositions = Float32List(aboveWaterPositionsSize);
  Float32List aboveWaterTextures = Float32List(aboveWaterPositionsSize);
  Float32List underWaterPositions = Float32List(underWaterPositionsSize);
  Float32List underWaterTextures = Float32List(underWaterPositionsSize);

  int aboveWaterOffset = 0;
  int underWaterOffset = 0;
  for (var gameObject in gameObjects) {
    var vertices = gameObject.getVertices();

    if (gameObject.isUnderWater()) {
      underWaterPositions.setAll(underWaterOffset, vertices.positions);
      underWaterTextures.setAll(underWaterOffset, vertices.textures);
      underWaterOffset += vertices.positions.length;
    } else {
      aboveWaterPositions.setAll(aboveWaterOffset, vertices.positions);
      aboveWaterTextures.setAll(aboveWaterOffset, vertices.textures);
      aboveWaterOffset += vertices.positions.length;
    }
  }

  return (
    underWater: VerticeDTO(underWaterPositions, underWaterTextures),
    aboveWater: VerticeDTO(aboveWaterPositions, aboveWaterTextures)
  );
}
