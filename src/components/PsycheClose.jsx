import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

function Model() {
    const gltf = useLoader(GLTFLoader, '/psyche.glb');
    return <primitive object={gltf.scene} dispose={null} />;
}

function PsycheClose() {
    return (
        <div
            id="canvas-container"
            style={{ width: '100vw', height: '100vh', background: 'black' }}
        >
            <Canvas style={{ background: 'black' }}>
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[0, 0, 5]} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default PsycheClose;
