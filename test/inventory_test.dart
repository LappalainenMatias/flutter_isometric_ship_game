import 'package:anki/item/inventory/inventory.dart';
import 'package:anki/item/natural_item.dart';
import 'package:anki/item/special_item.dart';
import 'package:anki/item/tool.dart';
import 'package:test/test.dart';

void main() {
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

  test('add/remove/get resource in inventory', () {
    Inventory inventory = Inventory();
    expect(inventory.getResource(Resource.food), 0);
    inventory.addResource(Resource.food, 10);
    expect(inventory.getResource(Resource.food), 10);
    inventory.addResource(Resource.wood, 20);
    expect(inventory.getResource(Resource.wood), 20);
    inventory.reduceResource(Resource.wood, 15);
    expect(inventory.getResource(Resource.wood), 5);
    inventory.reduceResource(Resource.wood, 10);
    expect(inventory.getResource(Resource.wood), 0);
  });
}
