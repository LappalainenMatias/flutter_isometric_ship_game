import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';

import '../game.dart';

class ClickDetector extends StatelessWidget {
  final Widget child;
  final Size screenSize;

  const ClickDetector({Key? key, required this.child, required this.screenSize})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: false);
    return Listener(
      onPointerDown: (PointerDownEvent event) {
        var screenXPercentage = event.localPosition.dx / screenSize.width;
        var screenYPercentage = event.localPosition.dy / screenSize.height;
        var target = game.getGameCoordinate(screenXPercentage, screenYPercentage);
        game.shootMissile(target);
      },
      child: child,
    );
  }
}
