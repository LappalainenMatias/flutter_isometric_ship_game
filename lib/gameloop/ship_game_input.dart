import 'package:anki/game_specific/ship_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';


class ShipGameInput extends ChangeNotifier {
  final ShipGame _shipGame;
  bool joystickSelected = false;

  ShipGameInput(this._shipGame);

  void screenClicked(double xPercent, double yPercent) {
    var target = _shipGame.getGameCoordinate(xPercent, yPercent);
    _shipGame.playerShootCannonball(target);
  }

  void addOpponent() {
    _shipGame.addOpponent();
  }

  void keyDownEvent(LogicalKeyboardKey logicalKey) {
    _shipGame.keyDownEvent(logicalKey);
  }

  void keyUpEvent(LogicalKeyboardKey logicalKey) {
    _shipGame.keyUpEvent(logicalKey);
  }

  void zoomIn() {
    _shipGame.zoomIn();
  }

  void zoomOut() {
    _shipGame.zoomOut();
  }

  void useJoystick() {
    _shipGame.useJoystick();
    joystickSelected = true;
    notifyListeners();
  }

  void useKeyboard() {
    _shipGame.useKeyboard();
    joystickSelected = false;
    notifyListeners();
  }

  void joystickEvent(double x, double y) {
    _shipGame.joystickEvent(x, y);
  }

  void addBottle() {
    _shipGame.addBottle();
  }

  void aspectRatioChange(double aspectRatio) {
    _shipGame.setScreenAspectRatio(aspectRatio);
  }
}