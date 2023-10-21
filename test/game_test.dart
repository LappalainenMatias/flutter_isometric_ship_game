import 'dart:ui';
import 'package:anki/game.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test("Game screen should visible things", () {
    Game game = Game();
    game.updateVisibleRegions();
    game.addGameObjectsToRegion();
    var data = game.getAtlasData();
    expect(data.aboveWater.isNotEmpty || data.underWater.isNotEmpty, true);
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

  test("Move game camera up, down, left and right", () {
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
