import 'package:anki/game.dart';
import 'package:anki/character/player.dart';
import 'package:anki/widget/joystick.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'map/map.dart';
import 'widget/board.dart';
import 'dart:math';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );
  PlayerModel player = PlayerModel(15, const Point(50, 50));
  MapModel map = MapModel(player);
  GameModel game = GameModel(map);
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => player),
        ChangeNotifierProvider(create: (context) => map),
        ChangeNotifierProvider(create: (context) => game),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fishing game',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MainScreen(title: 'Fishing game'),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key, required this.title});

  final String title;

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    var game = Provider.of<GameModel>(context, listen: false);
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: buildAppBar(game),
      body: Stack(
        children: [
          Align(
              alignment: Alignment.bottomLeft,
              child: Board(width: size.width, height: size.height)),
          Align(
            alignment: Alignment.bottomRight,
            child: Padding(
              padding: const EdgeInsets.all(32.0),
              child: JoyStick(
                game: game,
              ),
            ),
          ),
        ],
      ),
    );
  }

  AppBar buildAppBar(GameModel game) {
    return AppBar(
      actions: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: GestureDetector(
            child: const Icon(
              Icons.zoom_out,
              color: Colors.white,
              size: 24.0,
            ),
            onTap: () {
              game.map.zoomOut();
            },
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: GestureDetector(
            child: const Icon(
              Icons.zoom_in,
              color: Colors.white,
              size: 24.0,
            ),
            onTap: () {
              game.map.zoomIn();
            },
          ),
        ),
      ],
    );
  }
}
