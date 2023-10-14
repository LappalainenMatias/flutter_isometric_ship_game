import 'package:flutter/cupertino.dart';
import 'package:flutter/scheduler.dart';

import 'game.dart';

class GameLoop extends ChangeNotifier {
  late final Ticker _ticker;
  late final Game game;
  double dt = 0.0;
  Duration _previous = Duration.zero;
  double timePassed = 0.0;

  GameLoop(TickerProvider vsync, this.game) {
    _ticker = vsync.createTicker(_onTick)..start();
  }

  void _onTick(Duration timestamp) {
    final durationDelta = timestamp - _previous;
    dt = durationDelta.inMilliseconds / Duration.millisecondsPerSecond;
    _previous = timestamp;
    update(dt);
    notifyListeners(); // This causes game map rendering
  }

  void update(var dt) {
    game.updateVisibleRegions();
    game.addGameObjectsToRegion();
    game.updateDynamicGameObjectRegions();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }
}
