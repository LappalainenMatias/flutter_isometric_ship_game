import 'package:anki/foundation/coordinates/rectangle.dart';
import 'package:anki/foundation/coordinates/iso_coordinate.dart';
import 'package:anki/foundation/game_object/game_object.dart';
import 'package:anki/foundation/utils/random_id.dart';
import 'package:anki/game_specific/game_object/tile.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test("Create rectangles from game objects", () {
    var gameObjects = <GameObject>[
      Tile(TileType.grass, const IsoCoordinate.fromIso(5, 10), 1, 1,
          getRandomId()),
      Tile(TileType.grass, const IsoCoordinate.fromIso(10, 5), -1, 1,
          getRandomId()),
      Tile(TileType.grass, const IsoCoordinate.fromIso(5, -10), -1, 1,
          getRandomId()),
      Tile(TileType.grass, const IsoCoordinate.fromIso(-10, 5), 1, 1,
          getRandomId()),
      Tile(TileType.grass, const IsoCoordinate.fromIso(0, 0), 0, 1,
          getRandomId()),
    ];
    var rectangles = createRectangle(gameObjects);

    /// Top is + (1, 1) because of the elevation.
    expect(rectangles.top,
        (const IsoCoordinate.fromIso(5, 10) + const IsoCoordinate(1, 1)).isoY);

    /// bottom is - (1, 1) because of the elevation
    expect(rectangles.bottom,
        (const IsoCoordinate.fromIso(5, -10) + const IsoCoordinate(-1, -1)).isoY);
    expect(rectangles.left,
        (const IsoCoordinate.fromIso(-10, 5) + const IsoCoordinate(1, 1)).isoX);
    expect(rectangles.right,
        (const IsoCoordinate.fromIso(10, 5) + const IsoCoordinate(-1, -1)).isoX);
  });


  test("Check if rectangles overlap", () {
    var rectangle1 = Rectangle(
        top: 10,
        bottom: 0,
        left: 0,
        right: 10
    );
    var rectangle2 = Rectangle(
        top: 10,
        bottom: 0,
        left: 0,
        right: 10
    );
    var rectangle3 = Rectangle(
        top: 100,
        bottom: 100,
        left: 100,
        right: 105
    );
    var rectangle4 = Rectangle(
        top: 5,
        bottom: 4,
        left: 4,
        right: 5
    );
    expect(rectangle1.overlaps(rectangle2), true);
    expect(rectangle1.overlaps(rectangle3), false);
    expect(rectangle1.overlaps(rectangle4), true);
  });
}
