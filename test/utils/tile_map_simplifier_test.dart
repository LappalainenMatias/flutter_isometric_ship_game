import 'dart:math';
import 'package:anki/map/region/game_objects/ground/tile_type.dart';
import 'package:anki/map/region/game_objects/ground/tile.dart';
import 'package:anki/utils/tile_map_simplifier.dart';
import 'package:flutter_test/flutter_test.dart';

/// Simplifien tiles together can improve performance a lot.
void main() {
  test("Multiple tiles to single tile", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
        SingleTile(TileType.grass, const Point(1, 0), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 1), 1),
        SingleTile(TileType.grass, const Point(1, 1), 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first is AreaTile, true);
    expect(simplifiedTiles.first.getCoordinate(), const Point<double>(0, 0));
  });

  test("Multiple tiles to single tile. Not starting from origin", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(1, 1), 1),
        SingleTile(TileType.grass, const Point(2, 1), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(1, 2), 1),
        SingleTile(TileType.grass, const Point(2, 2), 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first is AreaTile, true);
    expect(simplifiedTiles.first.getCoordinate(), const Point<double>(1, 1));
  });

  test("Multiple tiles to single large tile.", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
        SingleTile(TileType.grass, const Point(1, 0), 1),
        SingleTile(TileType.grass, const Point(2, 0), 1),
        SingleTile(TileType.grass, const Point(3, 0), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 1), 1),
        SingleTile(TileType.grass, const Point(1, 1), 1),
        SingleTile(TileType.grass, const Point(2, 1), 1),
        SingleTile(TileType.grass, const Point(3, 1), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 2), 1),
        SingleTile(TileType.grass, const Point(1, 2), 1),
        SingleTile(TileType.grass, const Point(2, 2), 1),
        SingleTile(TileType.grass, const Point(3, 2), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 3), 1),
        SingleTile(TileType.grass, const Point(1, 3), 1),
        SingleTile(TileType.grass, const Point(2, 3), 1),
        SingleTile(TileType.sand, const Point(3, 3), 1),
      ],
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 8);
    expect(simplifiedTiles.first is AreaTile, true);
    expect(simplifiedTiles.first.getWidth(), 3);
    expect(simplifiedTiles.first.getCoordinate(), const Point<double>(0, 0));
  });

  test("Complex simplification", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.sand, const Point(0, 0), 1),
        SingleTile(TileType.grass, const Point(1, 0), 1),
        SingleTile(TileType.grass, const Point(2, 0), 1),
        SingleTile(TileType.sand, const Point(3, 0), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 1), 1),
        SingleTile(TileType.grass, const Point(1, 1), 1),
        SingleTile(TileType.grass, const Point(2, 1), 1),
        SingleTile(TileType.grass, const Point(3, 1), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 2), 1),
        SingleTile(TileType.grass, const Point(1, 2), 1),
        SingleTile(TileType.grass, const Point(2, 2), 1),
        SingleTile(TileType.grass, const Point(3, 2), 1),
      ],
      [
        SingleTile(TileType.sand, const Point(0, 3), 1),
        SingleTile(TileType.grass, const Point(1, 3), 1),
        SingleTile(TileType.grass, const Point(2, 3), 1),
        SingleTile(TileType.grass, const Point(3, 3), 1),
      ],
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 10);
    expect(simplifiedTiles.first is SingleTile, true);
    expect(simplifiedTiles.first.getType(), TileType.sand);
    expect(simplifiedTiles.first.getCoordinate(), const Point<double>(0, 0));
  });

  test("No simplification. Only one single tile", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first is SingleTile, true);
  });

  test("No simplification. Different type", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
        SingleTile(TileType.taiga, const Point(0, 1), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(1, 0), 1),
        SingleTile(TileType.taiga, const Point(1, 1), 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
  });

  test("No simplification. Different height", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
        SingleTile(TileType.grass, const Point(0, 1), 2),
      ],
      [
        SingleTile(TileType.grass, const Point(1, 0), 2),
        SingleTile(TileType.grass, const Point(1, 1), 1),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
    expect(simplifiedTiles.first is SingleTile, true);
    expect(simplifiedTiles.first.getElevation(), 1);
  });

  test("No simplification. One tile has different height", () {
    List<List<SingleTile>> tiles = [
      [
        SingleTile(TileType.grass, const Point(0, 0), 1),
        SingleTile(TileType.grass, const Point(1, 0), 1),
      ],
      [
        SingleTile(TileType.grass, const Point(0, 1), 1),
        SingleTile(TileType.grass, const Point(1, 1), 2),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    expect(simplifiedTiles.length, 4);
    expect(simplifiedTiles.first is SingleTile, true);
    expect(simplifiedTiles.first.getCoordinate(), const Point<double>(0, 0));
  });
}
