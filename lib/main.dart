import 'package:anki/widget/joystick.dart';
import 'package:anki/widget/slider.dart';
import 'package:anki/widget/statistics.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import 'package:anki/game.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'package:performance/performance.dart';
import 'package:provider/provider.dart';
import 'game_loop.dart';
import 'game_map_painter.dart';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );

  /// Used for running region creation web worker
  if (kIsWeb) {
    await JsIsolatedWorker().importScripts(['regionworker.js']);
  }

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => Game()),
      ],
      child: const IsometricMapApp(),
    ),
  );
}

class IsometricMapApp extends StatelessWidget {
  const IsometricMapApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Isometric map',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MainScreen(title: 'Isometric map'),
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
  late final GameLoop gameLoop;

  @override
  void initState() {
    super.initState();
    gameLoop = GameLoop(this);
  }

  @override
  void dispose() {
    gameLoop.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Stack(
        children: [
          GameScreen(
            gameLoop: gameLoop,
          ),
          const Align(
            alignment: Alignment.bottomRight,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: ZoomSlider(),
                ),
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: JoyStick(),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class GameScreen extends StatefulWidget {
  const GameScreen({super.key, required this.gameLoop});

  final GameLoop gameLoop;

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    var game = Provider.of<Game>(context, listen: false);
    return LayoutBuilder(
      builder: (context, constraints) {
        game.updateScreenAspectRatio(screenSize.width / screenSize.height);
        return SizedBox(
          child: Stack(
            children: [
              Align(
                child: ShaderBuilder(
                  assetKey: 'shaders/regtanglewater.frag',
                  (context, waterShader, child) => CustomPerformanceOverlay(
                    child: CustomPaint(
                      size: screenSize,
                      painter: GameMapPainter(waterShader, widget.gameLoop, game),
                    ),
                  ),
                  child: const Center(
                    child: CircularProgressIndicator(),
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: Statistics(),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
