import 'package:anki/item/inventory/inventory.dart';
import 'package:anki/item/natural_item.dart';
import 'package:anki/item/special_item.dart';
import 'package:test/test.dart';

void main() {
  test('add/use/count/getTypes items in inventory', () {
    Inventory inventory = Inventory();
    expect(inventory.getAllTypes().length, 0);
    expect(inventory.count(NaturalItem.tree), 0);
    inventory.add(NaturalItem.tree);
    expect(inventory.getAllTypes().length, 1);
    expect(inventory.count(NaturalItem.tree), 1);
    inventory.add(NaturalItem.tree);
    expect(inventory.count(NaturalItem.tree), 2);
    inventory.add(NaturalItem.bush);
    expect(inventory.count(NaturalItem.tree), 2);
    expect(inventory.count(NaturalItem.bush), 1);
    expect(inventory.count(SpecialItem.heart), 0);
    inventory.add(SpecialItem.heart);
    expect(inventory.count(SpecialItem.heart), 1);
    expect(inventory.count(NaturalItem.tree), 2);
    expect(inventory.count(NaturalItem.bush), 1);
    inventory.use(NaturalItem.tree);
    expect(inventory.count(NaturalItem.tree), 1);
    inventory.use(NaturalItem.tree);
    expect(inventory.count(NaturalItem.tree), 0);
    inventory.use(NaturalItem.tree);
    expect(inventory.count(NaturalItem.tree), 0);
    expect(inventory.getAllTypes().length, 2);
  });
}
