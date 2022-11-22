import 'package:anki/enum/square_type.dart';
import 'package:anki/enum/square_visibility.dart';
import 'package:anki/map_helper.dart';
import 'package:anki/square.dart';
import 'package:test/test.dart';
import 'package:anki/enum/item.dart';
import 'dart:math';

void main() {
  test('Calculate manhattan distance', () {
    Square s1 = Square(SquareType.grass, 0, 0, SquareVisibility.inView, []);
    Square s2 = Square(SquareType.grass, 1, 2, SquareVisibility.inView, []);
    Square s3 = Square(SquareType.grass, 5, 4, SquareVisibility.inView, []);
    Square s4 =
        Square(SquareType.grass, 10000, 10000, SquareVisibility.inView, []);
    expect(manhattanDistance(s1, s2), 3);
    expect(manhattanDistance(s2, s3), 6);
    expect(manhattanDistance(s3, s1), 9);
    expect(manhattanDistance(s4, s1), 20000);
  });

  test('Find path to item', () {
    /// Item is in the top left corner, G = Grass, W = Water
    /// GGW
    /// GGG
    /// WWG
    /// GGW
    Map<Point, Square> squares = {
      const Point(0, 0):
          Square(SquareType.grass, 0, 0, SquareVisibility.inView, [Item.heart]),
      const Point(1, 0):
          Square(SquareType.grass, 1, 0, SquareVisibility.inView, []),
      const Point(2, 0):
          Square(SquareType.water, 2, 0, SquareVisibility.inView, []),
      const Point(0, 1):
          Square(SquareType.grass, 0, 1, SquareVisibility.inView, []),
      const Point(1, 1):
          Square(SquareType.grass, 1, 1, SquareVisibility.inView, []),
      const Point(2, 1):
          Square(SquareType.grass, 2, 1, SquareVisibility.inView, []),
      const Point(0, 2):
          Square(SquareType.water, 0, 2, SquareVisibility.inView, []),
      const Point(1, 2):
          Square(SquareType.water, 1, 2, SquareVisibility.inView, []),
      const Point(2, 2):
          Square(SquareType.grass, 2, 2, SquareVisibility.inView, []),
      const Point(0, 3):
          Square(SquareType.grass, 0, 2, SquareVisibility.inView, []),
      const Point(1, 3):
          Square(SquareType.grass, 1, 2, SquareVisibility.inView, []),
      const Point(2, 3):
          Square(SquareType.water, 2, 2, SquareVisibility.inView, []),
    };
    List path1 = PathFinder.pathToClosestItem(1, 0, squares);
    List path2 = PathFinder.pathToClosestItem(1, 1, squares);
    List path3 = PathFinder.pathToClosestItem(2, 2, squares);
    List path4 = PathFinder.pathToClosestItem(0, 3, squares);
    List path5 = PathFinder.pathToClosestItem(0, 0, squares);
    expect(path1.length, 1);
    expect(path2.length, 2);
    expect(path3.length, 4);
    expect(path4.length, 0);
    expect(path5.length, 0);
    expect(path3[0].x, 2);
    expect(path3[0].y, 1);
  });
}
