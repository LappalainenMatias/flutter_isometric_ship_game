import 'package:anki/dto/drawing_dto.dart';
import 'package:anki/game_objects/game_objects_to_vertices.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Create tile draw atlas data", () {
    Tile tile = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1);
    DrawingDTO verticeDTO = TileToDrawingDTO.create(tile);
    expect(verticeDTO.rstTransforms.length, 4);
    expect(verticeDTO.rects.length, 4);
  });
}
