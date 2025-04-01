import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import { MetallicStill } from '../objects/MetallicStill';
import { Mix } from '../objects/Mix';
import { Silicate } from '../objects/Silicate';

const COMPOSITION_STAGES = {
    METALLIC: 0,
    MIX: 1,
    SILICATE: 2,
};

export default function SurfaceCompositionScene() {
    const [compositionStage, setCompositionStage] = useState(
        COMPOSITION_STAGES.METALLIC
    );

    const modelComponents = [
        <MetallicStill key="metallic" position={[0, 0, 0]} scale={[1, 1, 1]} />,
        <Mix key="mix" position={[0, 0, 0]} scale={[1, 1, 1]} />,
        <Silicate key="silicate" position={[0, 0, 0]} scale={[1, 1, 1]} />,
    ];

    const stageNames = ['Metallic', 'Mixed', 'Silicate'];

    const cycleComposition = () => {
        setCompositionStage((prev) => (prev + 1) % 3);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
            <Canvas
                style={{
                    width: '100%',
                    height: '60vh',
                    background: 'black',
                    borderRadius: '8px',
                }}
                camera={{
                    position: [0, 0, 5], // Fixed camera position
                    fov: 50,
                    near: 0.1,
                    far: 1000,
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <directionalLight color="white" position={[0, 0, -5]} />
                    <Stars radius={100} depth={50} count={2000} factor={4} />

                    {modelComponents[compositionStage]}

                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={3}
                        maxDistance={10}
                        target={[0, 0, 0]}
                    />

                    <Html
                        wrapperClass="toggle-button"
                        position={[0, 0, 0]}
                        transform={false}
                        style={{
                            position: 'absolute',
                            right: '-25rem',
                            bottom: '-13rem',
                            zIndex: 10,
                        }}
                    >
                        <button
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-mono"
                            onClick={cycleComposition}
                        >
                            View {stageNames[(compositionStage + 1) % 3]}{' '}
                            Composition
                        </button>
                    </Html>
                </Suspense>
            </Canvas>
        </div>
    );
}
