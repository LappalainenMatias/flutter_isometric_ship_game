#version 460 core

#include <flutter/runtime_effect.glsl>

precision mediump float;

uniform vec2 resolution;
uniform float alpha;
out vec4 fragColor;

vec3 flutterBlue = vec3(5, 83, 177) / 255;

void main() {
    vec2 st = FlutterFragCoord().xy / resolution.xy;

    vec3 color = vec3(0.0);
    vec3 percent = vec3((st.x + st.y) / 2);

    fragColor = vec4(flutterBlue, alpha);
}