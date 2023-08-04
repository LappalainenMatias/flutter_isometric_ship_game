import 'package:flutter/cupertino.dart';
import 'package:flutter/scheduler.dart';

import 'game.dart';

class GameLoop extends ChangeNotifier {
  late final Ticker _ticker;
  late final Game game;
  /// Time in seconds since last frame
  double deltaTime = 0.0;
  Duration _previous = Duration.zero;

  GameLoop(TickerProvider vsync, this.game) {
    _ticker = vsync.createTicker(_onTick)..start();
  }

  void _onTick(Duration timestamp) {
    final durationDelta = timestamp - _previous;
    deltaTime = durationDelta.inMilliseconds / Duration.millisecondsPerSecond;
    _previous = timestamp;
    update(deltaTime);
  }

  void update(var dt) {
    game.updateVisibleRegions();
    notifyListeners();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }
}
