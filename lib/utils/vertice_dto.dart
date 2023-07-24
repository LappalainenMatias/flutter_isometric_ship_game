
class VerticeDTO {
  List<double> positions = [];
  List<int> colors = [];

  VerticeDTO(this.positions, this.colors);

  factory VerticeDTO.empty() => VerticeDTO([], []);

  void add(List<double> positions, List<int> colors) {
    this.positions.addAll(positions);
    this.colors.addAll(colors);
  }

  void addVerticeDTO(VerticeDTO verticeDTO) {
    positions.addAll(verticeDTO.positions);
    colors.addAll(verticeDTO.colors);
  }

  bool isEmpty() {
    return positions.isEmpty && colors.isEmpty;
  }

  int verticesCount () {
    return positions.length ~/ 2;
  }
}
