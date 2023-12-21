import 'dart:typed_data';

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
  static RenderingData create(Ship ship) {
    var ship1 = createRenderingData(
      ship.getSpriteSheetRect(),
      ship.isoCoordinate,
      ship.elevation,
      scale: ship.width,
    );
    var collisionBox = CollisionBoxToDrawingDTO.create(ship.collisionBox);
    return RenderingData(
      Float32List.fromList(ship1.rSTTransforms + collisionBox.rSTTransforms),
      Float32List.fromList(ship1.rects + collisionBox.rects),
    );
  }
}

class CollisionBoxToDrawingDTO {
  static RenderingData create(CollisionBox collisionBox) {
    return createRenderingData(
        SpriteSheetItem.collisionBox.getBorders(),
        IsoCoordinate(collisionBox.leftX, collisionBox.bottomY),
        collisionBox.bottomZ,
        scale: (collisionBox.leftX - collisionBox.rightX).abs());
  }
}