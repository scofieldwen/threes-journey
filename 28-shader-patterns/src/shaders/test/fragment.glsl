varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main()
{
    // 依次注释每行得到不同图案
    // float strength = vUv.x;
    // float strength = vUv.y;
    // float strength = 1.0 - vUv.y;
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);
    // strength = step(0.8, strength);

    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);
    
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = barX + barY;

    // float strength = abs(vUv.x - 0.5);

    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // float strength = floor(vUv.x * 10.0) / 10.0;

    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;

    // float strength = random(vUv);

    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);

    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0);
    // float strength = random(gridUv);

    // float strength = length(vUv);

    float strength = distance(vUv, vec2(0.5));

    gl_FragColor = vec4(vec3(strength), 1.0);
}