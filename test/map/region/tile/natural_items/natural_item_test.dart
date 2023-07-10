import 'package:anki/map/region/game_objects/natural_items/natural_items.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test("Create rock", () {
    NaturalItemType rock = NaturalItemType.rock;
    List posAndCols = rock.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });

  test("Create spruce", () {
    NaturalItemType spruce = NaturalItemType.spruce;
    List posAndCols = spruce.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });

  test("Create birch", () {
    NaturalItemType birch = NaturalItemType.birch;
    List posAndCols = birch.positionsAndColors!(const Point<double>(0.0, 0.0), 1.0);
    expect(posAndCols[0].length >= 36, true);
    expect(posAndCols[1].length >= 18, true);
  });
}