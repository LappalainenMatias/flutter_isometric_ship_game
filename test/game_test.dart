import 'package:anki/camera/level_of_detail.dart';
import 'package:anki/game.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:anki/utils/map_dto.dart';
import 'package:test/test.dart';

void main() {
  test("Map should have vertices", () {
    Game game = Game();
    game.setZoomLevel(0.1);
    game.updateVisibleRegions();
    MapDTO mapDTO = game.getVerticesInView();
    expect(mapDTO.aboveWater.isNotEmpty || mapDTO.underWater.isNotEmpty, true);
    expect(game.verticesCount > 0, true);
  });

  test("Map with low level of detail should have less vertices", () {
    Game game = Game();
    game.setZoomLevel(0.2);
    game.updateVisibleRegions();
    MapDTO highDetail = game.getVerticesInView(LevelOfDetail.lod1x1);
    MapDTO lowDetail = game.getVerticesInView(LevelOfDetail.lod16x16);
    expect(highDetail.verticesCount > lowDetail.verticesCount * 2, true);
  });

  test("With aspect ratio 1, width and height should match", () {
    Game game = Game();
    game.updateScreenAspectRatio(1.0);
    expect(game.viewWidth, game.viewHeight);
  });

  test("With other than 1 aspect ratio, width and height should NOT match", () {
    Game game = Game();
    game.updateScreenAspectRatio(0.5);
    expect(game.viewWidth != game.viewHeight, true);
    game.updateScreenAspectRatio(2.0);
    expect(game.viewWidth != game.viewHeight, true);
  });

  test("Map width and height should always be positive", () {
    Game game = Game();
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.updateScreenAspectRatio(0.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.updateScreenAspectRatio(-1.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setZoomLevel(-1.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setZoomLevel(0.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);
  });

  test("Move game up, down, left and right", () {
    Game game = Game();
    game.setZoomLevel(0.1);

    IsoCoordinate preTopLeft = game.viewTopLeft;
    game.moveCamera(1, 1);
    IsoCoordinate postTopLeft = game.viewTopLeft;
    expect(preTopLeft.isoX < postTopLeft.isoX, true);
    expect(preTopLeft.isoY < postTopLeft.isoY, true);

    preTopLeft = game.viewTopLeft;
    game.moveCamera(-1, -1);
    postTopLeft = game.viewTopLeft;
    expect(preTopLeft.isoX > postTopLeft.isoX, true);
    expect(preTopLeft.isoY > postTopLeft.isoY, true);

    preTopLeft = game.viewTopLeft;
    game.moveCamera(1, -1);
    postTopLeft = game.viewTopLeft;
    expect(preTopLeft.isoX < postTopLeft.isoX, true);
    expect(preTopLeft.isoY > postTopLeft.isoY, true);

    preTopLeft = game.viewTopLeft;
    game.moveCamera(-1, 1);
    postTopLeft = game.viewTopLeft;
    expect(preTopLeft.isoX > postTopLeft.isoX, true);
    expect(preTopLeft.isoY < postTopLeft.isoY, true);
  });
}
