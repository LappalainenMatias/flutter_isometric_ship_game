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
  double _zoomLevel = 0.5;

  @override
  Widget build(BuildContext context) {
    var map = Provider.of<MapModel>(context, listen: false);
    Size size = MediaQuery.of(context).size;
    return Material(
      child: Stack(
        children: [
          MapScreen(width: size.width, height: size.height),
          Align(
            alignment: Alignment.bottomCenter,
            child: SizedBox(
              height: 50,
              width: 250,
              child: Slider(
                min: 0,
                max: 1,
                value: _zoomLevel,
                activeColor: Colors.red,
                inactiveColor: Colors.black.withOpacity(0.3),
                onChanged: (zoomLevel) {
                  setState(() {
                    _zoomLevel = zoomLevel;
                    map.setZoomLevel(_zoomLevel);
                  });
                },
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
      ),
    );
  }
}
