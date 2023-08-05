import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  @override
  void initState() {
    super.initState();
    loadTexture();
  }

  ui.Image? textureImage;

  Future<void> loadTexture() async {
    final textureData = await rootBundle.load('assets/texture.png');
    final bytes = textureData.buffer.asUint8List();
    final codec = await ui.instantiateImageCodec(bytes);
    final frame = await codec.getNextFrame();
    setState(() {
      textureImage = frame.image;
    });
  }

  @override
  Widget build(BuildContext context) {
    return textureImage != null
        ? CustomPaint(
      painter: TexturePainter(textureImage: textureImage!),
      child: Container(),
    )
        : Center(child: CircularProgressIndicator());
  }
}


class TexturePainter extends CustomPainter {
  ui.Image textureImage;
  TexturePainter({required this.textureImage});

  @override
  void paint(Canvas canvas, Size size) {
    var paint = Paint();
    paint.shader = ImageShader(
      textureImage,
      TileMode.repeated,
      TileMode.repeated,
      Matrix4.identity().storage,
    );

    final vertices = ui.Vertices(
      VertexMode.triangleStrip,
      [
        Offset(0, 0),
        Offset(size.width, 0),
        Offset(0, size.height),
        Offset(size.width, size.height),
      ],
      textureCoordinates: [
        Offset(0, 0),
        Offset(1, 0),
        Offset(0, 1),
        Offset(1, 1),
      ].map((offset) => Offset(offset.dx * textureImage.width, offset.dy * textureImage.height)).toList(),
    );

    canvas.drawVertices(vertices, BlendMode.src, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return false;
  }
}