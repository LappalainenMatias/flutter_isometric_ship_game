import 'package:anki/map/camera/camera.dart';
import 'package:anki/map/game_map.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Map should have vertices", () {
    GameMap map = GameMap();
    map.setZoomLevel(0.1);
    MapDTO mapDTO = map.getVerticesInView();
    expect(mapDTO.aboveWater.isNotEmpty || mapDTO.underWater.isNotEmpty, true);
    expect(map.verticesCount > 0, true);
  });

  test("Map should have less vertices after zoom in", () {
    GameMap map = GameMap();
    map.setZoomLevel(0.2);
    MapDTO mapDTO1 = map.getVerticesInView();
    map.setZoomLevel(0.1);
    MapDTO mapDTO2 = map.getVerticesInView();
    map.setZoomLevel(0.0);
    MapDTO mapDTO3 = map.getVerticesInView();
    expect(mapDTO1.verticesCount > mapDTO2.verticesCount, true);
    expect(mapDTO2.verticesCount > mapDTO3.verticesCount, true);
  });

  test("Map with low level of detail should have less vertices", () {
    GameMap map = GameMap();
    map.setZoomLevel(0.2);
    MapDTO highDetail = map.getVerticesInView(LevelOfDetail.maximum);
    MapDTO lowDetail = map.getVerticesInView(LevelOfDetail.low);
    expect(highDetail.verticesCount > lowDetail.verticesCount * 2, true);
  });

  test("With aspect ratio 1, width and height should match", () {
    GameMap map = GameMap();
    map.setAspectRatio(1.0);
    expect(map.width, map.height);
  });

  test("With other than 1 aspect ratio, width and height should NOT match", () {
    GameMap map = GameMap();
    map.setAspectRatio(0.5);
    expect(map.width != map.height, true);
    map.setAspectRatio(2.0);
    expect(map.width != map.height, true);
  });

  test("Map width and height should always be positive", () {
    GameMap map = GameMap();
    expect(map.width > 0, true);
    expect(map.height > 0, true);

    map.setAspectRatio(0.0);
    expect(map.width > 0, true);
    expect(map.height > 0, true);

    map.setAspectRatio(-1.0);
    expect(map.width > 0, true);
    expect(map.height > 0, true);

    map.setZoomLevel(-1.0);
    expect(map.width > 0, true);
    expect(map.height > 0, true);

    map.setZoomLevel(0.0);
    expect(map.width > 0, true);
    expect(map.height > 0, true);
  });

  test("Move map up, down, left and right", () {
    GameMap map = GameMap();
    map.setZoomLevel(0.1);

    IsoCoordinate preTopLeft = map.cameraTopLeft;
    map.moveCamera(1, 1);
    IsoCoordinate postTopLeft = map.cameraTopLeft;
    expect(preTopLeft.isoX < postTopLeft.isoX, true);
    expect(preTopLeft.isoY < postTopLeft.isoY, true);

    preTopLeft = map.cameraTopLeft;
    map.moveCamera(-1, -1);
    postTopLeft = map.cameraTopLeft;
    expect(preTopLeft.isoX > postTopLeft.isoX, true);
    expect(preTopLeft.isoY > postTopLeft.isoY, true);

    preTopLeft = map.cameraTopLeft;
    map.moveCamera(1, -1);
    postTopLeft = map.cameraTopLeft;
    expect(preTopLeft.isoX < postTopLeft.isoX, true);
    expect(preTopLeft.isoY > postTopLeft.isoY, true);

    preTopLeft = map.cameraTopLeft;
    map.moveCamera(-1, 1);
    postTopLeft = map.cameraTopLeft;
    expect(preTopLeft.isoX > postTopLeft.isoX, true);
    expect(preTopLeft.isoY < postTopLeft.isoY, true);
  });
}
