import 'dart:ui';
import 'package:anki/foundation/rendering_data/rendering_data.dart';
import 'camera/camera.dart';

abstract class Game {
  void update(double dt);

  (
  List<(RenderingData, Rect)> underWater,
  List<(RenderingData, Rect)> aboveWater
  ) renderingData();

  Camera getCamera();

  GameState getGameState();
}

enum GameState { going, gameOver, won }
