import 'package:anki/item/inventory/inventory.dart';
import 'package:anki/item/natural_item.dart';
import 'package:anki/item/special_item.dart';
import 'package:anki/item/tool.dart';
import 'package:test/test.dart';

void main() {
  test('add/use/count/getTypes items in inventory', () {
    Inventory inventory = Inventory();
    expect(inventory.getItemTypes().length, 0);
    expect(inventory.countItem(NaturalItem.tree), 0);
    inventory.addItem(NaturalItem.tree);
    expect(inventory.getItemTypes().length, 1);
    expect(inventory.countItem(NaturalItem.tree), 1);
    inventory.addItem(NaturalItem.tree);
    expect(inventory.countItem(NaturalItem.tree), 2);
    inventory.addItem(NaturalItem.bush);
    expect(inventory.countItem(NaturalItem.tree), 2);
    expect(inventory.countItem(NaturalItem.bush), 1);
    expect(inventory.countItem(SpecialItem.heart), 0);
    inventory.addItem(SpecialItem.heart);
    expect(inventory.countItem(SpecialItem.heart), 1);
    expect(inventory.countItem(NaturalItem.tree), 2);
    expect(inventory.countItem(NaturalItem.bush), 1);
    inventory.useItem(NaturalItem.tree);
    expect(inventory.countItem(NaturalItem.tree), 1);
    inventory.useItem(NaturalItem.tree);
    expect(inventory.countItem(NaturalItem.tree), 0);
    inventory.useItem(NaturalItem.tree);
    expect(inventory.countItem(NaturalItem.tree), 0);
    expect(inventory.getItemTypes().length, 2);
  });

  test('add/remove/get tools in inventory', () {
    Inventory inventory = Inventory();
    expect(inventory.getTools().length, 0);
    inventory.addTool(Tool.axe);
    inventory.addTool(Tool.axe);
    expect(inventory.getTools().first, Tool.axe);
    expect(inventory.getTools().length, 1);
    inventory.removeTool(Tool.axe);
    expect(inventory.getTools().length, 0);
  });
}
