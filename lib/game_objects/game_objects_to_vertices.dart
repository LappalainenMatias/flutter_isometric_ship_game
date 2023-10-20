import 'dart:math';
import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/textures/texture_coordinates.dart';
import '../dto/vertice_dto.dart';
import '../coordinates/iso_coordinate.dart';
import 'dynamic/player.dart';
import 'game_object.dart';

class BirchToVertices {
  static VerticeDTO leavesToVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
        TileType.snow, isoCoordinate, elevation);
  }
  static VerticeDTO trunkToVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
        TileType.ice, isoCoordinate, elevation + 0);
  }
}

class RockToVertices {
  static VerticeDTO toVertices(IsoCoordinate isoCoordinate, double elevation) {
    return CubeVerticesCreator.toVertices(
      TileType.deathGrass,
      isoCoordinate,
      elevation,
      widthScale: 0.6,
      heightScale: 0.35,
    );
  }
}

class TileToVertices {
  static VerticeDTO toVertices(Tile tile) {
    return CubeVerticesCreator.toVertices(
      tile.type,
      tile.isoCoordinate,
      tile.elevation,
      widthScale: tile.width.toDouble(),
      heightScale: tile.width.toDouble(),
      leftSideVisible: tile.leftSideIsVisible,
      topSideVisible: tile.topSideIsVisible,
      rightSideVisible: tile.rightSideIsVisible,
    );
  }
}

class PlayerToVertices {
  static VerticeDTO toVertices(Player player) {
    return CubeVerticesCreator.toVertices(
      player.isColliding ? TileType.ice : TileType.deathGrass,
      player.isoCoordinate,
      player.elevation,
      widthScale: player.sideWidth,
      heightScale: player.sideWidth,
    );
  }
}

/// Almost everything visible at the map uses this so performance is important.
///
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side).
///
/// The heightScale and widthScale makes the cubes thinner/wider/shorter/taller.
/// To optimize drawing we can set the three sides to be invisible.
class CubeVerticesCreator {
  static VerticeDTO toVertices(
    TileType tileType,
    final IsoCoordinate isoCoordinate,
    final double z, {
    final double heightScale = 1,
    final double widthScale = 1,
    final bool leftSideVisible = true,
    final bool topSideVisible = true,
    final bool rightSideVisible = true,
  }) {
    /// Creates the 7 corners of the isometric cube
    final cenBot = isoCoordinate + IsoCoordinate(z, z);
    final cenCen = cenBot + IsoCoordinate(heightScale, heightScale);
    final lefBot = cenBot + IsoCoordinate(0, widthScale);
    final lefTop = cenCen + IsoCoordinate(0, widthScale);
    final rigBot = cenBot + IsoCoordinate(widthScale, 0);
    final rigTop = cenCen + IsoCoordinate(widthScale, 0);
    final cenTop = lefTop + IsoCoordinate(widthScale, 0);

    int size = 0;
    if (leftSideVisible) size += 12;
    if (topSideVisible) size += 12;
    if (rightSideVisible) size += 12;
    final positions = Float32List(size);
    final textures = Float32List(size);
    final fullTexture = getTileTextureCoordinates(tileType);
    int positionIndex = 0;
    int textureIndex = 0;

    /// Notice that the triangles are created in a counter clockwise order
    /// This is important for the textures to work
    if (leftSideVisible) {
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = lefBot.isoX;
      positions[positionIndex++] = lefBot.isoY;
      positions[positionIndex++] = cenBot.isoX;
      positions[positionIndex++] = cenBot.isoY;
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = lefBot.isoX;
      positions[positionIndex++] = lefBot.isoY;
      positions[positionIndex++] = lefTop.isoX;
      positions[positionIndex++] = lefTop.isoY;
      textures[textureIndex++] = fullTexture[0];
      textures[textureIndex++] = fullTexture[1];
      textures[textureIndex++] = fullTexture[2];
      textures[textureIndex++] = fullTexture[3];
      textures[textureIndex++] = fullTexture[4];
      textures[textureIndex++] = fullTexture[5];
      textures[textureIndex++] = fullTexture[6];
      textures[textureIndex++] = fullTexture[7];
      textures[textureIndex++] = fullTexture[8];
      textures[textureIndex++] = fullTexture[9];
      textures[textureIndex++] = fullTexture[10];
      textures[textureIndex++] = fullTexture[11];
    }

    if (topSideVisible) {
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = lefTop.isoX;
      positions[positionIndex++] = lefTop.isoY;
      positions[positionIndex++] = cenTop.isoX;
      positions[positionIndex++] = cenTop.isoY;
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = cenTop.isoX;
      positions[positionIndex++] = cenTop.isoY;
      positions[positionIndex++] = rigTop.isoX;
      positions[positionIndex++] = rigTop.isoY;
      textures[textureIndex++] = fullTexture[12];
      textures[textureIndex++] = fullTexture[13];
      textures[textureIndex++] = fullTexture[14];
      textures[textureIndex++] = fullTexture[15];
      textures[textureIndex++] = fullTexture[16];
      textures[textureIndex++] = fullTexture[17];
      textures[textureIndex++] = fullTexture[18];
      textures[textureIndex++] = fullTexture[19];
      textures[textureIndex++] = fullTexture[20];
      textures[textureIndex++] = fullTexture[21];
      textures[textureIndex++] = fullTexture[22];
      textures[textureIndex++] = fullTexture[23];
    }

    if (rightSideVisible) {
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = rigTop.isoX;
      positions[positionIndex++] = rigTop.isoY;
      positions[positionIndex++] = rigBot.isoX;
      positions[positionIndex++] = rigBot.isoY;
      positions[positionIndex++] = cenCen.isoX;
      positions[positionIndex++] = cenCen.isoY;
      positions[positionIndex++] = rigBot.isoX;
      positions[positionIndex++] = rigBot.isoY;
      positions[positionIndex++] = cenBot.isoX;
      positions[positionIndex++] = cenBot.isoY;
      textures[textureIndex++] = fullTexture[24];
      textures[textureIndex++] = fullTexture[25];
      textures[textureIndex++] = fullTexture[26];
      textures[textureIndex++] = fullTexture[27];
      textures[textureIndex++] = fullTexture[28];
      textures[textureIndex++] = fullTexture[29];
      textures[textureIndex++] = fullTexture[30];
      textures[textureIndex++] = fullTexture[31];
      textures[textureIndex++] = fullTexture[32];
      textures[textureIndex++] = fullTexture[33];
      textures[textureIndex++] = fullTexture[34];
      textures[textureIndex++] = fullTexture[35];
    }
    return VerticeDTO(positions, textures);
  }
}

/// We do not want to draw every game object individually (because it's slow).
/// Here we combine all the the vertices.({VerticeDTO underWater, VerticeDTO aboveWater})

gameObjectsToVertices(List<GameObject> gameObjects) {
  int aboveWaterPositionsSize = 0;
  int underWaterPositionsSize = 0;
  for (var gameObject in gameObjects) {
    if (!gameObject.isVisible()) continue;
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
    if (!gameObject.isVisible()) continue;
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
