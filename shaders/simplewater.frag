#include <flutter/runtime_effect.glsl>

precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
out vec4 fragColor;

void main()
{
    vec2 uv = FlutterFragCoord().xy / iResolution.xy;
    float ratio = iResolution.x / iResolution.y;
    uv = vec2((uv.x - uv.y * ratio) * 0.5, (uv.x + uv.y * ratio) * 0.5);

    //background texture
    //vec4 texture_color = texture(iChannel0, uv);

    //background color rgb( 49/255, 169/255, 238/255, 255/255 ) -- 0.192156862745098, 0.6627450980392157, 0.9333333333333333
    vec4 texture_color = vec4(0.035, 0.369, 0.725, 1.00);

    vec4 k = vec4(iTime)*0.8;
    k.xy = uv * 100.0;
    float val1 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.5));
    float val2 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.2));
    float val3 = length(0.5-fract(k.xyw*=mat3(vec3(-2.0, -1.0, 0.0), vec3(3.0, -1.0, 1.0), vec3(1.0, -1.0, -1.0))*0.5));

    float alpha = 0.95; // Set your desired alpha value between 0.0 and 1.0
    vec3 rgbColor = (pow(min(min(val1, val2), val3), 7.0) * 1.0) + texture_color.rgb;
    fragColor = vec4(rgbColor, alpha);
}