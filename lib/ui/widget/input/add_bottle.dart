import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../../gameloop/ship_game_input.dart';

class AddBottle extends StatelessWidget {
  const AddBottle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var shipGameInput = Provider.of<ShipGameInput>(context, listen: false);
    return ElevatedButton(
      onPressed: () {
        shipGameInput.addBottle();
      },
      child: const Text("Add bottle"),
    );
  }
}
