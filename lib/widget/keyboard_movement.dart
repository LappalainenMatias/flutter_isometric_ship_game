import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import '../game.dart';

class KeyBoardMovement extends StatelessWidget {
  final Widget child;
  final activeKeys = <LogicalKeyboardKey>{};
  KeyBoardMovement({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: true);
    return KeyboardListener(
      autofocus: true,
      onKeyEvent: (event) {
        if (event is KeyDownEvent) {
          activeKeys.add(event.logicalKey);
        } else if (event is KeyUpEvent) {
          activeKeys.remove(event.logicalKey);
        }

        double dx = 0.0;
        double dy = 0.0;

        if (activeKeys.contains(LogicalKeyboardKey.keyA)) dx -= 1.0;
        if (activeKeys.contains(LogicalKeyboardKey.keyD)) dx += 1.0;
        if (activeKeys.contains(LogicalKeyboardKey.keyW)) dy += 1.0;
        if (activeKeys.contains(LogicalKeyboardKey.keyS)) dy -= 1.0;

        if (dx != 0.0 || dy != 0.0) {
          game.movePlayer(dx, dy);
        }
      },
      focusNode: FocusNode()..requestFocus(),
      child: child,
    );
  }
}
