#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
out vec4 fragColor;

vec2 rand(vec2 co){
    return fract(sin(vec2(dot(co, vec2(12.9898, 78.233)),
    dot(co, vec2(63.934, 31.42)))) * vec2(43758.5453, 22578.1459));
}

void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = FlutterFragCoord().xy / vec2(1000, 500);

    // Adjust the coordinates to the center
    uv = uv * 2.0 - vec2(1.0);

    // Define the desired angle and calculate the width accordingly
    // We are using a 130 degrees for the bottom and top corners
    // Therefore, we adjust the rotation to 90 + (130/2) = 125 degrees
    // Isometric transformation (rotation + scaling)
    mat2 isoTransform = mat2(cos(radians(45)), sin(radians(45)), -sin(radians(45)), cos(radians(45)));
    uv = isoTransform * uv;

    // Tile size (you can set this as per your requirement)
    vec2 tileSize = vec2(0.01, 0.01);

    // Calculate tile grid position
    vec2 gridPos = floor(uv / tileSize);

    // Define two colors
    vec3 colorA = vec3(23.0 / 255.0, 116.0 / 255.0, 209.0 / 255.0);
    vec3 colorB = vec3(21.0 / 255.0, 109.0 / 255.0, 205.0 / 255.0);

    // Calculate color based on time and grid position
    vec2 r = rand(gridPos);
    float t = (1.0 + sin(iTime * (0.5 + r.x) + r.y)) / 2.0;
    vec3 color = mix(colorA, colorB, t);

    fragColor = vec4(color, 0.85);
}