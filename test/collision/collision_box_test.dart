import 'package:anki/collision/collision_box.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/game_objects/static/ground/tile.dart';
import 'package:anki/game_objects/static/ground/tile_type.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('getters should return correct values', () {
    var box = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 20, 0);
    expect(box.left, 0);
    expect(box.right, 10);
    expect(box.top, 15);
    expect(box.bottom, -5);
    expect(box.elevation, 0);
  });

  test('should detect overlap with another box', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 10, 0);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(10, 10), 10, 10, 0);
    expect(box1.overlaps(box2), true);
  });

  test('should detect no overlap with another box', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10, 10, -1);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(20, 20), 10, 10, -1);
    expect(box1.overlaps(box2), false);
  });

  test('Small overlap', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(5, 5), 10.01, 10.01, 1);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(15, 15), 10, 10, 1);
    expect(box1.overlaps(box2), true);
  });

  test('should not overlap because elevation difference is too large', () {
    var box1 = CollisionBox(const IsoCoordinate.fromIso(15, 15), 10, 10, 11);
    var box2 = CollisionBox(const IsoCoordinate.fromIso(15, 15), 10, 10, 0);
    expect(box1.overlaps(box2), false);
  });

  test('tiles next to each other should not collide', () {
    var center = Tile(TileType.ice, const IsoCoordinate(0, 0), 0, 1);
    /// These have different elevation
    var top = Tile(TileType.ice, const IsoCoordinate.fromIso(0, 0), 1, 1);
    var below = Tile(TileType.ice, const IsoCoordinate.fromIso(0, 0), -1, 1);
    /// These have same elevation
    var leftUp = Tile(TileType.ice, const IsoCoordinate(1, 0), 0, 1);
    var leftDown = Tile(TileType.ice, const IsoCoordinate(0, -1), 0, 1);
    var rightUp = Tile(TileType.ice, const IsoCoordinate(0, 1), 0, 1);
    var rightDown = Tile(TileType.ice, const IsoCoordinate(-1, 0), 0, 1);
    expect(center.collisionBox.overlaps(top.collisionBox), false);
    expect(center.collisionBox.overlaps(below.collisionBox), false);
    expect(center.collisionBox.overlaps(leftUp.collisionBox), false);
    expect(center.collisionBox.overlaps(leftDown.collisionBox), false);
    expect(center.collisionBox.overlaps(rightUp.collisionBox), false);
    expect(center.collisionBox.overlaps(rightDown.collisionBox), false);
  });
}
