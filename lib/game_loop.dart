import 'package:flutter/cupertino.dart';
import 'package:flutter/scheduler.dart';

class GameLoop extends ChangeNotifier {
  late final Ticker _ticker;

  /// Time in seconds since last frame
  double deltaTime = 0.0;
  Duration _previous = Duration.zero;

  GameLoop(TickerProvider vsync) {
    _ticker = vsync.createTicker(_onTick)..start();
  }

  void _onTick(Duration timestamp) {
    final durationDelta = timestamp - _previous;
    deltaTime = durationDelta.inMilliseconds / Duration.millisecondsPerSecond;
    _previous = timestamp;
    notifyListeners();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }
}
