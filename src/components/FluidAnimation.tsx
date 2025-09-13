import { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ShaderMaterial, Vector2 } from 'three';

// GLSL code for the shader (unchanged)
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;

  // 2D Noise function by Morgan McGuire @morgan3d
  float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // 2D Fractional Brownian Motion
  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    vec2 q = vec2(0.);
    q.x = fbm(st + 0.10 * uTime);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = fbm(st + r);
    
    vec3 color = mix(vec3(0.05, 0.0, 0.1), // Dark color
                     vec3(0.1, 0.0, 0.2), // Lighter dark color
                     clamp((f * f) * 4.0, 0.0, 1.0));

    color = mix(color,
                vec3(0.0, 0.0, 0.02), // Even darker highlights
                clamp(length(q), 0.0, 1.0));
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const FluidScene = () => {
  // useMemo makes the material object stable across re-renders
  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          uTime: { value: 0.0 },
          uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
        },
        fragmentShader,
        vertexShader,
      }),
    []
  );

  // We can now directly update the stable material object
  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* Use the primitive tag to render the imperative material */}
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const FluidAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas>
        <FluidScene />
      </Canvas>
    </div>
  );
};

export default FluidAnimation;