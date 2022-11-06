import 'package:anki/square_types.dart';
import 'package:flutter/material.dart';
import '../testing_data/test_boards.dart';
import 'dart:math';

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
    var squares = testBoard1;
    var width = sqrt(squares.length).floor();
    return GridView.count(
        crossAxisCount: width,
        children: squares
            .map((item) => Container(
                  color: item.color,
                ))
            .toList());
  }
}
