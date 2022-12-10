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
}
