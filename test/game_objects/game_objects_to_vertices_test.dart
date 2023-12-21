
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/game_object_to_rendering_data.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:test/test.dart';

void main() {
  test("Check rects and rsTransforms size", () {
    Tile tile =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, getRandomId());
    var dto = TileToDrawingDTO.create(tile);
    expect(dto.rSTTransforms.length, 4);
    expect(dto.rects.length, 4);
  });
}
