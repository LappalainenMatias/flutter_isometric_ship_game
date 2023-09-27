import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../game.dart';

class ZoomButtons extends StatefulWidget {
  const ZoomButtons({Key? key}) : super(key: key);

  @override
  State<ZoomButtons> createState() => _ZoomButtonsState();
}

class _ZoomButtonsState extends State<ZoomButtons> {
  Timer? _timer;
  ZoomDirection _zoomDirection = ZoomDirection.zoomIn;

  void _startZooming() {
    _timer = Timer.periodic(const Duration(milliseconds: 16), (timer) {
      if (_zoomDirection == ZoomDirection.zoomOut) {
        Provider.of<Game>(context, listen: false).zoomOut();
      } else if (_zoomDirection == ZoomDirection.zoomIn) {
        Provider.of<Game>(context, listen: false).zoomIn();
      }
    });
  }

  void _stopZooming() {
    _timer?.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        GestureDetector(
          onTapDown: (details) => {
            _zoomDirection = ZoomDirection.zoomIn,
            _startZooming(),
          },
          onTapUp: (details) => _stopZooming(),
          onTapCancel: () => _stopZooming(),
          child: ElevatedButton(
            onPressed: () {},
            child: const Text('Zoom in'),
          ),
        ),
        GestureDetector(
          onTapDown: (details) => {
            _zoomDirection = ZoomDirection.zoomOut,
            _startZooming(),
          },
          onTapUp: (details) => _stopZooming(),
          onTapCancel: () => _stopZooming(),
          child: ElevatedButton(
            onPressed: () {},
            child: const Text('Zoom out'),
          ),
        ),
      ],
    );
  }
}

enum ZoomDirection { zoomIn, zoomOut }