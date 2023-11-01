import 'package:flutter/material.dart';
import 'package:flutter_joystick/flutter_joystick.dart';
import 'package:provider/provider.dart';
import '../game.dart';

class JoyStick extends StatefulWidget {
  const JoyStick({super.key});

  @override
  State<JoyStick> createState() => _JoyStickState();
}

class _JoyStickState extends State<JoyStick> {
  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: false);
    return SizedBox(
      width: 100,
      height: 100,
      child: Joystick(
        base: Container(
          decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.3),
              borderRadius: const BorderRadius.all(Radius.circular(50))),
        ),
        stick: Container(
          width: 50,
          height: 50,
          decoration: const BoxDecoration(
              color: Colors.red,
              borderRadius: BorderRadius.all(Radius.circular(25))),
        ),
        period: const Duration(milliseconds: 16),
        mode: JoystickMode.all,
        listener: (details) {
          game.joystickEvent(details.x, -1 * details.y);
        },
        onStickDragEnd: () {
          game.joystickEvent(0, 0);
        }
      ),
    );
  }
}
