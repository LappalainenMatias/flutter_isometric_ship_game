import 'package:anki/game_specific/game_object/ship.dart';
import 'package:anki/gameloop/ship_game_input.dart';
import 'package:anki/ui/widget/input/add_opponent.dart';
import 'package:anki/ui/widget/input/joystick.dart';
import 'package:anki/ui/widget/input/keyboard_movement.dart';
import 'package:anki/ui/widget/input/zoom_buttons.dart';
import 'package:anki/ui/widget/ship_game_statistics.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import 'package:provider/provider.dart';
import 'foundation/game.dart';
import 'game_specific/ship_game.dart';
import 'gameloop/game_loop.dart';
import 'package:flutter/services.dart';
import 'ui/game_map_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );

  /// Used for running region terrain creation web worker
  if (kIsWeb) {
    await JsIsolatedWorker().importScripts(['regionworker.js']);
  }

  runApp(ShipGameWidget(
    game: ShipGame(),
  ));
}

class ShipGameWidget extends StatefulWidget {
  final ShipGame game;

  const ShipGameWidget({super.key, required this.game});

  @override
  State<ShipGameWidget> createState() => _ShipGameWidgetState();
}

class _ShipGameWidgetState extends State<ShipGameWidget>
    with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => GameLoop(this, widget.game)),
        ChangeNotifierProvider(create: (_) => ShipGameInput(widget.game)),
      ],
      child: MaterialApp(
        title: 'Isometric map',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const MainScreen(title: 'Isometric map'),
      ),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key, required this.title});

  final String title;

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return const Material(
      child: Stack(
        children: [
          GameScreen(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Align(
              alignment: Alignment.topLeft,
              child: ShipGameStatistics(),
            ),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: ZoomButtons(),
                ),
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: JoyStick(),
                ),
              ],
            ),
          ),
          Align(
            alignment: Alignment.bottomLeft,
            child: Padding(
              padding: EdgeInsets.all(8.0),
              child: AddOpponent(),
            ),
          ),
        ],
      ),
    );
  }
}
