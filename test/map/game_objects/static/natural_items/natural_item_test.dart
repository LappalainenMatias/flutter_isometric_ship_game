import 'package:anki/map/region/game_objects/static/natural_items/natural_items.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("Create rock", () {
    NaturalItemType rock = NaturalItemType.rock;
    VerticeDTO vertices = rock.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });

  test("Create spruce", () {
    NaturalItemType spruce = NaturalItemType.spruce;
    VerticeDTO vertices = spruce.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });

  test("Create birch", () {
    NaturalItemType birch = NaturalItemType.birch;
    VerticeDTO vertices = birch.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(vertices.positions.length >= 36, true);
    expect(vertices.colors.length >= 18, true);
  });
}