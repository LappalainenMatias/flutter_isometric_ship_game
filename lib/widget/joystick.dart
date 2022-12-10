import 'package:anki/game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_joystick/flutter_joystick.dart';

class JoyStick extends StatefulWidget {
  final GameModel game;

  const JoyStick({super.key, required this.game});

  @override
  State<JoyStick> createState() => _JoyStickState();
}

class _JoyStickState extends State<JoyStick> {
  @override
  Widget build(BuildContext context) {
    var game = widget.game;
    return SizedBox(
      width: 100,
      height: 100,
      child: Joystick(
        base: Container(
          decoration: BoxDecoration(
              color: Colors.black.withAlpha(60),
              borderRadius: const BorderRadius.all(Radius.circular(50))),
        ),
        stick: Container(
          width: 50,
          height: 50,
          decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(25))),
        ),
        period: const Duration(milliseconds: 20),
        onStickDragStart: () {
          game.start();
        },
        onStickDragEnd: () {
          game.pause();
        },
        mode: JoystickMode.all,
        listener: (details) {
          game.player.moveJoyStick(details.x, -1 * details.y, game.map);
        },
      ),
    );
  }
}
