import 'package:anki/game_specific/ship_game.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import '../../gameloop/game_loop.dart';

class Statistics extends StatefulWidget {
  const Statistics({
    super.key,
  });

  @override
  State<Statistics> createState() => _StatisticsState();
}

class _StatisticsState extends State<Statistics> {
  @override
  Widget build(BuildContext context) {
    var gameLoop = Provider.of<GameLoop>(context, listen: true);
    var game = gameLoop.game;
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
            Text(
              "Center: ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoX).replaceAll(',', ' ')}, ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoY).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Zoom: ${game.zoomLevel.toStringAsFixed(3)}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Total regions: ${game.getRegionCount()} Visible: ${game.amountOfVisibleRegions()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Region creation queue: ${game.regionCreationQueueStats()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text("Frames > 16 ms: ${gameLoop.missedFrames}",
                style: const TextStyle(color: Colors.white)),
          ],
        ),
      ),
    );
  }
}
