import 'dart:typed_data';
import '../game_objects/static/ground/tile_type.dart';

/// Contains the texture coordinate for each tile type.
/// 36 vertices which create 6 triangles (2 for each visible side)
Float32List getTileTextureCoordinates(TileType type) {
  switch (type) {
    case TileType.ice:
      return iceTexture;
    case TileType.grass:
      return grassTexture;
    case TileType.deathGrass:
      return deathGrassTexture;
    case TileType.rock:
      return rockTexture;
    case TileType.snow:
      return snowTexture;
    case TileType.sand:
      return sandTexture;
  }
}

const double _textureHeight = 161;

/// Notice that the texture triangles are defined in counter-clockwise order.
/// The vertice positions are also defined in counter-clockwise order.
const int deathGrassIndex = 0;
final Float32List deathGrassTexture = Float32List.fromList([
  80, 80 + _textureHeight * deathGrassIndex,
  0, 120 + _textureHeight * deathGrassIndex,
  80, _textureHeight + _textureHeight * deathGrassIndex,
  80, 80 + _textureHeight * deathGrassIndex,
  0, 120 + _textureHeight * deathGrassIndex,
  0, 40 + _textureHeight * deathGrassIndex,
  80, 80 + _textureHeight * deathGrassIndex,
  0, 40 + _textureHeight * deathGrassIndex,
  80, 0 + _textureHeight * deathGrassIndex,
  80, 80 + _textureHeight * deathGrassIndex,
  80, 0 + _textureHeight * deathGrassIndex,
  161, 40 + _textureHeight * deathGrassIndex,
  80, 80 + _textureHeight * deathGrassIndex,
  161, 40 + _textureHeight * deathGrassIndex,
  161, 120 + _textureHeight * deathGrassIndex,
  80, 80 + _textureHeight * deathGrassIndex,
  161, 120 + _textureHeight * deathGrassIndex,
  80, _textureHeight + _textureHeight * deathGrassIndex,
]);

const int grassIndex = 1;
final Float32List grassTexture = Float32List.fromList([
  80, 80 + _textureHeight * grassIndex,
  0, 120 + _textureHeight * grassIndex,
  80, _textureHeight + _textureHeight * grassIndex,
  80, 80 + _textureHeight * grassIndex,
  0, 120 + _textureHeight * grassIndex,
  0, 40 + _textureHeight * grassIndex,
  80, 80 + _textureHeight * grassIndex,
  0, 40 + _textureHeight * grassIndex,
  80, 0 + _textureHeight * grassIndex,
  80, 80 + _textureHeight * grassIndex,
  80, 0 + _textureHeight * grassIndex,
  161, 40 + _textureHeight * grassIndex,
  80, 80 + _textureHeight * grassIndex,
  161, 40 + _textureHeight * grassIndex,
  161, 120 + _textureHeight * grassIndex,
  80, 80 + _textureHeight * grassIndex,
  161, 120 + _textureHeight * grassIndex,
  80, _textureHeight + _textureHeight * grassIndex,
]);

const int rockIndex = 2;
final Float32List rockTexture = Float32List.fromList([
  80, 80 + _textureHeight * rockIndex,
  0, 120 + _textureHeight * rockIndex,
  80, _textureHeight + _textureHeight * rockIndex,
  80, 80 + _textureHeight * rockIndex,
  0, 120 + _textureHeight * rockIndex,
  0, 40 + _textureHeight * rockIndex,
  80, 80 + _textureHeight * rockIndex,
  0, 40 + _textureHeight * rockIndex,
  80, 0 + _textureHeight * rockIndex,
  80, 80 + _textureHeight * rockIndex,
  80, 0 + _textureHeight * rockIndex,
  161, 40 + _textureHeight * rockIndex,
  80, 80 + _textureHeight * rockIndex,
  161, 40 + _textureHeight * rockIndex,
  161, 120 + _textureHeight * rockIndex,
  80, 80 + _textureHeight * rockIndex,
  161, 120 + _textureHeight * rockIndex,
  80, _textureHeight + _textureHeight * rockIndex,
]);

const int snowIndex = 3;
final Float32List snowTexture = Float32List.fromList([
  80, 80 + _textureHeight * snowIndex,
  0, 120 + _textureHeight * snowIndex,
  80, _textureHeight + _textureHeight * snowIndex,
  80, 80 + _textureHeight * snowIndex,
  0, 120 + _textureHeight * snowIndex,
  0, 40 + _textureHeight * snowIndex,
  80, 80 + _textureHeight * snowIndex,
  0, 40 + _textureHeight * snowIndex,
  80, 0 + _textureHeight * snowIndex,
  80, 80 + _textureHeight * snowIndex,
  80, 0 + _textureHeight * snowIndex,
  161, 40 + _textureHeight * snowIndex,
  80, 80 + _textureHeight * snowIndex,
  161, 40 + _textureHeight * snowIndex,
  161, 120 + _textureHeight * snowIndex,
  80, 80 + _textureHeight * snowIndex,
  161, 120 + _textureHeight * snowIndex,
  80, _textureHeight + _textureHeight * snowIndex,
]);

const int iceIndex = 4;
final Float32List iceTexture = Float32List.fromList([
  80, 80 + _textureHeight * iceIndex,
  0, 120 + _textureHeight * iceIndex,
  80, _textureHeight + _textureHeight * iceIndex,
  80, 80 + _textureHeight * iceIndex,
  0, 120 + _textureHeight * iceIndex,
  0, 40 + _textureHeight * iceIndex,
  80, 80 + _textureHeight * iceIndex,
  0, 40 + _textureHeight * iceIndex,
  80, 0 + _textureHeight * iceIndex,
  80, 80 + _textureHeight * iceIndex,
  80, 0 + _textureHeight * iceIndex,
  161, 40 + _textureHeight * iceIndex,
  80, 80 + _textureHeight * iceIndex,
  161, 40 + _textureHeight * iceIndex,
  161, 120 + _textureHeight * iceIndex,
  80, 80 + _textureHeight * iceIndex,
  161, 120 + _textureHeight * iceIndex,
  80, _textureHeight + _textureHeight * iceIndex,
]);

const int sandIndex = 5;
final Float32List sandTexture = Float32List.fromList([
  80, 80 + _textureHeight * sandIndex,
  0, 120 + _textureHeight * sandIndex,
  80, _textureHeight + _textureHeight * sandIndex,
  80, 80 + _textureHeight * sandIndex,
  0, 120 + _textureHeight * sandIndex,
  0, 40 + _textureHeight * sandIndex,
  80, 80 + _textureHeight * sandIndex,
  0, 40 + _textureHeight * sandIndex,
  80, 0 + _textureHeight * sandIndex,
  80, 80 + _textureHeight * sandIndex,
  80, 0 + _textureHeight * sandIndex,
  161, 40 + _textureHeight * sandIndex,
  80, 80 + _textureHeight * sandIndex,
  161, 40 + _textureHeight * sandIndex,
  161, 120 + _textureHeight * sandIndex,
  80, 80 + _textureHeight * sandIndex,
  161, 120 + _textureHeight * sandIndex,
  80, _textureHeight + _textureHeight * sandIndex,
]);
