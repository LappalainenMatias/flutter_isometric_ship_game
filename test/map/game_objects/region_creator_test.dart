import 'package:anki/map/region/region_creator.dart';
import 'package:anki/utils/iso_coordinate.dart';
import 'package:test/test.dart';

void main() {
  test('Create region', () {
    RegionCreator regionCreator = RegionCreator();
    RegionDTO dto = regionCreator.create(const IsoCoordinate.fromIso(1, 1), 64, 64, 0, 0);
    expect(dto.regionCoordinate, const IsoCoordinate.fromIso(1, 1));
  });
}
