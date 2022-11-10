import 'package:anki/map_generator.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'model/map.dart';
import 'widget/board.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => PlayerModel()),
        ChangeNotifierProvider(
            create: (context) => MapGenerator().realisticRandomMap(20, 20)),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
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
            flex: 5,
            child: Board(),
          ),
          Flexible(
            flex: 1,
            child: Column(
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
          )
        ],
      ),
    );
  }
}
