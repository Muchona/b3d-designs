import { useRef } from 'react';
import { PerspectiveCamera, Float, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Experience() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1; // Slow rotation
        }
    });

    return (
        <>
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
            <spotLight position={[-5, 5, 0]} intensity={1} angle={0.5} penumbra={1} />

            {/* Abstract Geometry Group */}
            <group ref={groupRef}>
                <Float
                    speed={1.5} // Animation speed
                    rotationIntensity={0.5} // XYZ rotation intensity
                    floatIntensity={0.5} // Up/down float intensity
                >
                    {/* Main Crystal/Block */}
                    <mesh position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshPhysicalMaterial
                            color="#ffffff"
                            roughness={0.1}
                            metalness={0.1}
                            transmission={0.6} // Glass-like
                            thickness={1}
                            ior={1.5}
                            clearcoat={1}
                            clearcoatRoughness={0.1}
                        />
                    </mesh>

                    {/* Floating Accent Cubes */}
                    <mesh position={[1.5, 1.5, 1]} rotation={[0.2, 0.2, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
                    </mesh>

                    <mesh position={[-1.2, -1, 0.5]} rotation={[0.1, 0.4, 0]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial color="#a5b4fc" />
                    </mesh>
                </Float>
            </group>

            {/* Shadows */}
            <ContactShadows
                position={[0, -2.5, 0]}
                opacity={0.4}
                scale={10}
                blur={2.5}
                far={4}
            />

            {/* Environment Reflection */}
            <Environment preset="city" />
        </>
    );
}
