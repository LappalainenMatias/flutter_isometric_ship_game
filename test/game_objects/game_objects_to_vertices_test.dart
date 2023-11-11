import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_object_to_drawing_data.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Check rects and rsTransforms size", () {
    Tile tile = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1);
    DrawingDTO dto = TileToDrawingDTO.create(tile);
    expect(dto.rSTransforms.length, 4);
    expect(dto.rects.length, 4);
  });
}
