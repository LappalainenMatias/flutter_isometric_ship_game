import 'dart:typed_data';

class VerticeDTO {
  Float32List positions;
  Int32List colors;
  Float32List textures;

  VerticeDTO(this.positions, this.colors, this.textures);
}
