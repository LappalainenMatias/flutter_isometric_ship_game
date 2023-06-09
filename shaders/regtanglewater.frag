#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform float iTime;
uniform vec2 iResolution;
out vec4 fragColor;

vec2 rand(vec2 co){
    return fract(sin(vec2(dot(co, vec2(12.9898, 78.233)),
    dot(co, vec2(63.934, 31.42)))) * vec2(43758.5453, 22578.1459));
}


void main() {
    vec2 uv =  FlutterFragCoord().xy / vec2(1000, 1000 / 2);

    uv = uv * 2.0 - vec2(1.0);

    mat2 isoTransform = mat2(cos(radians(45)), sin(radians(45)), -sin(radians(45)), cos(radians(45)));
    uv = isoTransform * uv;

    // Tile size (you can set this as per your requirement)
    vec2 tileSize = vec2(0.01, 0.01);

    // Calculate tile grid position
    vec2 gridPos = floor(uv / tileSize);

    // Define two colors
    float diff = 1.04;
    vec4 colorA = vec4(7.0 * diff / 255.0, 95.0 * diff / 255.0, 187.0 * diff / 255.0, 180.0 * diff / 255.0);
    vec4 colorB = vec4(7.0 / 255.0, 95.0 / 255.0, 187.0 / 255.0, 180.0 / 255.0);

    // Calculate color based on time and grid position
    vec2 r = rand(gridPos);
    float t = (1.0 + sin(iTime * (0.5 + r.x) + r.y));
    fragColor = mix(colorB, colorA, t);
}