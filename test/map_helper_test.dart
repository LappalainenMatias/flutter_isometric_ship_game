import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/map/map_helper.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import 'package:test/test.dart';
import 'package:anki/character/item.dart';

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
    List<List<Square>> squares = [
      [
        Square(SquareType.grass, 0, 0, SquareVisibility.inView, [Item.heart]),
        Square(SquareType.grass, 1, 0, SquareVisibility.inView, []),
        Square(SquareType.water, 2, 0, SquareVisibility.inView, []),
      ],
      [
        Square(SquareType.grass, 0, 1, SquareVisibility.inView, []),
        Square(SquareType.grass, 1, 1, SquareVisibility.inView, []),
        Square(SquareType.grass, 2, 1, SquareVisibility.inView, []),
      ],
      [
        Square(SquareType.water, 0, 2, SquareVisibility.inView, []),
        Square(SquareType.water, 1, 2, SquareVisibility.inView, []),
        Square(SquareType.grass, 2, 2, SquareVisibility.inView, []),
      ],
      [
        Square(SquareType.grass, 0, 3, SquareVisibility.inView, []),
        Square(SquareType.grass, 1, 3, SquareVisibility.inView, []),
        Square(SquareType.water, 2, 3, SquareVisibility.inView, []),
      ]
    ];

    MapModel map = MapModel(3, 4, squares);
    List path1 = PathFinder.pathToClosestItem(1, 0, map);
    List path2 = PathFinder.pathToClosestItem(1, 1, map);
    List path3 = PathFinder.pathToClosestItem(2, 2, map);
    List path4 = PathFinder.pathToClosestItem(0, 3, map);
    List path5 = PathFinder.pathToClosestItem(0, 0, map);
    expect(path1.length, 1);
    expect(path2.length, 2);
    expect(path3.length, 4);
    expect(path4.length, 0);
    expect(path5.length, 0);
    expect(path3[0].x, 2);
    expect(path3[0].y, 1);
  });
}
