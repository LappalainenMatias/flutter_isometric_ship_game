import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../game.dart';

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
    final game = Game();
    return Container(
      color: Colors.black.withOpacity(0.6),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Vertices: ${NumberFormat('###,###,###').format(game.getVerticesInView()).replaceAll(',', ' ')}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Top left: ${game.viewTopLeft.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Bottom right: ${game.viewBottomRight.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Center: ${game.viewCenter.toString()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Size: ${game.viewWidth.toInt()} x ${game.viewHeight.toInt()}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Zoom: ${game.zoomLevel.toStringAsFixed(2)}",
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              "Visible region size: ${game.amountOfVisibleRegions()}",
              style: const TextStyle(color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}
