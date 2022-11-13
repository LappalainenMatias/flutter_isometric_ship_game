import 'package:anki/enum/item.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../model/map.dart';
import '../square.dart';

class Board extends StatefulWidget {
  const Board({super.key});

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(32.0),
        child: Container(width: 300, child: _buildGridView()));
  }

  Widget _buildGridView() {
    var player = Provider.of<PlayerModel>(context, listen: true);
    var map = Provider.of<MapModel>(context, listen: false);
    return GridView.count(
      crossAxisCount: map.width,
      children: map.squares.values
          .map(
            (s) => Container(
              color: s.color,
              child: Stack(
                children: [
                  Center(child: Text(getSquareText(s, player))),
                ],
              ),
            ),
          )
          .toList(),
    );
  }

  String getSquareText(Square s, PlayerModel player) {
    if (s.x == player.x && s.y == player.y) return "P";
    String items = "";
    for (var item in s.items) {
      items = items + item.character();
    }
    return items;
  }
}
