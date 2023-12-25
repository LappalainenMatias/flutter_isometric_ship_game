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
    return createRenderingData(
      missile.getSpriteSheetRect(),
      missile.getIsoCoordinate(),
      missile.getElevation(),
      scale: missile.width,
    );
  }
}

class TileToDrawingDTO {
  static RenderingData create(Tile tile) {
    var texture = rect(tile.type, tile.elevation);
    return createRenderingData(
      texture,
      tile.isoCoordinate,
      tile.elevation,
      scale: tile.width.toDouble(),
    );
  }

  static Float32List rect(TileType type, double elevation) {
    /// Todo this system needs refactoring
    if (type == TileType.grass) {
      return SpriteSheetItem.tileGrass.getBorders();
    } else if (type == TileType.rock) {
      if (elevation >= 0.0) {
        return SpriteSheetItem.tileRock.getBorders();
      } else if (elevation > -2) {
        return SpriteSheetItem.tileRockD1.getBorders();
      } else if (elevation > -4) {
        return SpriteSheetItem.tileRockD2.getBorders();
      } else if (elevation > -8) {
        return SpriteSheetItem.tileRockD3.getBorders();
      } else if (elevation <= -8) {
        return SpriteSheetItem.tileRockD4.getBorders();
      }
    } else if (type == TileType.sand) {
      if (elevation >= 0.0) {
        return SpriteSheetItem.tileSand.getBorders();
      } else if (elevation > -2) {
        return SpriteSheetItem.tileSandD1.getBorders();
      } else if (elevation > -4) {
        return SpriteSheetItem.tileSandD2.getBorders();
      } else if (elevation > -8) {
        return SpriteSheetItem.tileSandD3.getBorders();
      } else if (elevation <= -8) {
        return SpriteSheetItem.tileSandD4.getBorders();
      }
    }
    throw Exception("Tile type not found");
  }
}

class ShipToDrawingDTO {
  static RenderingData create(Ship ship) {
    return createRenderingData(
      ship.getSpriteSheetRect(),
      ship.isoCoordinate,
      ship.elevation,
      scale: ship.width,
    );
    //var collisionBox = CollisionBoxToDrawingDTO.create(ship.getCollisionBox());
    //return RenderingData(
    //  Float32List.fromList(ship1.rSTTransforms + collisionBox.rSTTransforms),
    //  Float32List.fromList(ship1.rects + collisionBox.rects),
    //);
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
