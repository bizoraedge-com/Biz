"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function Cube() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.elapsedTime;

        // Slow, elegant multi-axis rotation
        meshRef.current.rotation.x = time * 0.15;
        meshRef.current.rotation.y = time * 0.22;

        // Floating effect via subtle sine wave on Y axis
        meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;

        // Parallax movement tilting based on mouse [-1, 1] mapped coordinates
        const pointerX = state.pointer.x * 0.25;
        const pointerY = state.pointer.y * 0.25;

        meshRef.current.rotation.y += pointerX;
        meshRef.current.rotation.x -= pointerY;
    });

    return (
        // Moderately sized cube, slight rounded corners for premium aesthetic
        <RoundedBox
            ref={meshRef}
            args={[3.0, 3.0, 3.0]}
            radius={0.12}
            smoothness={4}
        >
            {/* 
        Premium physical material for Glass: 
        Low Opacity, High Metalness, Refraction transmission
      */}
            <meshPhysicalMaterial
                color="#ffffff"
                metalness={0.75}
                roughness={0.15}
                transparent={true}
                opacity={0.25} // Forced low opacity fallthrough
                transmission={0.9} // Glass-like IOR refraction
                ior={1.45}
                thickness={2.0} // Internal depth tracing
                clearcoat={1.0}
                clearcoatRoughness={0.05}
            />
        </RoundedBox>
    );
}

export function GlassCube() {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Requested soft gradient (light gray to bluish tone)
            background: 'radial-gradient(circle at center, #f4f7fb 0%, #e2eaf4 100%)',
            borderRadius: '24px',
            overflow: 'hidden'
        }}>
            <Canvas
                camera={{ position: [0, 0, 9], fov: 45 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}
            >
                <ambientLight intensity={0.6} />

                {/* Crisp directional lighting for pure glass surface reflections */}
                <directionalLight position={[5, 10, 5]} intensity={1.8} color="#ffffff" />
                <directionalLight position={[-5, -10, -5]} intensity={0.6} color="#a8c0ff" />

                {/* Powerful Point light positioned strictly behind the center to create a physical inner core glow */}
                <pointLight position={[0, 0, -2]} intensity={4.5} color="#60a5fa" distance={15} />

                <Cube />
            </Canvas>
        </div>
    );
}
