import 'package:anki/character/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../item/inventory/inventory.dart';

class ResourceWidget extends StatefulWidget {
  final PlayerModel player;

  const ResourceWidget({super.key, required this.player});

  @override
  State<ResourceWidget> createState() => _ResourceWidgetState();
}

class _ResourceWidgetState extends State<ResourceWidget> {
  @override
  Widget build(BuildContext context) {
    return Consumer<PlayerModel>(
      builder: (context, player, child) {
        return Container(
          color: const Color.fromARGB(64, 148, 148, 148),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildHearts(player),
              _buildResourceWidget(
                  widget.player.getFood(), Resource.food.color),
              _buildResourceWidget(
                  widget.player.getGold(), Resource.gold.color),
              _buildResourceWidget(
                  widget.player.getWood(), Resource.wood.color),
              _buildResourceWidget(
                  widget.player.getStone(), Resource.stone.color)
            ],
          ),
        );
      },
    );
  }

  Widget _buildHearts(PlayerModel player) => Selector<PlayerModel, int>(
        selector: (_, player) => player.hearts,
        builder: (context, hearts, child) {
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              player.hearts.toString(),
              style: const TextStyle(color: Colors.white),
            ),
          );
        },
      );

  Widget _buildResourceWidget(int amount, Color color) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(8.0)),
            color: color),
        width: 55,
        height: 30,
        child: Center(child: Text(amount.toString())),
      ),
    );
  }
}
