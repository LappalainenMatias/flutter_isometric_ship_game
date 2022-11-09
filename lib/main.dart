import 'package:anki/map_generator.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'widgets/board.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => PlayerModel()),
        ChangeNotifierProvider(
            create: (context) => MapGenerator().generateRandomMap(10, 10)),
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
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: [
          Flexible(
            child: const Board(),
            flex: 5,
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
                          player.y = player.y - 1;
                        },
                        child: Text("U"))
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ElevatedButton(
                        onPressed: () {
                          player.x = player.x - 1;
                        },
                        child: Text("L")),
                    ElevatedButton(
                        onPressed: () {
                          player.y = player.y + 1;
                        },
                        child: Text("D")),
                    ElevatedButton(
                        onPressed: () {
                          player.x = player.x + 1;
                        },
                        child: Text("R")),
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
