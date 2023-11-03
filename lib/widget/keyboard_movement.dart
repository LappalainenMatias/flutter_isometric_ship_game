import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import '../game.dart';

class KeyBoardMovement extends StatelessWidget {
  final Widget child;
  const KeyBoardMovement({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<Game>(context, listen: true);
    return RawKeyboardListener(
      autofocus: true,
      onKey: (event) {
        if (event is RawKeyDownEvent) {
          game.keyDownEvent(event.logicalKey);
        } else if (event is RawKeyUpEvent) {
          game.keyUpEvent(event.logicalKey);
        }
      },
      focusNode: FocusNode()..requestFocus(),
      child: child,
    );
  }
}
