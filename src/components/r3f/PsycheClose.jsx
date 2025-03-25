import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Box3, Vector3 } from 'three';

function Model() {
    const gltf = useLoader(GLTFLoader, '/psyche.glb');
    const groupRef = useRef();

    const centerModel = (object) => {
        const box = new Box3().setFromObject(object);
        const center = new Vector3();
        box.getCenter(center);
        object.position.sub(center);
    };

    if (gltf.scene && !gltf.scene.userData.centered) {
        centerModel(gltf.scene);
        gltf.scene.userData.centered = true;
    }

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={gltf.scene} dispose={null} />
        </group>
    );
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
