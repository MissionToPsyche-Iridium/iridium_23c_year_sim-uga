import { Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { MetallicStill } from '../objects/MetallicStill';
import { Spacecraft } from '../objects/Spacecraft';
import SkyBox from '../objects/Skybox';

function CameraController({ showSpacecraft }) {
    const { camera, controls } = useThree();

    camera.position.set(showSpacecraft ? 2 : 0, 0, showSpacecraft ? 0 : 4);

    controls?.update();
    camera.updateProjectionMatrix();

    return null;
}

export default function StillScene() {
    const [showSpacecraft, setShowSpacecraft] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
            <Canvas
                style={{
                    width: '100%',
                    height: '60vh',
                    background: 'black',
                    borderRadius: '8px',
                }}
                camera={{ fov: 50 }}
            >
                <Suspense fallback={null}>
                    {/* Add CameraController inside Canvas */}
                    <CameraController showSpacecraft={showSpacecraft} />

                    <ambientLight intensity={1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <directionalLight color="white" position={[0, 0, -5]} />
                    <SkyBox />

                    {showSpacecraft ? <Spacecraft /> : <MetallicStill />}

                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        maxDistance={showSpacecraft ? 4 : 10}
                        minDistance={showSpacecraft ? 1.5 : 3}
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
                            onClick={() => setShowSpacecraft(!showSpacecraft)}
                        >
                            {showSpacecraft
                                ? 'View Asteroid'
                                : 'View Spacecraft'}
                        </button>
                    </Html>
                </Suspense>
            </Canvas>
        </div>
    );
}
