import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../gameloop/game_loop.dart';

class AddOpponent extends StatelessWidget {
  const AddOpponent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var gameloop = Provider.of<GameLoop>(context, listen: false);
    return ElevatedButton(
      onPressed: () {
        gameloop.game.addOpponent();
      },
      child: const Text("Add ship"),
    );
  }
}
