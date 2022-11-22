import 'package:anki/character_manager.dart';
import 'package:anki/enemy.dart';
import 'package:anki/map_generator.dart';
import 'package:anki/model/game_model.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'enum/weapon.dart';
import 'model/map.dart';
import 'widget/board.dart';
import 'enum/task.dart';

void main() {
  int mapWidth = 20;
  int mapHeight = 20;
  PlayerModel player = PlayerModel(
      5, (mapWidth / 2).round(), (mapHeight / 2).round());
  MapModel map = MapGenerator().realisticRandomMap(mapWidth, mapHeight);
  List<Enemy> enemies = [
    Enemy(5, 5, 1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection]),
    Enemy(10, 5, 1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection]),
    Enemy(15, 3, 1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection]),
    Enemy(15, 4, 1, 3, 3, Weapon.basicSword, [Task.moveRandomDirection])
  ];
  CharacterManager characterManager = CharacterManager(map, player, enemies, 500);
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
    var player = Provider.of<PlayerModel>(context, listen: false);
    player.actions = [
      Task.moveTowardItem,
      Task.moveRandomDirection
    ];
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
    return Scaffold(
      appBar: AppBar(
        title: Consumer<PlayerModel>(
          builder: (context, cart, child) {
            return Text("hearts = ${game.player.hearts}");
          },
        ),
      ),
      body: Column(
        children: [
          const Flexible(
            flex: 3,
            child: Board(),
          ),
          _buildProgramSyntax(),
          Flexible(
            flex: 1,
            child: _buildTestingButtons(),
          ),
        ],
      ),
    );
  }

  Widget _buildProgramSyntax() {
    var player = Provider.of<PlayerModel>(context, listen: false);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("player.maxHearts = ${player.maxHearts}"),
        Text("player.visibility = ${player.visibility}"),
        const Text("WHILE NOT gameOver"),
        ...player.actions.map((e) => Text(e.syntax)).toList(),
      ],
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
                        map.updateSquareVisibility(player);
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
                        map.updateSquareVisibility(player);
                      },
                      child: const Text("L")),
                  ElevatedButton(
                      onPressed: () {
                        player.moveDown(map);
                        map.updateSquareVisibility(player);
                      },
                      child: const Text("D")),
                  ElevatedButton(
                      onPressed: () {
                        player.moveRight(map);
                        map.updateSquareVisibility(player);
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
