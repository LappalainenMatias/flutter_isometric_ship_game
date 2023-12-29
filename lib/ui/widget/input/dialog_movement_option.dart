import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../gameloop/game_loop.dart';

class SelectMovementOption extends StatelessWidget {
  const SelectMovementOption({super.key});

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<GameLoop>(context, listen: false).game;
    return SimpleDialog(
      title: const Text('Select movement option'),
      children: <Widget>[
        SimpleDialogOption(
          onPressed: () {
            game.useJoystick();
            Navigator.of(context).pop();
          },
          child: const Text('Joystick'),
        ),
        SimpleDialogOption(
          onPressed: () {
            game.useKeyboard();
            Navigator.of(context).pop();
          },
          child: const Text('Keyboard WASD'),
        ),
      ],
    );
  }
}
