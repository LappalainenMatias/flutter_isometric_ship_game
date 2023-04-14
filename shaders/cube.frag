#version 460 core

#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
out vec4 fragColor;

void main() {
    vec2 uv = FlutterFragCoord().xy / iResolution.xy;

    // Isometric transformation
    float ratio = iResolution.x / iResolution.y;
    uv = vec2((uv.x - uv.y * ratio) * 0.5, (uv.x + uv.y * ratio) * 0.5);

    // Background color rgb( 49/255, 169/255, 238/255, 255/255 ) -- 0.192156862745098, 0.6627450980392157, 0.9333333333333333
    vec4 texture_color = vec4(0.192156862745098, 0.6627450980392157, 0.9333333333333333, 1.0);

    vec4 k = vec4(iTime)*0.8;
    k.xy = uv * 10.0;
    float val1 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.5));
    float val2 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.2));
    float val3 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.5));

    // Add some noise for texture
    float noise = sin(uv.x * 50.0) * sin(uv.y * 50.0) * 0.05;

    // Add some edge highlight
    float edge = smoothstep(0.25, 0.26, val1) * 0.6;

    vec4 color = vec4 (pow(min(min(val1, val2), val3), 7.0) * 3.0)+texture_color;
    color.rgb += noise + edge;

    fragColor = color;
}
