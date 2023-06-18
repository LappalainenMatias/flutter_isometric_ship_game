/// We use this because Color is part of dart:ui which cannot be used concurrently
class CustomColor {
  final int a, r, g, b;

  const CustomColor.fromARGB(this.a, this.r, this.g, this.b);

  int get value {
    return (a << 24) | (r << 16) | (g << 8) | b;
  }

  double get normalizedA => a / 255.0;
  double get normalizedR => r / 255.0;
  double get normalizedG => g / 255.0;
  double get normalizedB => b / 255.0;

  static CustomColor fromNormalizedARGB(double a, double r, double g, double b) {
    return CustomColor.fromARGB(
      (a * 255).round(),
      (r * 255).round(),
      (g * 255).round(),
      (b * 255).round(),
    );
  }
}