import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import '../foundation/game.dart';
import '../game_specific/ship_game.dart';

class GameLoop extends ChangeNotifier {
  late final Ticker _ticker;
  late final ShipGame game;
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
    update(dt);
    notifyListeners(); // This causes map to render gameobjects
  }

  void update(var dt) {
    game.update(dt);
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }
}
