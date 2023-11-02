import 'package:anki/coordinates/borders.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/game_object.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Create borders from game objects", () {
    var gameObjects = <GameObject>[
      Tile(TileType.grass, const IsoCoordinate.fromIso(5, 10), 1, 1),
      Tile(TileType.grass, const IsoCoordinate.fromIso(10, 5), -1, 1),
      Tile(TileType.grass, const IsoCoordinate.fromIso(5, -10), -1, 1),
      Tile(TileType.grass, const IsoCoordinate.fromIso(-10, 5), 1, 1),
      Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 0, 1),
    ];
    var borders = createBorders(gameObjects);

    /// Top is + (1, 1) because of the elevation.
    expect(borders.top,
        const IsoCoordinate.fromIso(5, 10) + const IsoCoordinate(1, 1));

    /// bottom is - (1, 1) because of the elevation
    expect(borders.bottom,
        const IsoCoordinate.fromIso(5, -10) + const IsoCoordinate(-1, -1));
    expect(borders.left,
        const IsoCoordinate.fromIso(-10, 5) + const IsoCoordinate(1, 1));
    expect(borders.right,
        const IsoCoordinate.fromIso(10, 5) + const IsoCoordinate(-1, -1));
  });
}
