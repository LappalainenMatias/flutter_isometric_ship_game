import 'package:anki/widget/joystick.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'map/map.dart';
import 'map_screen.dart';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations(
    [DeviceOrientation.portraitUp],
  );
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
      title: 'Flying game',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MainScreen(title: 'Flying game'),
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
    var map = Provider.of<MapModel>(context, listen: false);
    Size size = MediaQuery.of(context).size;
    return Stack(
      children: [
        MapScreen(width: size.width, height: size.height),
        Align(
          alignment: Alignment.bottomLeft,
          child: Padding(
            padding: const EdgeInsets.all(32.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                GestureDetector(
                  child: const Icon(
                    Icons.zoom_in,
                    color: Colors.white,
                    size: 36.0,
                  ),
                  onTap: () {
                    map.zoomIn();
                  },
                ),
                GestureDetector(
                  child: const Icon(
                    Icons.zoom_out,
                    color: Colors.white,
                    size: 36.0,
                  ),
                  onTap: () {
                    map.zoomOut();
                  },
                ),
              ],
            ),
          ),
        ),
        const Align(
          alignment: Alignment.bottomRight,
          child: Padding(
            padding: EdgeInsets.all(32.0),
            child: JoyStick(),
          ),
        ),
      ],
    );
  }
}
