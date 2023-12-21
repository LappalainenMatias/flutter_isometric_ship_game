import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:test/test.dart';

void main() {
  test("Sort tiles", () {
    var t1 =
        Tile(TileType.grass, const IsoCoordinate(1, 1), 1, 1, getRandomId());
    var t2 =
        Tile(TileType.grass, const IsoCoordinate(0, 1), 1, 1, getRandomId());
    var t3 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1, getRandomId());
    var t4 =
        Tile(TileType.grass, const IsoCoordinate(-1, 0), 1, 1, getRandomId());
    var t5 =
        Tile(TileType.grass, const IsoCoordinate(-1, -1), 1, 1, getRandomId());
    List<Tile> tiles = [t4, t5, t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t5);
    expect(tiles[1], t4);
    expect(tiles[2], t3);
    expect(tiles[3], t2);
    expect(tiles[4], t1);
  });

  /*
  test("Sort tiles with different widths", () {
    Tile t1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3);
    Tile t2 = Tile(TileType.grass, const IsoCoordinate(2, -1), 1, 1);
    Tile t3 = Tile(TileType.grass, const IsoCoordinate(3, 0), 1, 1);
    Tile t4 = Tile(TileType.grass, const IsoCoordinate(-1, 1), 1, 1);
    Tile t5 = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 2);
    List<GameObject> tiles = [t1, t2, t3, t4, t5];
    tiles.sort();
    expect(tiles[0], t3);
    expect(tiles[1], t1);
    expect(tiles[2] == t2 || tiles[2] == t5, true);
    expect(tiles[3] == t2 || tiles[3] == t5, true);
    expect(tiles[4], t4);
  });
   */

  test("Sort tiles with different heights", () {
    var t1 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3, getRandomId());
    var t2 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 2, getRandomId());
    var t3 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 3, 1, getRandomId());
    List<Tile> tiles = [t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1], t2);
    expect(tiles[2], t3);
  });

  test("Sort tiles with different heights", () {
    var t1 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3, getRandomId());
    var t2 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1, getRandomId());
    var t3 =
        Tile(TileType.grass, const IsoCoordinate(0, 0), 5, 1, getRandomId());
    List<Tile> tiles = [t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1] == t2 || tiles[1] == t3, true);
    expect(tiles[2] == t2 || tiles[2] == t3, true);
  });

  test("Decode and encode 1x1 tile", () {
    Tile tile = Tile(
      TileType.grass,
      const IsoCoordinate.fromIso(2, 2),
      2,
      1,
      getRandomId(),
    );
    List encoded = tile.gameObjectToList();
    Tile decoded = Tile.fromList(encoded);
    expect(decoded.elevation, 2);
    expect(decoded.type, TileType.grass);
    expect(decoded.isoCoordinate, const IsoCoordinate.fromIso(2, 2));
    expect(decoded.isVisible(), true);
  });

  test("Decode and encode 2x2 tile", () {
    Tile tile = Tile(TileType.grass, const IsoCoordinate.fromIso(-1, -1), -1, 2,
        getRandomId());
    List encoded = tile.gameObjectToList();
    Tile decoded = Tile.fromList(encoded);
    expect(decoded.elevation, -1);
    expect(decoded.type, TileType.grass);
    expect(decoded.isoCoordinate, const IsoCoordinate.fromIso(-1, -1));
    expect(decoded.width, 2);
  });
}
