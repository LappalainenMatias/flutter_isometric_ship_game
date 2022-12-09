import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:anki/map/map_helper.dart';
import 'package:anki/map/map.dart';
import 'package:anki/map/square.dart';
import 'package:test/test.dart';
import 'package:anki/item/special_item.dart';

void main() {
  test('Calculate manhattan distance', () {
    expect(manhattanDistance(0, 0, 1, 2), 3);
    expect(manhattanDistance(1, 2, 5, 4), 6);
    expect(manhattanDistance(5, 4, 0, 0), 9);
    expect(manhattanDistance(10000, 10000, 0, 0), 20000);
  });

  test('Calculate euclidean distance', () {
    expect(euclideanDistance(-10, 0, 10, 0), 20);
    expect(euclideanDistance(0, -10, 0, 10), 20);
    expect(euclideanDistance(0, 0, 1, 1).toString().substring(0, 4), "1.41");
    expect(euclideanDistance(-1, -2, 4, 5).toString().substring(0, 4), "8.60");
  });

  test('Find path to item', () {
    /// Item is in the top left corner, G = Grass, W = Water
    /// GGW
    /// GGG
    /// WWG
    /// GGW
    List<List<Square>> squares = [
      [
        Square(SquareType.grass, 0, 0, SquareVisibility.inView, [SpecialItem.heart], null),
        Square(SquareType.grass, 1, 0, SquareVisibility.inView, [], null),
        Square(SquareType.ocean, 2, 0, SquareVisibility.inView, [], null),
      ],
      [
        Square(SquareType.grass, 0, 1, SquareVisibility.inView, [], null),
        Square(SquareType.grass, 1, 1, SquareVisibility.inView, [], null),
        Square(SquareType.grass, 2, 1, SquareVisibility.inView, [], null),
      ],
      [
        Square(SquareType.ocean, 0, 2, SquareVisibility.inView, [], null),
        Square(SquareType.ocean, 1, 2, SquareVisibility.inView, [], null),
        Square(SquareType.grass, 2, 2, SquareVisibility.inView, [], null),
      ],
      [
        Square(SquareType.grass, 0, 3, SquareVisibility.inView, [], null),
        Square(SquareType.grass, 1, 3, SquareVisibility.inView, [], null),
        Square(SquareType.ocean, 2, 3, SquareVisibility.inView, [], null),
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
