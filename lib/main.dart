import 'package:anki/character/character_manager.dart';
import 'package:anki/character/enemy.dart';
import 'package:anki/character/enemy_generator.dart';
import 'package:anki/map/map_generator.dart';
import 'package:anki/game.dart';
import 'package:anki/character/player.dart';
import 'package:anki/map/map_helper.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'map/map.dart';
import 'widget/board.dart';
import 'character/task.dart';
import 'dart:math';

void main() {
  int mapWidth = 500;
  int mapHeight = 500;
  int simulationSpeedMs = 100;
  MapModel map = MapGenerator().realisticRandomMap(mapWidth, mapHeight);
  Point start = findStartingPoint(map);
  PlayerModel player = PlayerModel(10, start.x.toInt(), start.y.toInt());
  player.actions = [Task.moveTowardItem, Task.moveRandomDirection];
  List<Enemy> enemies = getEnemies(map, 0.002);
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
      body: SingleChildScrollView(
        child: Column(
          children: [
            Board(width: width, height: width),
            //_buildProgramSyntax(),
            _buildTestingButtons(),
          ],
        ),
      ),
    );
  }

  AppBar buildAppBar(GameModel game) {
    return AppBar(
      actions: [
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
      title: Consumer<PlayerModel>(
        builder: (context, cart, child) {
          return Text("hearts = ${game.player.hearts}");
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

  Widget _buildTestingButtons() {
    var game = Provider.of<GameModel>(context, listen: false);
    var player = game.player;
    var map = game.map;
    return Padding(
      padding: const EdgeInsets.only(top: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                      onPressed: () {
                        player.moveUp(map);
                      },
                      child: const Text("U"))
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                      onPressed: () {
                        player.moveLeft(map);
                      },
                      child: const Text("L")),
                  ElevatedButton(
                      onPressed: () {
                        player.moveDown(map);
                      },
                      child: const Text("D")),
                  ElevatedButton(
                      onPressed: () {
                        player.moveRight(map);
                      },
                      child: const Text("R")),
                ],
              ),
            ],
          ),
          Align(
            alignment: Alignment.topCenter,
            child: Padding(
              padding: const EdgeInsets.only(left: 16.0),
              child: ElevatedButton(
                onPressed: () {
                  if (game.paused) {
                    game.start();
                  } else {
                    game.pause();
                  }
                },
                child: Consumer<GameModel>(
                  builder: (context, cart, child) {
                    return Text(game.paused ? "paused" : "running");
                  },
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
