import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/optimization/tile_map_simplifier.dart';
import 'package:flutter_test/flutter_test.dart';

/// Simplifien tiles together can improve performance a lot.
void main() {
  test("Multiple tiles to large tile", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 1, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first.isoCoordinate, const IsoCoordinate.fromIso(0, 0));
  });

  test("Multiple tiles to large tile", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 1), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 2), 1, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first.isoCoordinate, const IsoCoordinate.fromIso(1, 1));
  });

  test("Multiple tiles to large large tile.", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.sand, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 0), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 1), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 2), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 3), 1, 1),
      ],
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 8);
    expect(simplifiedTiles[1].width, 3);
    expect(simplifiedTiles[1].isoCoordinate, const IsoCoordinate.fromIso(1, 0));
  });

  test("Complex simplification", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.sand, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 0), 1, 1),
        Tile(TileType.sand, const IsoCoordinate.fromIso(3, 0), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 1), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 2), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 2), 1, 1),
      ],
      [
        Tile(TileType.sand, const IsoCoordinate.fromIso(0, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(2, 3), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(3, 3), 1, 1),
      ],
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 10);
    expect(simplifiedTiles.first.type, TileType.sand);
    expect(simplifiedTiles.first.isoCoordinate, const IsoCoordinate.fromIso(0, 0));
  });

  test("No simplification. Only one tile", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 1, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
  });

  test("No simplification. Different types", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.sand, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.deathGrass, const IsoCoordinate.fromIso(0, 1), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 1, 1),
        Tile(TileType.snow, const IsoCoordinate.fromIso(1, 1), 1, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
  });

  test("No simplification. Different height", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 1), 2, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 3, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 4, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
    expect(simplifiedTiles.first.elevation, 1);
  });

  test("No simplification. One tile has different height", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 0), 1, 1),
      ],
      [
        Tile(TileType.grass, const IsoCoordinate.fromIso(0, 1), 1, 1),
        Tile(TileType.grass, const IsoCoordinate.fromIso(1, 1), 2, 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
    expect(simplifiedTiles.first.isoCoordinate, const IsoCoordinate.fromIso(0, 0));
  });
}
