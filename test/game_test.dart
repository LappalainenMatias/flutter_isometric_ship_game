import 'package:anki/game.dart';
import 'package:anki/coordinates/iso_coordinate.dart';
import 'package:anki/online/online.dart';
import 'package:test/test.dart';

void main() {
  test("With aspect ratio 1, width and height should match", () {
    Game game = Game(Online());
    game.updateScreenAspectRatio(1.0);
    expect(game.viewWidth, game.viewHeight);
  });

  test("With aspect ratio of 2 the width should be 2 times the height", () {
    Game game = Game(Online());
    game.updateScreenAspectRatio(2.0);
    expect(game.viewWidth, game.viewHeight * 2);
  });

  test("Map width and height should always be positive", () {
    Game game = Game(Online());
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
    Game game = Game(Online());
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
    expect(preTopLeft.isoY < postTopLeft.isoY, true);

    preTopLeft = game.viewTopLeft;
    game.moveCamera(-1, 1);
    postTopLeft = game.viewTopLeft;
    expect(preTopLeft.isoX > postTopLeft.isoX, true);
    expect(preTopLeft.isoY > postTopLeft.isoY, true);
  });
}
