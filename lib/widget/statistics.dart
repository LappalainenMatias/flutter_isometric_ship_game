import 'package:anki/game.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import '../game_loop.dart';

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
              "Visible cubes: ${NumberFormat('###,###,###').format(game.amountOfGameObjects()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Center: ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoX).replaceAll(',', ' ')}, ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoY).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Size: ${NumberFormat('###,###,###,###,###').format(game.viewWidth.toInt()).replaceAll(',', ' ')} x ${NumberFormat('###,###,###,###,###').format(game.viewHeight.toInt()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Zoom: ${game.zoomLevel.toStringAsFixed(6)}, Level: ${game.getLOD().index}",
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
          ],
        ),
      ),
    );
  }
}
