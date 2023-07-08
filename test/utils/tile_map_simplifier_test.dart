import 'dart:math';
import 'package:anki/map/region/tile/natural_items/natural_items.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_type.dart';
import 'package:anki/utils/tile_map_simplifier.dart';
import 'package:flutter_test/flutter_test.dart';

/// Simplifien tiles together can improve performance a lot.
void main() {
  test("Multiple tiles to single tile", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const Point(0, 0), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 0), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(0, 1), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 1), 1, NaturalItem.empty),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    expect(tilesCount, 4);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles[0].width, 2);
    expect(simplifiedTiles.first.coordinate, const Point<double>(0, 0));
  });

  test("Multiple tiles to single tile. Not starting from origin", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const Point(1, 1), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 1), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(1, 2), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 2), 1, NaturalItem.empty),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    expect(tilesCount, 4);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles[0].width, 2);
    expect(simplifiedTiles.first.coordinate, const Point<double>(1, 1));
  });

  test("Complex simplification", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.sand, const Point(0, 0), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 0), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 0), 1, NaturalItem.empty),
        Tile(TileType.sand, const Point(3, 0), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(0, 1), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 1), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 1), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(3, 1), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(0, 2), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 2), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 2), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(3, 2), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.sand, const Point(0, 3), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 3), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(2, 3), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(3, 3), 1, NaturalItem.empty),
      ],
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    for (var tile in simplifiedTiles) {
      print(tile.type.toString() + " " + tile.coordinate.toString() + " " + tile.width.toString());
    }
    expect(tilesCount, 16);
    expect(simplifiedTiles.length, 10);
    expect(simplifiedTiles.first.width, 1);
    expect(simplifiedTiles.first.type, TileType.sand);
    expect(simplifiedTiles.first.coordinate, const Point<double>(0, 0));
  });

  test("No simplification. Only one single tile", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const Point(0, 0), 1, NaturalItem.empty),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    expect(tilesCount, 1);
    expect(simplifiedTiles.length, 1);
    expect(simplifiedTiles.first.width, 1);
  });

  test("No simplification. Different type", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const Point(0, 0), 1, NaturalItem.empty),
        Tile(TileType.taiga, const Point(0, 1), 1, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(1, 0), 1, NaturalItem.empty),
        Tile(TileType.taiga, const Point(1, 1), 1, NaturalItem.empty),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    expect(tilesCount, 4);
    expect(simplifiedTiles.length, 4);
  });

  test("No simplification. Different height", () {
    List<List<Tile>> tiles = [
      [
        Tile(TileType.grass, const Point(0, 0), 1, NaturalItem.empty),
        Tile(TileType.grass, const Point(0, 1), 2, NaturalItem.empty),
      ],
      [
        Tile(TileType.grass, const Point(1, 0), 2, NaturalItem.empty),
        Tile(TileType.grass, const Point(1, 1), 1, NaturalItem.empty),
      ]
    ];
    List<Tile> simplifiedTiles = simplifyTiles(tiles);
    double tilesCount = 0;
    for (var tile in simplifiedTiles) {
      tilesCount += tile.width * tile.width;
    }
    expect(tilesCount, 4);
    expect(simplifiedTiles.length, 4);
    expect(simplifiedTiles.first.width, 1);
    expect(simplifiedTiles.first.elevation, 1);
  });
}
