import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line, useGLTF } from '@react-three/drei';
import MetallicRotating from '../objects/MetallicRotating';
import Skybox from '../objects/Skybox';

export default function ShapeRotationScene() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
            <Canvas
                style={{
                    width: '100%',
                    height: '60vh',
                    background: 'black',
                    borderRadius: '8px',
                }}
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <ambientLight intensity={1} />
                <directionalLight color="white" position={[0, 0, 5]} />
                <directionalLight color="white" position={[0, 0, -5]} />

                <Suspense fallback={null}>
                    <MetallicRotating />

                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={4}
                        maxDistance={10}
                    />
                    <Skybox></Skybox>
                </Suspense>
            </Canvas>
        </div>
    );
}
