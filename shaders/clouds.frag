#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform float iTime; // Time variable to enable animation
uniform vec2 uResolution; // The resolution of your canvas
out vec4 fragColor;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 st) {
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

void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1000, 500); // Normalized pixel coordinates

    // Calculate noise value for shadow
    float scale = 10.0; // Scale of the noise
    float n = noise((uv - vec2(0.5)) * scale - iTime * 0.05); // Moving noise pattern

    // Create shadow strength based on noise
    float shadowAlpha = smoothstep(0.6, 0.9, n); // The range where the shadows fall

    // Set shadow color to a dark color, could be any color you want the shadow to be
    vec3 shadowColor = vec3(0.0, 0.0, 0.0); // Black for shadow

    shadowAlpha *= 0.30;

    // Output the shadow color and alpha value
    fragColor = vec4(shadowColor, shadowAlpha);
}
