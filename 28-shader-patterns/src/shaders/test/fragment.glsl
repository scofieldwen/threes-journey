varying vec2 vUv;

void main()
{
    // 依次注释每行得到不同图案
    // float strength = vUv.x;
    // float strength = vUv.y;
    // float strength = 1.0 - vUv.y;
    float strength = vUv.y * 10.0;

    gl_FragColor = vec4(vec3(strength), 1.0);
}