import 'package:anki/square_types.dart';
import 'package:flutter/material.dart';
import '../map_generator.dart';

class Board extends StatefulWidget {
  const Board({super.key});

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(32.0), child: _buildGridView());
  }

  Widget _buildGridView() {
    var map = MapGenerator().generateRandomMap(20, 20);
    return GridView.count(
        crossAxisCount: map.width,
        children: map.squares
            .map((item) => Container(
                  color: item.type.color,
                ))
            .toList());
  }
}
