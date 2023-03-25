import 'package:anki/map/square.dart';

abstract class AbstractMap {
  Square getSquare(int x, int y);
}