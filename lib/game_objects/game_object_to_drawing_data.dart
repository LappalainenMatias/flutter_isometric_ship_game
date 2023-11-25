import 'dart:typed_data';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/textures/texture_coordinates.dart';
import 'package:anki/textures/texture_rects.dart';
import '../dto/drawing_dto.dart';
import '../coordinates/iso_coordinate.dart';
import 'dynamic/missile.dart';
import 'dynamic/player.dart';
import 'dart:math';

class MissileToDrawingDTO {
  static DrawingDTO create(Missile missile) {
    var texture = getTileTextureCoordinatesRect(SpriteSheetItem.tileRed);
    return createDrawingDTO(
      texture,
      missile.getIsoCoordinate(),
      missile.getElevation(),
      scale: missile.width,
    );
  }
}

class BirchToDrawingDTO {
  static DrawingDTO leaves(NaturalItemCube naturalItemCube) {
    var texture = getTileTextureCoordinatesRect(TileType.snow.spriteSheet);
    return createDrawingDTO(
      texture,
      naturalItemCube.isoCoordinate,
      naturalItemCube.elevation,
    );
  }

  static DrawingDTO trunk(NaturalItemCube naturalItemCube) {
    var texture = getTileTextureCoordinatesRect(TileType.ice.spriteSheet);
    return createDrawingDTO(
      texture,
      naturalItemCube.isoCoordinate,
      naturalItemCube.elevation,
    );
  }
}

class RockToDrawingDTO {
  static DrawingDTO create(NaturalItemCube naturalItemCube) {
    var texture =
        getTileTextureCoordinatesRect(TileType.deathGrass.spriteSheet);
    return createDrawingDTO(
      texture,
      naturalItemCube.isoCoordinate,
      naturalItemCube.elevation,
      scale: 0.6,
    );
  }
}

class TileToDrawingDTO {
  static DrawingDTO create(Tile tile) {
    var texture = getTileTextureCoordinatesRect(tile.type.spriteSheet);
    return createDrawingDTO(
      texture,
      tile.isoCoordinate,
      tile.elevation,
      scale: tile.width.toDouble(),
    );
  }
}

class PlayerToDrawingDTO {
  static DrawingDTO create(Player player) {
    return createDrawingDTO(
      player.getSpriteSheetRect(),
      player.isoCoordinate,
      player.elevation,
      scale: player.width,
    );
  }
}

DrawingDTO createDrawingDTO(
  Float32List rect,
  final IsoCoordinate isoCoordinate,
  final double elevation, {
  double scale = 1,
}) {
  // This is the center corner in isometric cube
  final center = isoCoordinate -
      IsoCoordinate(elevation, elevation) +
      IsoCoordinate(scale, scale);

  // Copy of the RSTransform from dart:ui because dart:ui cannot be run concurrently in web
  const halfAssetWidth = textureWidth / 2;
  scale *= 0.12656738281; // This number works for 32x32 pixel sprite items
  var rotation = 0;
  final double scos = cos(rotation) * scale;
  final double ssin = sin(rotation) * scale;
  final tx = center.isoX + -scos * halfAssetWidth + ssin * halfAssetWidth;
  final ty = center.isoY - ssin * halfAssetWidth - scos * halfAssetWidth;

  Float32List rSTransforms = Float32List(4);
  rSTransforms[0] = scos;
  rSTransforms[1] = ssin;
  rSTransforms[2] = tx;
  rSTransforms[3] = ty;
  return DrawingDTO(rSTransforms, rect);
}

/// THIS IS THE OLD IMPLEMENTATION THAT CREATES VERTICES
/// This can be used with canvas.drawVertices() but it is slower than
/// canvas.drawAtlas() and because of that it is not used anymore.
///
/// Almost everything visible at the map uses this so performance is important.
///
/// Isometric cube has 7 corners and 3 visible sides. From the 7 corners we create
/// 6 triangles that make up the cube (two for each visible side).
///
/// The heightScale and widthScale makes the cubes thinner/wider/shorter/taller.
/// To optimize drawing we can set the three sides to be invisible.
DrawingDTO toVertices(
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
  final fullTexture = OLD_IMPLEMENTATION_getTileTextureCoordinates(tileType);
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
  return DrawingDTO(positions, textures);
}
