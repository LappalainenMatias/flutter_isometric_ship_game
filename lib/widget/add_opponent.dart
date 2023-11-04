import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../game.dart';

class AddOpponent extends StatelessWidget {
  const AddOpponent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: false);
    return ElevatedButton(
      onPressed: () {
        game.addOpponent();
      },
      child: const Text("Add opponent"),
    );
  }
}
