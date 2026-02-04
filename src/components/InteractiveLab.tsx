import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

function ProceduralHouse() {
    return (
        <group position={[0, -1, 0]}>
            {/* Main Structure - White Concrete */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[4, 3, 3]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>

            {/* Second Floor - Offset */}
            <mesh position={[1, 3.5, 0.5]}>
                <boxGeometry args={[3, 2.5, 3.5]} />
                <meshStandardMaterial color="#f0f0f0" roughness={0.2} />
            </mesh>

            {/* Wood Accent Panel */}
            <mesh position={[-1.5, 1.5, 1.55]}>
                <boxGeometry args={[1, 2.8, 0.1]} />
                <meshStandardMaterial color="#8B4513" roughness={0.8} />
            </mesh>

            {/* Glass Window */}
            <mesh position={[1, 3.5, 2.3]}>
                <boxGeometry args={[2, 1.5, 0.1]} />
                <meshPhysicalMaterial
                    color="#88ccff"
                    metalness={0.1}
                    roughness={0}
                    transmission={0.5}
                    thickness={0.5}
                />
            </mesh>

            {/* Base Platform */}
            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#333" roughness={0.8} />
            </mesh>
        </group>
    );
}

export default function InteractiveLab() {
    return (
        <section id="lab" className="h-auto md:h-screen w-full bg-gray-50 relative flex flex-col md:flex-row">
            {/* 3D Canvas Area */}
            <div className="w-full md:w-2/3 h-[60vh] md:h-full relative touch-pan-y">
                <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <Environment preset="city" />

                    <ProceduralHouse />

                    <ContactShadows position={[0, -1.1, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                    <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                </Canvas>

                {/* Instructional Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-lg pointer-events-none">
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Left Click to Rotate</p>
                </div>
            </div>

            {/* Sidebar Info */}
            <div className="w-full md:w-1/3 p-12 flex flex-col justify-center bg-white border-l border-gray-100">
                <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4">Interactive Blueprint</span>
                <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">Virtual <br />Exploration.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                    Experience the space before the first brick is laid. Our real-time rendering technology allows for complete immersion into the architectural vision.
                </p>

                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Total Area</span>
                        <span className="text-sm font-mono text-gray-900">2,450 sq ft</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Orientation</span>
                        <span className="text-sm font-mono text-gray-900">South-West</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Est. Build</span>
                        <span className="text-sm font-mono text-gray-900">12 Months</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
