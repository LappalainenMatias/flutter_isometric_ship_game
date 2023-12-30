#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform float iTime; // Time variable to enable animation
uniform vec2 uResolution;
out vec4 fragColor;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

float baseNoise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

float noise(vec2 st) {
    float noiseVal = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for(int i = 0; i < 3; i++) {
        noiseVal += amplitude * baseNoise(st * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }

    return noiseVal;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution * vec2(0.5, 1.0); // Normalized pixel coordinates

    // Distort UVs
    uv += noise(uv * 0.1 - iTime * 0.01) * 0.15;

    // Calculate noise value for shadow
    float n = noise(uv * 10.0 - iTime * 0.05); // Moving noise pattern

    // Create shadow strength based on noise
    float shadowAlpha = smoothstep(0.5, 0.8, n); // Adjusted range for shadows

    // Set shadow color to a dark color
    vec3 shadowColor = vec3(0.0, 0.0, 0.0); // Black for shadow
    shadowAlpha *= 0.30;

    // Output the shadow color and alpha value
    fragColor = vec4(shadowColor, shadowAlpha);
}