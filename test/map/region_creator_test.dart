import 'dart:math';
import 'package:anki/map/area/area_creator.dart';
import 'package:anki/map/area/ground_area.dart';
import 'package:anki/map/creation/square.dart';
import 'package:anki/map/creation/type.dart';
import 'package:test/test.dart';

void main() {
  test("Create points between points", () {
    Set areas = AreaCreator.pointsInArea(Point(0, 0), Point(1, 1));
    expect(areas.length, 1);
    areas = AreaCreator.pointsInArea(Point(0, 0), Point(2, 2));
    expect(areas.length, 4);
  });

  test("Create ground area from squares", () {
    List<List<MockSquare>> matrix = [
      [MockSquare.grass(Point(0, 0)), MockSquare.grass(Point(1, 0))],
      [MockSquare.grass(Point(0, -1)), MockSquare.grass(Point(1, -1))]
    ];
    List<GroundArea> areas = AreaCreator.groundAreas(Point(0, 0), matrix);
    expect(areas.length, 1);
    expect(areas.first.topLeft, Point(0, 0));
    expect(areas.first.bottomRight, Point(2, -2));
    expect(areas.first.type, Type.grass);
  });

  test("Create ground area from squares", () {
    List<List<MockSquare>> matrix = [
      [MockSquare.ocean(Point(0, 0)), MockSquare.grass(Point(1, 0))],
      [MockSquare.grass(Point(0, -1)), MockSquare.grass(Point(1, -1))]
    ];
    List<GroundArea> areas = AreaCreator.groundAreas(Point(0, 0), matrix);
    expect(areas.length, 3);
  });

  test("Create ground area from squares", () {
    List<List<MockSquare>> matrix = [
      [MockSquare.ocean(Point(0, 0)), MockSquare.grass(Point(1, 0))],
      [MockSquare.grass(Point(0, -1)), MockSquare.grass(Point(1, -1))],
      [MockSquare.grass(Point(0, -2)), MockSquare.grass(Point(1, -2))],
      [MockSquare.grass(Point(0, -3)), MockSquare.ocean(Point(1, -3))]
    ];
    List<GroundArea> areas = AreaCreator.groundAreas(Point(0, 0), matrix);
    expect(areas.length, 5);
    expect(areas.first.topLeft, Point(0, 0));
    expect(areas.first.bottomRight, Point(1, -1));
    expect(areas[1].topLeft, Point(1, 0));
    expect(areas[1].bottomRight, Point(2, -3));
  });

  test("Create ground area from squares", () {
    List<List<MockSquare>> matrix = [
      [MockSquare.ocean(Point(0, 0)), MockSquare.grass(Point(1, 0))],
      [MockSquare.grass(Point(0, -1)), MockSquare.ocean(Point(1, -1))],
      [MockSquare.ocean(Point(0, -2)), MockSquare.grass(Point(1, -2))],
      [MockSquare.grass(Point(0, -3)), MockSquare.ocean(Point(1, -3))]
    ];
    List<GroundArea> areas = AreaCreator.groundAreas(Point(0, 0), matrix);
    expect(areas.length, 8);
  });

  test("Create ground area from squares", () {
    List<List<MockSquare>> matrix = [
      [MockSquare.grass(Point(1, 1)), MockSquare.grass(Point(2, 1))],
      [MockSquare.grass(Point(1, 0)), MockSquare.grass(Point(2, 0))]
    ];
    List<GroundArea> areas = AreaCreator.groundAreas(Point(1, 1), matrix);
    expect(areas.length, 1);
    expect(areas.first.topLeft, Point(1, 1));
    expect(areas.first.bottomRight, Point(3, -1));
  });
}

///This is used for testing
class MockSquare extends Square {
  Point<int> topLeft;

  MockSquare(type, this.topLeft) : super(type);

  static MockSquare grass(topLeft) {
    return MockSquare(Type.grass, topLeft);
  }

  static MockSquare ocean(topLeft) {
    return MockSquare(Type.ocean, topLeft);
  }
}
