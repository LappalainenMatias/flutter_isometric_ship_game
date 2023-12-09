import 'package:anki/game.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import '../game_loop.dart';
import '../online/online.dart';

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
    var online = Provider.of<Online>(context, listen: true);
    return Container(
      color: Colors.black.withOpacity(0.6),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Cubes in screen: ${NumberFormat('###,###,###').format(game.amountOfGameObjects()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Cubes rendered: ${NumberFormat('###,###,###').format(game.amountOfGameObjectsRendered()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Center: ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoX).replaceAll(',', ' ')}, ${NumberFormat('###,###,###,###,###').format(game.viewCenter.isoY).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            //Text(
            //  "Size: ${NumberFormat('###,###,###,###,###').format(game.viewWidth.toInt()).replaceAll(',', ' ')} x ${NumberFormat('###,###,###,###,###').format(game.viewHeight.toInt()).replaceAll(',', ' ')}",
            //  style: const TextStyle(color: Colors.white),
            //),
            Text(
              "Zoom: ${game.zoomLevel.toStringAsFixed(6)}",
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
            Text("Missed frames: ${gameLoop.missedFrames}",
                style: const TextStyle(color: Colors.white)),
            Text("Connection: ${online.connectionStatus.toString()}",
                style: TextStyle(
                    color: online.connectionStatus == ConnectionStatus.connected
                        ? Colors.white
                        : Colors.red)),
          ],
        ),
      ),
    );
  }
}
