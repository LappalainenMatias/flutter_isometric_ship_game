import 'package:anki/game_specific/ship_game.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import '../../gameloop/game_loop.dart';

class ShipGameStatistics extends StatefulWidget {
  const ShipGameStatistics({super.key});

  @override
  State<ShipGameStatistics> createState() => _ShipGameStatisticsState();
}

class _ShipGameStatisticsState extends State<ShipGameStatistics> {
  @override
  Widget build(BuildContext context) {
    var gameLoop = Provider.of<GameLoop>(context, listen: true);
    var game = gameLoop.game as ShipGame;
    return Container(
      color: Colors.black.withOpacity(0.6),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Game objects rendered: ${NumberFormat('###,###,###').format(game.amountOfGameObjectsRendered()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            SelectableText(
              "Camera center: ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoX).replaceAll(',', ' ')}, ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoY).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Camera zoom: ${game.zoomLevel.toStringAsFixed(2)}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Regions total/visible/queue: ${game.getRegionCount()}/${game.amountOfVisibleRegions()}/${game.regionCreationQueueStats()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text("Frames > 16 ms: ${gameLoop.missedFrames}",
                style: const TextStyle(color: Colors.white)),
            Text(
                "Health: ${game.getHealth()}, Shooting speed: ${game.shootingSpeedMS()} ms",
                style: const TextStyle(color: Colors.white)),
            Text("Bullet flight time: ${game.bulletFlightTime()} s",
                style: const TextStyle(color: Colors.white)),
            Text(
                game.goldAnchorsCollected() != 4
                    ? "Gold anchors: ${game.goldAnchorsCollected()} / 4"
                    : "YOU HAVE COLLECTED ALL GOLD ANCHORS!",
                style: const TextStyle(color: Colors.white)),
          ],
        ),
      ),
    );
  }
}
