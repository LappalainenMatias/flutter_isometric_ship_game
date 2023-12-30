import 'package:anki/gameloop/ship_game_input.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
class SelectMovementOption extends StatelessWidget {
  const SelectMovementOption({super.key});

  @override
  Widget build(BuildContext context) {
    var shipGameInput = Provider.of<ShipGameInput>(context, listen: false);
    return SimpleDialog(
      title: const Text('Select movement option'),
      children: <Widget>[
        SimpleDialogOption(
          onPressed: () {
            shipGameInput.useJoystick();
            Navigator.of(context).pop();
          },
          child: const Text('Joystick'),
        ),
        SimpleDialogOption(
          onPressed: () {
            shipGameInput.useKeyboard();
            Navigator.of(context).pop();
          },
          child: const Text('Keyboard WASD'),
        ),
      ],
    );
  }
}
