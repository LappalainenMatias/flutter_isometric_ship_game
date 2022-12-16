import 'package:anki/action/task.dart';
import 'package:anki/character/character_manager.dart';
import 'package:anki/game.dart';
import 'package:anki/character/player.dart';
import 'package:anki/widget/resourse_widget.dart';
import 'package:anki/widget/joystick.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'item/tool.dart';
import 'map/map.dart';
import 'widget/board.dart';
import 'dart:math';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );
  PlayerModel player = PlayerModel(15);
  player.actions = [Task.cutPlant];
  player.inventoryAddTool(Tool.axe);
  //List<Enemy> enemies = getEnemies(map, 0.002);
  MapModel map = MapModel(player, const Point(10, 10));
  CharacterManager characterManager = CharacterManager(map, player, [], 100);
  GameModel game = GameModel(map, characterManager);
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
      title: 'Survival game',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Survival'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    var game = Provider.of<GameModel>(context, listen: false);
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: buildAppBar(game),
      body: Stack(
        children: [
          Align(
              alignment: Alignment.topCenter,
              child: Board(width: width, height: width)),
          Align(
            alignment: Alignment.topCenter,
            child: ResourceWidget(player: game.map.player),
          ),
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
          padding: const EdgeInsets.only(left: 16.0),
          child: Consumer<GameModel>(
            builder: (context, cart, child) {
              return Text(game.paused ? "paused" : "running");
            },
          ),
        ),
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
