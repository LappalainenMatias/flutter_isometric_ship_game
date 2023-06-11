import 'dart:math';

import 'package:anki/map/iso_coordinate.dart';
import 'package:anki/map/region/region_manager.dart';
import 'package:anki/map/region/tile/natural_items/natural_items.dart';
import 'package:anki/map/region/tile/tile.dart';
import 'package:anki/map/region/tile/tile_creator.dart';
import 'package:test/test.dart';

void main() {
  /// Results (ms) (256x256):
  /// 538/537/538
  /// 452/428/414/441 SimplexNoise
  /// 357/354/357/357 OpenSimplexNoise
  /// 299/300/300/302
  ///
  /// Results (ms) (32x32):
  /// 34/32/32/31
  test('Region creation', () {
    Stopwatch stopwatch = Stopwatch()..start();
    RegionCreator regionCreator = RegionCreator();
    regionCreator.create(const IsoCoordinate(0, 0), 256, 256, 0, 0);
    print("Test took ${stopwatch.elapsedMilliseconds} ms");
  });

  /// 20000 grass and birch tree
  /// 172/154/174/153
  ///
  test('20000 grass and birch', () {
    Stopwatch stopwatch = Stopwatch()..start();
    List positions = [];
    List colors = [];
    for (int i = 0; i < 20000; i++) {
      Tile tile =
          Tile(TileType.grass, Point(i.toDouble(), 0), 1, NaturalItem.birch);
      List posAndCol = tile.getPosAndCols();
      positions.addAll(posAndCol[0]);
      colors.addAll(posAndCol[1]);
    }
    print("20000 grass and birch took ${stopwatch.elapsedMilliseconds} ms");
  });

  /// 20000 grass
  /// 32/30/30/30
  test('20000 grass', () {
    Stopwatch stopwatch = Stopwatch()..start();
    List positions = [];
    List colors = [];
    for (int i = 0; i < 20000; i++) {
      Tile tile =
          Tile(TileType.grass, Point(i.toDouble(), 0), 1, NaturalItem.empty);
      List posAndCol = tile.getPosAndCols();
      positions.addAll(posAndCol[0]);
      colors.addAll(posAndCol[1]);
    }
    print("20000 grass took ${stopwatch.elapsedMilliseconds} ms");
  });

  /// 20000 grass under water
  /// 46/53/45/48
  test('20000 grass under water', () {
    Stopwatch stopwatch = Stopwatch()..start();
    List positions = [];
    List colors = [];
    for (int i = 0; i < 20000; i++) {
      Tile tile =
          Tile(TileType.grass, Point(i.toDouble(), 0), -1, NaturalItem.empty);
      List posAndCol = tile.getPosAndCols();
      positions.addAll(posAndCol[0]);
      colors.addAll(posAndCol[1]);
    }
    print("20000 grass under water took ${stopwatch.elapsedMilliseconds} ms");
  });
}
