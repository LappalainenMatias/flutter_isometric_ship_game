import 'package:anki/gameloop/ship_game_input.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

class KeyBoardMovement extends StatelessWidget {
  final Widget child;
  const KeyBoardMovement({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    var shipGameInput = Provider.of<ShipGameInput>(context, listen: false);
    return Focus(
      onFocusChange: (hasFocus) {
        print('hasFocus: $hasFocus');
      },
      child: RawKeyboardListener(
        autofocus: true,
        onKey: (event) {
          if (event is RawKeyDownEvent) {
            shipGameInput.keyDownEvent(event.logicalKey);
          } else if (event is RawKeyUpEvent) {
            shipGameInput.keyUpEvent(event.logicalKey);
          }
        },
        focusNode: FocusNode(),
        child: child,
      ),
    );
  }
}
