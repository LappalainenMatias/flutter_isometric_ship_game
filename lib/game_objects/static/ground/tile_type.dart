import 'package:anki/textures/texture_rects.dart';

enum TileType {
  grass(SpriteSheetItem.tileGrass),
  rock(SpriteSheetItem.tileRock),
  sand(SpriteSheetItem.tileSand);
  const TileType(this.spriteSheet);
  final SpriteSheetItem spriteSheet;
}
