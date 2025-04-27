
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import { Mesh } from 'three';

// Simple tshirt model placeholder - in production this would be replaced with your actual product model
function TShirtModel() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });
  
  return (
    <mesh ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 2, 0.25]} />
      <meshStandardMaterial color="#222222" metalness={0.2} roughness={0.4} />
      
      {/* Simulating a print on the tshirt */}
      <mesh position={[0, 0.2, 0.13]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.5} transparent opacity={0.9} />
      </mesh>
    </mesh>
  );
}

// Jacket model placeholder
function JacketModel() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3 + 2) * 0.2;
  });
  
  return (
    <mesh ref={meshRef} scale={[1.2, 1.2, 0.6]} position={[2.5, 0, 0]}>
      <boxGeometry args={[1.5, 2, 0.5]} />
      <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

interface ThreeDModelProps {
  className?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ className }) => {
  return (
    <div className={`w-full h-[400px] md:h-[500px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position={[-1.5, 0, 0]} rotation={[0, 0, 0]}>
            <TShirtModel />
            <JacketModel />
          </group>
        </PresentationControls>
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={5} blur={2.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
