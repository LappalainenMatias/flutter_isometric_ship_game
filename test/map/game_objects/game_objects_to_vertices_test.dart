import 'package:anki/map/region/game_objects/game_object.dart';
import 'package:anki/map/region/game_objects/game_objects_to_vertices.dart';
import 'package:anki/map/region/game_objects/static/ground/tile.dart';
import 'package:anki/map/region/game_objects/static/ground/tile_type.dart';
import 'package:anki/utils/vertice_dto.dart';
import 'package:flutter_test/flutter_test.dart';
import 'dart:math';

void main() {
  test("Change game objects to vertices", () {
    List<GameObject> gameObjects = [
      SingleTile(TileType.grass, const Point<double>(1,1), 0),
      AreaTile(TileType.grass, const Point<double>(-1,-1), -1, width: 2),
    ];
    Map<String, VerticeDTO> vertices = toVertices(gameObjects);
    expect(vertices.isEmpty, isFalse);
    expect(vertices["underWater"]!.positions.length, 36);
    expect(vertices["aboveWater"]!.positions.length, 36);
  });
}
