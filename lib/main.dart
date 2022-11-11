import 'package:anki/map_generator.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'model/map.dart';
import 'widget/board.dart';
import 'enum/actions.dart' as GameAction;

void main() {
  int mapWidth = 8;
  int mapHeight = 8;
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(
            create: (context) => PlayerModel(
                3, (mapWidth / 2).round(), (mapHeight / 2).round())),
        ChangeNotifierProvider(
            create: (context) =>
                MapGenerator().realisticRandomMap(mapWidth, mapHeight)),
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
    player.actions = [GameAction.Action.moveRandomDirection];
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
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
    var player = Provider.of<PlayerModel>(context, listen: false);
    var map = Provider.of<MapModel>(context, listen: false);
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
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
            child: _buildTestingButtons(player, map),
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
        Text("player.visibility = ${player.visibility}"),
        const Text("WHILE NOT gameOver"),
        ...player.actions.map((e) => Text(e.syntax)).toList(),
      ],
    );
  }

  Widget _buildTestingButtons(PlayerModel player, MapModel map) {
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
                    player.doActions(map);
                  },
                  child: const Text("actions")),
            ),
          ),
        ],
      ),
    );
  }
}
