import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Sort tiles", () {
    Tile t1 = Tile(TileType.grass, const IsoCoordinate(1, 1), 1, 1);
    Tile t2 = Tile(TileType.grass, const IsoCoordinate(0, 1), 1, 1);
    Tile t3 = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 1);
    Tile t4 = Tile(TileType.grass, const IsoCoordinate(-1, 0), 1, 1);
    Tile t5 = Tile(TileType.grass, const IsoCoordinate(-1, -1), 1, 1);
    List<Tile> tiles = [t4, t5, t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1], t2);
    expect(tiles[2], t3);
    expect(tiles[3], t4);
    expect(tiles[4], t5);
  });

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

  test("Sort tiles with different heights", () {
    Tile t1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3);
    Tile t2 = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 2);
    Tile t3 = Tile(TileType.grass, const IsoCoordinate(0, 0), 3, 1);
    List<Tile> tiles = [t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1], t2);
    expect(tiles[2], t3);
  });

  test("Sort tiles with different heights", () {
    Tile t1 = Tile(TileType.grass, const IsoCoordinate(0, 0), 1, 3);
    Tile t2 = Tile(TileType.grass, const IsoCoordinate(0, 0), 2, 1);
    Tile t3 = Tile(TileType.grass, const IsoCoordinate(0, 0), 5, 1);
    List<Tile> tiles = [t3, t1, t2];
    tiles.sort();
    expect(tiles[0], t1);
    expect(tiles[1] == t2 || tiles[1] == t3, true);
    expect(tiles[2] == t2 || tiles[2] == t3, true);
  });

  test("Decode and encode 1x1 tile", () {
    Tile tile =
    Tile(TileType.grass, const IsoCoordinate.fromIso(2, 2), 2, 1);
    List encoded = tile.gameObjectToList();
    Tile decoded = Tile.fromList(encoded);
    expect(decoded.elevation, 2);
    expect(decoded.type, TileType.grass);
    expect(decoded.isoCoordinate, const IsoCoordinate.fromIso(2, 2));
  });

  test("Decode and encode 2x2 tile", () {
    Tile tile =
    Tile(TileType.grass, const IsoCoordinate.fromIso(-1, -1), -1, 2);
    List encoded = tile.gameObjectToList();
    Tile decoded = Tile.fromList(encoded);
    expect(decoded.elevation, -1);
    expect(decoded.type, TileType.grass);
    expect(decoded.isoCoordinate, const IsoCoordinate.fromIso(-1, -1));
    expect(decoded.width, 2);
  });
}
