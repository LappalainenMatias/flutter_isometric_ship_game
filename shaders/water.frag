precision mediump float;

uniform float iTime; // Time variable, should be passed from your application

out vec4 fragColor;

void main()
{
    // Reduced resolution for pixel art effect
    vec2 pixelSize = vec2(10.0, 10.0); // Size of the pixels in the pixel art
    vec2 reducedResolution = vec2(10, 5) / pixelSize;

    // Normalized pixel coordinates (from 0 to 1) with pixelation
    vec2 uv = floor(gl_FragCoord.xy / pixelSize) / reducedResolution;

    // Time varying pixel color
    vec3 col = vec3(0.0);

    // Simpler and subtler water effect using sine wave
    float wave = sin(uv.y * 4.0 + iTime * 0.5) * 0.1; // Horizontal wave
    wave += 0.1; // Adding a base value to keep the colors visible

    // Base water color
    vec3 waterColor = vec3(0.1, 0.3, 0.5);

    // Apply the wave effect
    col = waterColor + wave;

    // Output to screen
    fragColor = vec4(col, 1.0);
}
