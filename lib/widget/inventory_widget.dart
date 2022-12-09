import 'package:anki/character/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../item/inventory/inventory.dart';
import '../item/item.dart';

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
        return Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            for (Item item in player.inventoryGetAllTypes()) inventoryItem(item)
          ],
        );
      },
    );
  }

  Widget inventoryItem(Item item) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
            color: item.color,
            borderRadius: const BorderRadius.all(Radius.circular(10))),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(item.name.toString()),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(widget.player.inventoryCount(item).toString()),
            ),
          ],
        ),
      ),
    );
  }
}
