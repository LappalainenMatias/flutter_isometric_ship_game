import 'package:anki/character/player.dart';
import 'package:anki/map/creation/square.dart';
import 'package:anki/map/creation/type.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  test('Do not increase hearts if square does not have them', () {
    PlayerModel player = PlayerModel(5, const Point(0, 0));
    player.maxHearts = 10;
    player.hearts = 1;
    Square square = Square(Type.grass);
    Square square2 = Square(Type.grass);
    player.collectItems(square);
    expect(player.hearts, 2);
    player.collectItems(square2);
    expect(player.hearts, 2);
  });

  test('Collect hearts from square only ones', () {
    PlayerModel player = PlayerModel(5, const Point(0, 0));
    player.maxHearts = 10;
    player.hearts = 1;
    Square square = Square(Type.grass);
    player.collectItems(square);
    expect(player.hearts, 2);
    player.collectItems(square);
    expect(player.hearts, 2);
  });

  test('Add food/stone/gold/wood', () {
    PlayerModel player = PlayerModel(5, const Point(0, 0));
    expect(player.getWood(), 0);
    expect(player.getFood(), 0);
    expect(player.getStone(), 0);
    expect(player.getGold(), 0);
    player.addWood(10);
    player.addFood(20);
    player.addGold(30);
    player.addStone(40);
    expect(player.getWood(), 10);
    expect(player.getFood(), 20);
    expect(player.getGold(), 30);
    expect(player.getStone(), 40);
    player.reduceWood(1);
    player.reduceFood(2);
    player.reduceGold(3);
    player.reduceStone(4);
    expect(player.getWood(), 9);
    expect(player.getFood(), 18);
    expect(player.getGold(), 27);
    expect(player.getStone(), 36);
  });
}
