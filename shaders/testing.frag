#include <flutter/runtime_effect.glsl>

precision mediump float;
out vec4 fragColor;

void main() {
    vec2 position = FlutterFragCoord().xy;
    vec3 shallowWaterColor = vec3(0.0, 0.3, 0.6);
    vec3 deepWaterColor = vec3(0.0, 0.2, 0.4);
    float maxDepth = 20.0; // Example value, adjust based on your scene

    // Calculate a depth factor based on the y-coordinate
    // Assuming the top of the screen is shallower and the bottom is deeper
    float depthFactor = position.y / maxDepth;

    // Ensure that depth factor is clamped between 0 and 1
    depthFactor = clamp(depthFactor, 0.0, 1.0);

    // Interpolate between shallow and deep water colors based on depth factor
    vec3 waterColor = mix(shallowWaterColor, deepWaterColor, depthFactor);

    // Interpolate alpha value to be more transparent for shallow water
    // and less transparent for deeper water
    float alpha = mix(0.7, 0.9, depthFactor); // More transparent for shallow, less for deep

    fragColor = vec4(waterColor, alpha);
}
