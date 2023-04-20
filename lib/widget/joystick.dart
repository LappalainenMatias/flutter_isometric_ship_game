import 'package:flutter/material.dart';
import 'package:flutter_joystick/flutter_joystick.dart';
import 'package:provider/provider.dart';
import '../map/map.dart';

class JoyStick extends StatefulWidget {
  const JoyStick({super.key});

  @override
  State<JoyStick> createState() => _JoyStickState();
}

class _JoyStickState extends State<JoyStick> {
  @override
  Widget build(BuildContext context) {
    MapModel map = Provider.of<MapModel>(context, listen: false);
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
          decoration: BoxDecoration(
              color: Colors.red.withAlpha(80),
              borderRadius: const BorderRadius.all(Radius.circular(25))),
        ),
        period: const Duration(milliseconds: 15),
        mode: JoystickMode.all,
        listener: (details) {
          map.moveCamera(details.x, -1 * details.y);
        },
      ),
    );
  }
}
