import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';

import '../../../gameloop/game_loop.dart';

class ClickDetector extends StatelessWidget {
  final Widget child;
  final Size screenSize;

  const ClickDetector({Key? key, required this.child, required this.screenSize})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var gameloop = Provider.of<GameLoop>(context, listen: false);
    return Listener(
      onPointerDown: (PointerDownEvent event) {
        var screenXPercentage = event.localPosition.dx / screenSize.width;
        var screenYPercentage = event.localPosition.dy / screenSize.height;
        var target = gameloop.game.getGameCoordinate(screenXPercentage, screenYPercentage);
        gameloop.game.shootCannonball(target);
      },
      child: child,
    );
  }
}
