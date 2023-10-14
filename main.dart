import 'dart:math';

void main() {
  List<List> values = [];
  Random firstRandom = Random();
  for (int i = 0; i < 1000; i++) {
    Random random = Random();
    int max = firstRandom.nextInt(1000000);
    var list = <int>[];
    for (int i = 0; i < 1000; i++) {
      list.add(random.nextInt(max));
    }
    var amounts = [0,0,0,0,0,0,0,0,0,0];
    for (int value in list) {
      var first = value.toString()[0];
      amounts[int.parse(first)]++;
    }
    values.add(amounts);
  }
  List totals = [0,0,0,0,0,0,0,0,0,0];
  for (var value in values) {
    for (int i = 0; i < 10; i++) {
      totals[i] += value[i];
    }
  }
  print(totals);
}