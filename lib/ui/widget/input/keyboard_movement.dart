import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import '../../../gameloop/game_loop.dart';

class KeyBoardMovement extends StatelessWidget {
  final Widget child;
  const KeyBoardMovement({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    var gameloop = Provider.of<GameLoop>(context, listen: true);
    return RawKeyboardListener(
      autofocus: true,
      onKey: (event) {
        if (event is RawKeyDownEvent) {
          gameloop.game.keyDownEvent(event.logicalKey);
        } else if (event is RawKeyUpEvent) {
          gameloop.game.keyUpEvent(event.logicalKey);
        }
      },
      focusNode: FocusNode(),
      child: child,
    );
  }
}
