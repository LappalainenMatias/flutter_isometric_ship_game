import 'package:anki/character/player.dart';
import 'package:anki/item/special_item.dart';
import 'package:anki/map/square.dart';
import 'package:anki/map/square_type.dart';
import 'package:anki/map/square_visibility.dart';
import 'package:test/test.dart';

void main() {
  test('Collect hearts', () {
    PlayerModel player = PlayerModel(5, 3, 3);
    player.maxHearts = 10;
    Square square = Square(SquareType.grass, 3, 3, SquareVisibility.inView,
        [SpecialItem.heart], null);
    Square square2 =
        Square(SquareType.grass, 3, 4, SquareVisibility.inView, [], null);
    Square square3 = Square(SquareType.grass, 3, 4, SquareVisibility.inView,
        [SpecialItem.heart, SpecialItem.heart], null);
    int startingHearts = player.hearts;
    player.collectItems(square);
    expect(player.hearts, startingHearts + 1);
    player.collectItems(square);
    expect(player.hearts, startingHearts + 1);
    player.collectItems(square2);
    expect(player.hearts, startingHearts + 1);
    player.collectItems(square3);
    expect(player.hearts, startingHearts + 3);
  });

  test('Add food/stone/gold/wood', () {
    PlayerModel player = PlayerModel(5, 3, 3);
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
