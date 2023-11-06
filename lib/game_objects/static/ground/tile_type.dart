import 'package:anki/textures/texture_rects.dart';

enum TileType {
  ice(SpriteSheetItem.tileGrey),
  grass(SpriteSheetItem.tileGreen),
  deathGrass(SpriteSheetItem.tileRed),
  rock(SpriteSheetItem.tileGrey),
  snow(SpriteSheetItem.tileGrey),
  sand(SpriteSheetItem.tileGrey);
  const TileType(this.spriteSheet);
  final SpriteSheetItem spriteSheet;
}
