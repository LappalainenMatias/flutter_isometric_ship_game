import 'package:anki/character/character_manager.dart';
import 'package:anki/character/enemy.dart';
import 'package:anki/character/enemy_generator.dart';
import 'package:anki/map/map_generator.dart';
import 'package:anki/game.dart';
import 'package:anki/character/player.dart';
import 'package:anki/map/map_helper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_joystick/flutter_joystick.dart';
import 'package:provider/provider.dart';
import 'map/map.dart';
import 'widget/board.dart';
import 'character/task.dart';
import 'dart:math';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );
  int mapWidth = 500;
  int mapHeight = 500;
  int simulationSpeedMs = 100;
  MapModel map = MapGenerator().realisticRandomMap(mapWidth, mapHeight);
  Point start = findStartingPoint(map);
  PlayerModel player = PlayerModel(10, start.x.toInt(), start.y.toInt());
  player.actions = [];
  Map<Point, Enemy> enemies = getEnemies(map, 0.002);
  CharacterManager characterManager =
      CharacterManager(map, player, enemies, simulationSpeedMs);
  GameModel game = GameModel(map, player, enemies, characterManager);
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
  Duration _period = Duration(milliseconds: 20);

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<GameModel>(context, listen: false);
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: buildAppBar(game),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Board(width: width, height: width),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _buildJoyStick(game),
            ),
            //_buildProgramSyntax(),
            //_buildTestingButtons(),
          ],
        ),
      ),
    );
  }

  SizedBox _buildJoyStick(GameModel game) {
    return SizedBox(
      width: 100,
      height: 100,
      child: Joystick(
        base: Container(
          decoration: BoxDecoration(
              color: Colors.black.withAlpha(60),
              borderRadius: BorderRadius.all(Radius.circular(50))),
        ),
        stick: Container(
          width: 50,
          height: 50,
          decoration: BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(25))),
        ),
        period: _period,
        onStickDragStart: () {
          game.start();
        },
        onStickDragEnd: () {
          game.pause();
        },
        mode: JoystickMode.all,
        listener: (details) {
          game.player.moveXY(details.x, -1 * details.y, game.map);
        },
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
        GestureDetector(
          child: const Icon(
            Icons.zoom_out,
            color: Colors.white,
            size: 24.0,
          ),
          onTap: () {
            game.zoomOut();
          },
        ),
        GestureDetector(
          child: const Icon(
            Icons.zoom_in,
            color: Colors.white,
            size: 24.0,
          ),
          onTap: () {
            game.zoomIn();
          },
        ),
      ],
      title: Selector<PlayerModel, int>(
        selector: (_, player) => player.hearts,
        builder: (context, hearts, child) {
          return Text("hearts = $hearts");
        },
      ),
    );
  }

  Widget _buildProgramSyntax() {
    var player = Provider.of<PlayerModel>(context, listen: false);
    return Padding(
      padding: const EdgeInsets.all(32.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text("player.maxHearts = ${player.maxHearts}"),
          Text("player.visibility = ${player.visibility}"),
          const Text("WHILE NOT gameOver"),
          ...player.actions.map((e) => Text(e.syntax)).toList(),
        ],
      ),
    );
  }
}
