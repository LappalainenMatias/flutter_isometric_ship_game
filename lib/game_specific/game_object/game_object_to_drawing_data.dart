import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/game_specific/game_object/tile.dart';

import '../../foundation/collision/collision_box.dart';
import '../../foundation/coordinates/iso_coordinate.dart';
import '../../foundation/game_object/render_data_builder.dart';
import '../../foundation/rendering_data/rendering_data.dart';
import '../textures/texture_rects.dart';
import 'missile.dart';

class MissileToDrawingDTO {
  static RenderingData create(Missile missile) {
    var texture = SpriteSheetItem.tileSand.getBorders();
    return createRenderingData(
      texture,
      missile.getIsoCoordinate(),
      missile.getElevation(),
      scale: missile.width,
    );
  }
}

class TileToDrawingDTO {
  static RenderingData create(Tile tile) {
    var texture = tile.type.spriteSheet.getBorders();
    return createRenderingData(
      texture,
      tile.isoCoordinate,
      tile.elevation,
      scale: tile.width.toDouble(),
    );
  }
}

class PlayerToDrawingDTO {
  static RenderingData create(Ship player) {
    return createRenderingData(
      player.getSpriteSheetRect(),
      player.isoCoordinate,
      player.elevation,
      scale: player.width,
    );
  }
}

class CollisionBoxToDrawingDTO {
  static RenderingData create(CollisionBox collisionBox) {
    return createRenderingData(
        SpriteSheetItem.tileRock.getBorders(),
        IsoCoordinate(collisionBox.leftX, collisionBox.bottomY),
        collisionBox.bottomZ,
        scale: 1);
  }
}