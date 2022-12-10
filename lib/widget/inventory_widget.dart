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
        return _buildResources();
      },
    );
  }

  Widget _buildResources() {
    return Row(
      children: [
        Container(
          width: 50,
          height: 25,
          color: Resource.food.color,
          child: Text(widget.player.getFood().toString()),
        ),
        Container(
          width: 50,
          height: 25,
          color: Resource.wood.color,
          child: Text(widget.player.getWood().toString()),
        ),
        Container(
          width: 50,
          height: 25,
          color: Resource.gold.color,
          child: Text(widget.player.getGold().toString()),
        ),
        Container(
          width: 50,
          height: 25,
          color: Resource.stone.color,
          child: Text(widget.player.getStone().toString()),
        ),
      ],
    );
  }
}
