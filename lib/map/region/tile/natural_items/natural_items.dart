import 'package:anki/map/region/tile/natural_items/rock.dart';
import 'package:anki/map/region/tile/natural_items/spruce.dart';

import 'birch.dart';
import 'flower.dart';

enum NaturalItem {
  empty(null),
  spruce(sprucePosAndCol),
  rock(rockPosAndCol),
  birch(birchPosAndCol),
  flower(flowerPosAndCol);

  const NaturalItem(this.getPosAndCol);

  final Function? getPosAndCol;
}
