import 'package:anki/character/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../item/inventory/inventory.dart';

class InventoryWidget extends StatefulWidget {
  final PlayerModel player;

  const InventoryWidget({super.key, required this.player});

  @override
  State<InventoryWidget> createState() => _InventoryWidgetState();
}

class _InventoryWidgetState extends State<InventoryWidget> {
  @override
  Widget build(BuildContext context) {
    return Consumer<PlayerModel>(
      builder: (context, player, child) {
        return Container(
          color: const Color.fromARGB(64, 148, 148, 148),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildResourceWidget(widget.player.getFood(), Resource.food.color),
              _buildResourceWidget(widget.player.getGold(), Resource.gold.color),
              _buildResourceWidget(widget.player.getWood(), Resource.wood.color),
              _buildResourceWidget(widget.player.getStone(), Resource.stone.color)
            ],
          ),
        );
      },
    );
  }

  Widget _buildResourceWidget(int amount, Color color) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(Radius.circular(8.0)),
          color: color
        ),
        width: 75,
        height: 40,
        child: Center(child: Text(amount.toString())),
      ),
    );
  }
}
