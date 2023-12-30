import 'dart:ui' as ui;
import 'package:anki/gameloop/game_loop.dart';
import 'package:anki/ui/widget/input/canvas_click_detector.dart';
import 'package:anki/ui/widget/input/dialog_movement_option.dart';
import 'package:anki/ui/widget/input/keyboard_movement.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import 'package:provider/provider.dart';
import '../gameloop/ship_game_input.dart';
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
    _loadShipGameSpriteSheet();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return const SelectMovementOption();
        },
      );
    });
  }

  ui.Image? _spritesheetShipGame;

  Future<void> _loadShipGameSpriteSheet() async {
    final textureData = await rootBundle.load('assets/spritesheet.png');
    final bytes = textureData.buffer.asUint8List();
    final codec = await ui.instantiateImageCodec(bytes);
    final frame = await codec.getNextFrame();
    setState(() {
      _spritesheetShipGame = frame.image;
    });
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.sizeOf(context);
    var aspectRatio = screenSize.aspectRatio;
    var shipGameInput = Provider.of<ShipGameInput>(context, listen: false);
    var gameloop = Provider.of<GameLoop>(context, listen: false);
    return _spritesheetShipGame == null
        ? const Center(
            child: CircularProgressIndicator(),
          )
        : LayoutBuilder(
            builder: (context, constraints) {
              shipGameInput.aspectRatioChange(aspectRatio);
              return Container(
                color: Colors.blue[800]!,
                child: ShaderBuilder(
                  assetKey: 'shaders/regtanglewater.frag',
                  (context, waterShader, child) => ShaderBuilder(
                    assetKey: 'shaders/clouds.frag',
                    (context, shadowShader, child) => KeyBoardMovement(
                      child: ClickDetector(
                        screenSize: screenSize,
                        child: CustomPaint(
                          size: screenSize,
                          willChange: true,
                          painter: GameMapPainter(
                            waterShader,
                            shadowShader,
                            gameloop,
                            _spritesheetShipGame!,
                          ),
                        ),
                      ),
                    ),
                    child: const Center(
                      child: CircularProgressIndicator(),
                    ),
                  ),
                ),
              );
            },
          );
  }
}
