import 'package:anki/enum/item.dart';
import 'package:anki/enum/square_visibility.dart';
import 'package:anki/model/player.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../enemy.dart';
import '../model/game_model.dart';
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
    var game = Provider.of<GameModel>(context, listen: false);
    return GridView.count(
      crossAxisCount: game.map.width,
      children: game.map.squares.values
          .map(
            (s) => Container(
              color: s.color,
              child: Stack(
                children: [
                  Center(child: Text(getSquareText(s, game))),
                ],
              ),
            ),
          )
          .toList(),
    );
  }

  String getSquareText(Square square, GameModel game) {
    String text = "";
    if (square.visibility != SquareVisibility.inView) return text;
    if (isPlayerInSquare(game.player, square)) text += "P";
    for (var enemy in game.enemies) {
      if (isEnemyInSquare(enemy, square)) text += "E";
    }
    for (var item in square.items) {
      text += item.character();
    }
    return text;
  }

  bool isPlayerInSquare(PlayerModel player, Square square) {
    return square.x == player.x && square.y == player.y;
  }

  bool isEnemyInSquare(Enemy enemy, Square square) {
    return square.x == enemy.x && square.y == enemy.y;
  }

}
