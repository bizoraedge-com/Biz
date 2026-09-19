"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import styles from '@/app/(marketing)/page.module.css';

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uDistortion;

  // Simple, highly performant pseudo-noise combining layered sine waves
  float organicNoise(vec3 p, float t) {
      float n = sin(p.x * 2.0 + t) * cos(p.y * 2.0 + t * 0.8) * sin(p.z * 2.0 - t * 0.5);
      float n2 = sin(p.y * 4.0 - t * 1.2) * cos(p.x * 3.0 + t);
      return (n + n2) * 0.5;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Apply slight noise distortion for natural, organic wave movement
    float noise = organicNoise(pos, uTime * 0.5);
    
    // Deform the geometry outward along its normals
    pos += normal * noise * uDistortion;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    // Basic transparent fill
    gl_FragColor = vec4(uColor, uOpacity);
  }
`;

function AnimatedRing({ index, totalRings }: { index: number, totalRings: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const radius = 1.2 + (index * 0.5);
    // Rings are thin line loops effectively, but torus gives normals for distortion
    const tube = 0.015;

    const uniforms = useMemo(() => {
        // Soft white to light blue gradient transitioning outward
        const baseColor = new THREE.Color().lerpColors(
            new THREE.Color('#ffffff'),
            new THREE.Color('#8ab0ff'),
            index / totalRings
        );

        // Bloom target: Make inner rings emissive by multiplying color intensity > 1.0
        // Outer rings stay standard or dim
        const isInner = index < 4;
        if (isInner) {
            baseColor.multiplyScalar(2.0 - (index * 0.2));
        }

        // Outer rings fade out gradually using exponential opacity falloff
        // Inner = 0.8, Outer = 0.02
        const falloff = Math.pow(1 - (index / totalRings), 2);
        const opacity = 0.02 + (falloff * 0.4);

        return {
            uTime: { value: 0 },
            uColor: { value: baseColor },
            uOpacity: { value: opacity },
            uDistortion: { value: 0.15 + (index * 0.01) } // Outer rings deform slightly more
        };
    }, [index, totalRings]);

    useFrame((state) => {
        if (!meshRef.current || !materialRef.current) return;
        const time = state.clock.elapsedTime;

        // Update shader time for vertex noise
        materialRef.current.uniforms.uTime.value = time;

        // Anti-gravity wave ripple propagation (Z-axis offset)
        const waveSpeed = 1.2;
        const propagationPhase = index * 0.35;
        const zOffset = Math.sin(time * waveSpeed - propagationPhase) * 0.4;
        meshRef.current.position.z = zOffset;

        // Subtle Scaling (breathing effect)
        const breathSpeed = 0.6;
        const scaleRipple = Math.sin(time * breathSpeed - propagationPhase * 0.5) * 0.03;
        const finalScale = 1.0 + scaleRipple;
        meshRef.current.scale.set(finalScale, finalScale, finalScale);

        // Slow individual rotation
        meshRef.current.rotation.z -= 0.0005 + (totalRings - index) * 0.0001;
    });

    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[radius, tube, 32, 120]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending} // Enhances the glowing energy feel
            />
        </mesh>
    );
}

function RingSystem() {
    const groupRef = useRef<THREE.Group>(null);
    const totalRings = 14;
    const rings = useMemo(() => Array.from({ length: totalRings }), [totalRings]);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Slow rotation around the center axis for the entire group
        groupRef.current.rotation.z -= 0.001;

        // Parallax movement on mouse interaction
        const targetX = (state.pointer.x * 0.25);
        const targetY = (state.pointer.y * 0.25);

        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.03);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.03);
    });

    return (
        <group ref={groupRef}>
            {rings.map((_, i) => (
                <AnimatedRing key={i} index={i} totalRings={totalRings} />
            ))}

            {/* Intense Glowing Core to feed the PostProcessing Bloom passing through the absolute logo DOM */}
            <mesh position={[0, 0, 0.5]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>

            <EffectComposer>
                <Bloom
                    luminanceThreshold={1.0} // Only bloom elements with color values pushed > 1.0 (inner rings + core)
                    mipmapBlur
                    intensity={2.5}
                />
            </EffectComposer>
        </group>
    );
}

export function EnergyRings() {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '650px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Smooth radial gradient (light gray to soft blue)
            background: 'radial-gradient(circle at center, rgba(235, 240, 245, 0) 0%, rgba(200, 215, 235, 0.3) 100%)',
            borderRadius: '24px',
            overflow: 'visible'
        }}>
            <Canvas
                camera={{ position: [0, 0, 9], fov: 60 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
                gl={{ antialias: false }} // Post-processing handles smoothing, speeds up pipeline
            >
                <ambientLight intensity={1} />
                <RingSystem />
            </Canvas>

            {/* Stable Center HTML Logo */}
            <div style={{
                position: 'absolute',
                zIndex: 10,
                width: '140px',
                height: '140px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 50px rgba(255, 255, 255, 1), 0 10px 40px rgba(0, 51, 102, 0.1)',
                backdropFilter: 'blur(4px)',
                pointerEvents: 'none'
            }}>
                <div className={styles.chevronIconLarge}></div>
            </div>
        </div>
    );
}
