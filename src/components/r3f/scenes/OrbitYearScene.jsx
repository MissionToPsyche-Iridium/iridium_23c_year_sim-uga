import * as THREE from 'three';
import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Stars } from '@react-three/drei';
import { MetallicStill } from '../objects/MetallicStill';

function Sun() {
    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#ff9933" />
            <pointLight
                color="#ffffff"
                intensity={1.5}
                distance={50}
                decay={1}
            />
        </mesh>
    );
}

function PsycheOrbit() {
    const orbitRef = useRef();
    const psycheRef = useRef();

    // Psyche orbital parameters (scaled down)
    const semiMajorAxis = 8; // 2.92 AU scaled to scene units
    const eccentricity = 0.14; // Actual Psyche eccentricity
    const inclination = Math.PI / 60; // ~3 degrees

    const orbitalPeriod = 4.9; // Earth years (actual Psyche orbital period)
    const speedFactor = 20; // Speed up animation

    useFrame((state, delta) => {
        if (!psycheRef.current) return;

        // Calculate orbital position
        const time = state.clock.getElapsedTime() * speedFactor;
        const angle = (time / orbitalPeriod) * Math.PI * 2;

        // Calculate position with eccentricity and inclination
        const x = semiMajorAxis * Math.cos(angle);
        const z = semiMajorAxis * Math.sin(angle) * (1 - eccentricity);
        const y = Math.sin(angle) * semiMajorAxis * Math.sin(inclination);

        psycheRef.current.position.set(x, y, z);
        psycheRef.current.rotation.y += delta * 0.5;
    });

    // Generate orbital path
    const orbitPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            const x = semiMajorAxis * Math.cos(angle);
            const z = semiMajorAxis * Math.sin(angle) * (1 - eccentricity);
            const y = Math.sin(angle) * semiMajorAxis * Math.sin(inclination);
            points.push(new THREE.Vector3(x, y, z));
        }
        return points;
    }, []);

    return (
        <group>
            {/* Orbital path */}
            <Line
                points={orbitPoints}
                color="#666666"
                lineWidth={1}
                dashed={true}
            />

            {/* Psyche model */}
            <group ref={psycheRef}>
                <MetallicStill scale={[0.3, 0.3, 0.3]} />
            </group>
        </group>
    );
}

export default function OrbitYearScene() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
            <Canvas
                style={{
                    width: '100%',
                    height: '60vh',
                    background: 'black',
                    borderRadius: '8px',
                }}
                camera={{ position: [0, 20, 25], fov: 45 }}
            >
                <ambientLight intensity={2} />
                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={2000} factor={4} />

                    <Sun />
                    <PsycheOrbit />

                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={10}
                        maxDistance={50}
                    />

                    <gridHelper args={[30, 30]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
