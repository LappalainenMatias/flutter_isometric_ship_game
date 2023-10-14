import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'package:provider/provider.dart';
import 'game.dart';
import 'game_loop.dart';
import 'game_map_painter.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  @override
  void initState() {
    super.initState();
    loadTexture();
  }

  ui.Image? textureImage;

  Future<void> loadTexture() async {
    final textureData = await rootBundle.load('assets/sprite_sheet.png');
    final bytes = textureData.buffer.asUint8List();
    final codec = await ui.instantiateImageCodec(bytes);
    final frame = await codec.getNextFrame();
    setState(() {
      textureImage = frame.image;
    });
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    var game = Provider.of<Game>(context, listen: false);
    var gameloop = Provider.of<GameLoop>(context, listen: false);
    return textureImage == null
        ? const Center(child: CircularProgressIndicator())
        : LayoutBuilder(
            builder: (context, constraints) {
              game.updateScreenAspectRatio(
                  screenSize.width / screenSize.height);
              return SizedBox(
                child: Stack(
                  children: [
                    Align(
                      child: ShaderBuilder(
                        assetKey: 'shaders/regtanglewater.frag',
                        (context, waterShader, child) => CustomPaint(
                          size: screenSize,
                          willChange: true,
                          painter: GameMapPainter(
                            waterShader,
                            gameloop,
                            game,
                            textureImage!,
                          ),
                        ),
                        child: const Center(
                          child: CircularProgressIndicator(),
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          );
  }
}
