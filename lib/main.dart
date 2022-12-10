import 'package:anki/action/task.dart';
import 'package:anki/character/character_manager.dart';
import 'package:anki/character/enemy.dart';
import 'package:anki/character/enemy_generator.dart';
import 'package:anki/map/map_generator.dart';
import 'package:anki/game.dart';
import 'package:anki/character/player.dart';
import 'package:anki/map/map_helper.dart';
import 'package:anki/widget/inventory_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_joystick/flutter_joystick.dart';
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
  int simulationSpeedMs = 100;
  MapModel map = MapGenerator().realisticRandomMap(500, 500);
  Point start = findStartingPoint(map);
  PlayerModel player = PlayerModel(10, start.x.toInt(), start.y.toInt());
  player.actions = [Task.cutTrees, Task.cutBushes];
  player.inventoryAddTool(Tool.axe);
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

  @override
  Widget build(BuildContext context) {
    var game = Provider.of<GameModel>(context, listen: false);
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: buildAppBar(game),
      body: Column(
        children: [
          Board(width: width, height: width),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: _buildJoyStick(game),
          ),
          InventoryWidget(player: game.player),
        ],
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
              borderRadius: const BorderRadius.all(Radius.circular(50))),
        ),
        stick: Container(
          width: 50,
          height: 50,
          decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(25))),
        ),
        period: const Duration(milliseconds: 20),
        onStickDragStart: () {
          game.start();
        },
        onStickDragEnd: () {
          game.pause();
        },
        mode: JoystickMode.all,
        listener: (details) {
          game.player.moveJoyStick(details.x, -1 * details.y, game.map);
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
}
