import 'dart:ui';

import 'package:anki/character/player.dart';
import 'package:anki/map/painting/painter_optimizer.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/map/square.dart';
import 'package:flutter/cupertino.dart';
import 'package:test/test.dart';

void main() {
  Square getGrassSquare(int x, int y) {
    return Square(SquareType.grass, x, y, SquareVisibility.seen, [], null);
  }

  Square getOceanSquare(int x, int y) {
    return Square(SquareType.ocean, x, y, SquareVisibility.seen, [], null);
  }

  test('rect drawing optimizer', () {
    /// All of the squares in a row which look the same should be drawn with one rect
    /// For example the first row should be only one rect of Green
    /// GGG <- 1 rect
    /// GGW <- 2 rects
    /// GWW <- 2 rects
    List<List<Square>> squares1 = [
      [getGrassSquare(0,0), getGrassSquare(0, 1), getGrassSquare(0, 2)],
      [getGrassSquare(1,0), getGrassSquare(1, 1), getOceanSquare(1, 2)],
      [getGrassSquare(2,0), getOceanSquare(2, 1), getOceanSquare(2, 2)],
    ];

    /// WGW <- 3 rects
    /// GWG <- 3 rect
    /// WGW <- 3 rect
    List<List<Square>> squares2 = [
      [getOceanSquare(0,0), getGrassSquare(0, 1), getOceanSquare(0, 2)],
      [getGrassSquare(1,0), getOceanSquare(1, 1), getGrassSquare(1, 2)],
      [getOceanSquare(2,0), getGrassSquare(2, 1), getOceanSquare(2, 2)],
    ];

    /// GGGGG <- 1 rect
    /// GGGGW <- 2 rects
    List<List<Square>> squares3 = [
      [getGrassSquare(0,0), getGrassSquare(0, 1), getGrassSquare(0, 2), getGrassSquare(0, 3), getGrassSquare(0, 4)],
      [getGrassSquare(1,0), getGrassSquare(1, 1), getGrassSquare(1, 2), getGrassSquare(1, 3), getOceanSquare(1, 4)],
    ];

    PlayerModel player = PlayerModel(25, 10, 10);

    Map<Rect, Color> rects1 = createRects(squares1, 1, player, {});
    Map<Rect, Color> rects2 = createRects(squares2, 1, player, {});
    Map<Rect, Color> rects3 = createRects(squares3, 1, player, {});

    expect(rects1.length, 5);
    expect(rects2.length, 9);
    expect(rects3.length, 3);
  });
}
