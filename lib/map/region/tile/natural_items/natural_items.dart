import 'package:anki/map/region/tile/natural_items/rock.dart';
import 'package:anki/map/region/tile/natural_items/spruce.dart';

import 'birch.dart';
import 'flower.dart';

enum NaturalItem {
  empty(null),
  spruce(SpruceCreator.positionsAndColors),
  rock(RockCreator.positionsAndColors),
  birch(BirchCreator.positionsAndColors),
  flower(FlowerCreator.positionsAndColors);

  const NaturalItem(this.positionsAndColors);

  final Function? positionsAndColors;
}
