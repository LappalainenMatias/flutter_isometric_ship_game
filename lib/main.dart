import 'package:anki/widget/joystick.dart';
import 'package:anki/widget/slider.dart';
import 'package:flutter/material.dart';
import 'package:isolated_worker/js_isolated_worker.dart';
import 'package:provider/provider.dart';
import 'map/map.dart';
import 'map_screen.dart';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );
  await JsIsolatedWorker().importScripts(['myworker.js']);
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => MapModel()),
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

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return const Material(
      child: Stack(
        children: [
          MapScreen(),
          Align(
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
