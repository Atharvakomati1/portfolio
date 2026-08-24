import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      const mouseX = (state.mouse.x * Math.PI) / 10;
      const mouseY = (state.mouse.y * Math.PI) / 10;
      meshRef.current.rotation.x += (mouseY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#06b6d4" 
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </Sphere>
      <Sphere args={[1.3, 32, 32]} scale={1.5}>
        <meshStandardMaterial
          color="#1e1b4b" 
          roughness={0.4}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#22d3ee" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
