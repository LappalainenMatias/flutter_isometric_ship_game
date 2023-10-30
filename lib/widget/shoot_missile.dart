import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../game.dart';

class ShootMissile extends StatelessWidget {
  const ShootMissile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: false);
    return ElevatedButton(
      onPressed: () {
        game.addBird();
      },
      child: const Text("Shoot Missile"),
    );
  }
}
