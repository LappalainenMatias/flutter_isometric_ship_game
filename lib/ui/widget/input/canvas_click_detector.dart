import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import '../../../gameloop/ship_game_input.dart';

class ClickDetector extends StatelessWidget {
  final Widget child;
  final Size screenSize;

  const ClickDetector({Key? key, required this.child, required this.screenSize})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var shipGameInput = Provider.of<ShipGameInput>(context, listen: false);
    return Listener(
      onPointerDown: (PointerDownEvent event) {
        var screenXPercentage = event.localPosition.dx / screenSize.width;
        var screenYPercentage = event.localPosition.dy / screenSize.height;
        shipGameInput.screenClicked(screenXPercentage, screenYPercentage);
      },
      child: child,
    );
  }
}
