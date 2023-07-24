import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';
import 'package:anki/map/region/region.dart';
import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Sort regions', () {
    Region r1 = Region(const Point(1, 0), []);
    Region r2 = Region(const Point(1, 1), []);
    Region r3 = Region(const Point(0, 0), []);
    List<Region> regions = [r1, r2, r3];
    regions.sort();
    expect(regions[0].regionCoordinate, const Point(1, 1));
    expect(regions[1].regionCoordinate, const Point(1, 0));
    expect(regions[2].regionCoordinate, const Point(0, 0));
  });

  test("Region's GameObjects should be in order", () {
    RegionDTO dto = RegionDTO(const Point(1, 1), [
      SingleTile(TileType.grass, const IsoCoordinate(-100, 0), 1),
      SingleTile(TileType.grass, const IsoCoordinate(-100, 1), 1),
      SingleTile(TileType.grass, const IsoCoordinate(-100, -1), 1),
      SingleTile(TileType.grass, const IsoCoordinate(0, 100), 1),
      SingleTile(TileType.grass, const IsoCoordinate(1, 100), 1),
      SingleTile(TileType.grass, const IsoCoordinate(-1, 100), 1),
    ]);
    Region region = Region.fromRegionDTO(dto);
    List<GameObject> gameObjects = region.gameObjects;
    expect((gameObjects[0] as SingleTile).isoCoordinate, const IsoCoordinate(1, 100));
    expect((gameObjects[1] as SingleTile).isoCoordinate, const IsoCoordinate(0, 100));
    expect((gameObjects[2] as SingleTile).isoCoordinate, const IsoCoordinate(-1, 100));
    expect((gameObjects[3] as SingleTile).isoCoordinate, const IsoCoordinate(-100, 1));
    expect((gameObjects[4] as SingleTile).isoCoordinate, const IsoCoordinate(-100, 0));
    expect((gameObjects[5] as SingleTile).isoCoordinate, const IsoCoordinate(-100, -1));
  });
}
