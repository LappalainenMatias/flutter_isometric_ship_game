import 'package:anki/foundation/game.dart';
import 'package:anki/foundation/rendering_data/rendering_data.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class GameLoop extends ChangeNotifier {
  late final Ticker _ticker;
  late final Game game;
  /// We start with 10 because there is a visual side effect if you start with 0
  double timePassed = 10.0;
  double dt = 0.0;
  Duration _previous = Duration.zero;
  int missedFrames = 0;

  GameLoop(TickerProvider vsync, this.game) {
    _ticker = vsync.createTicker(_onTick)..start();
  }

  void _onTick(Duration timestamp) {
    final durationDelta = timestamp - _previous;
    dt = durationDelta.inMilliseconds / Duration.millisecondsPerSecond;
    if (dt > 0.017) {
      missedFrames++;
    }
    _previous = timestamp;
    timePassed += dt;
    update(dt);
    notifyListeners(); // This is Render()
  }

  void update(var dt) {
    game.update(dt);
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  (
  List<(RenderingData, Rect)> underWater,
  List<(RenderingData, Rect)> aboveWater
  ) renderingData() {
    return game.renderingData();
  }
}
