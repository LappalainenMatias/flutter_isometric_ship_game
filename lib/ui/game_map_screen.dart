import 'dart:ui' as ui;
import 'package:anki/ui/widget/input/canvas_click_detector.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'package:provider/provider.dart';
import '../gameloop/game_loop.dart';
import 'widget/map_painter.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  @override
  void initState() {
    super.initState();
    _loadTexture();
  }

  ui.Image? textureImage;

  Future<void> _loadTexture() async {
    final textureData = await rootBundle.load('assets/spritesheet.png');
    final bytes = textureData.buffer.asUint8List();
    final codec = await ui.instantiateImageCodec(bytes);
    final frame = await codec.getNextFrame();
    setState(() {
      textureImage = frame.image;
    });
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.sizeOf(context);
    var gameloop = Provider.of<GameLoop>(context, listen: false);
    return textureImage == null
        ? const Center(child: CircularProgressIndicator())
        : LayoutBuilder(
            builder: (context, constraints) {
              gameloop.game.updateScreenAspectRatio(
                  screenSize.width / screenSize.height);
              return SizedBox(
                child: Stack(
                  children: [
                    Align(
                      child: ShaderBuilder(
                        assetKey: 'shaders/regtanglewater.frag',
                        (context, waterShader, child) => ShaderBuilder(
                          assetKey: 'shaders/clouds.frag',
                          (context, shadowShader, child) => ClickDetector(
                            screenSize: screenSize,
                            child: CustomPaint(
                              size: screenSize,
                              willChange: true,
                              painter: GameMapPainter(
                                waterShader,
                                shadowShader,
                                gameloop,
                                gameloop.game,
                                textureImage!,
                              ),
                            ),
                          ),
                          child: const Center(
                            child: CircularProgressIndicator(),
                          ),
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
