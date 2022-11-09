import 'package:flutter/cupertino.dart';

import '../square.dart';

class MapModel extends ChangeNotifier {
  var width = 0;
  var height = 0;
  List<Square> squares = [];

  MapModel(this.width, this.height, this.squares);
}