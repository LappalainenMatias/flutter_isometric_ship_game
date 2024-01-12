import 'package:anki/game_specific/ship_game.dart';
import 'package:test/test.dart';

void main() {
  test("With aspect ratio 1, width and height should match", () {
    var game = ShipGame();
    game.setScreenAspectRatio(1.0);
    expect(game.viewWidth, game.viewHeight);
  });

  test("With aspect ratio of 2 the width should be 2 times the height", () {
    var game = ShipGame();
    game.setScreenAspectRatio(2.0);
    expect(game.viewWidth, game.viewHeight * 2);
  });

  test("Map width and height should always be positive", () {
    var game = ShipGame();
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setScreenAspectRatio(0.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setScreenAspectRatio(-1.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setZoomLevel(-1.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);

    game.setZoomLevel(0.0);
    expect(game.viewWidth > 0, true);
    expect(game.viewHeight > 0, true);
  });
}
