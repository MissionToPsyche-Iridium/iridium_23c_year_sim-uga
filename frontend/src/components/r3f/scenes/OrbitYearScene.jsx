import * as THREE from 'three';
import { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Stars, Html } from '@react-three/drei';
import MetallicRotatingPlain from '../objects/MetallicRotatingPlain';

// Astronomical Unit scale: 1 AU = 10 scene units
const AU_SCALE = 10;
const SUN_RADIUS = 1.5;

function Sun() {
    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[SUN_RADIUS, 32, 32]} />
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

function PlanetOrbit({
    name,
    semiMajorAxisAU,
    eccentricity,
    inclinationDeg,
    orbitalPeriodYears,
    color,
    planetColor,
    planetSize,
    speedFactor,
    setElapsedTime,
}) {
    const planetRef = useRef();
    const semiMajorAxis = semiMajorAxisAU * AU_SCALE;
    const inclination = THREE.MathUtils.degToRad(inclinationDeg);

    useFrame((state) => {
        if (!planetRef.current) return;

        const rawTime = state.clock.getElapsedTime();
        const time = rawTime * speedFactor;
        const meanAnomaly = (time / orbitalPeriodYears) * Math.PI * 2;

        if (name === 'Psyche') {
            setElapsedTime(rawTime);
        }

        // Calculate true anomaly using Kepler's equation approximation
        const eccentricAnomaly =
            meanAnomaly + eccentricity * Math.sin(meanAnomaly);
        const trueAnomaly =
            2 *
            Math.atan2(
                Math.sqrt(1 + eccentricity) * Math.sin(eccentricAnomaly / 2),
                Math.sqrt(1 - eccentricity) * Math.cos(eccentricAnomaly / 2)
            );

        // Calculate position
        const distance =
            (semiMajorAxis * (1 - eccentricity ** 2)) /
            (1 + eccentricity * Math.cos(trueAnomaly));
        const x = distance * Math.cos(trueAnomaly);
        const z = distance * Math.sin(trueAnomaly) * Math.cos(inclination);
        const y = distance * Math.sin(trueAnomaly) * Math.sin(inclination);

        planetRef.current.position.set(x, y, z);
    });

    const orbitPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i <= 100; i++) {
            const angle = (i / 100) * Math.PI * 2;
            const eccentricAnomaly = angle;
            const trueAnomaly =
                2 *
                Math.atan2(
                    Math.sqrt(1 + eccentricity) *
                        Math.sin(eccentricAnomaly / 2),
                    Math.sqrt(1 - eccentricity) * Math.cos(eccentricAnomaly / 2)
                );
            const distance =
                (semiMajorAxis * (1 - eccentricity ** 2)) /
                (1 + eccentricity * Math.cos(trueAnomaly));

            const x = distance * Math.cos(trueAnomaly);
            const z = distance * Math.sin(trueAnomaly) * Math.cos(inclination);
            const y = distance * Math.sin(trueAnomaly) * Math.sin(inclination);

            points.push(new THREE.Vector3(x, y, z));
        }
        return points;
    }, []);

    return (
        <group>
            <Line
                points={orbitPoints}
                color={color}
                lineWidth={0.5}
                dashed={name === 'Asteroid Belt'}
            />
            <group ref={planetRef}>
                {name === 'Psyche' ? (
                    <MetallicRotatingPlain scale={[0.5, 0.5, 0.5]} />
                ) : (
                    <mesh>
                        <sphereGeometry args={[planetSize, 16, 16]} />
                        <meshPhongMaterial color={planetColor} />
                    </mesh>
                )}
            </group>
        </group>
    );
}

function AsteroidBelt({ speedFactor }) {
    const count = 5000;
    const radius = 2.7 * AU_SCALE;
    const thickness = 0.5 * AU_SCALE;

    const meshRef = useRef();
    const { positions, scales, angles } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const scl = new Float32Array(count);
        const ang = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Random orbital parameters
            const orbitRadius = radius * (0.8 + Math.random() * 0.4);
            const angle = Math.random() * Math.PI * 2;
            const height = (Math.random() - 0.5) * thickness;

            pos[i * 3] = Math.cos(angle) * orbitRadius;
            pos[i * 3 + 1] = height;
            pos[i * 3 + 2] = Math.sin(angle) * orbitRadius;

            scl[i] = 0.03 + Math.random() * 0.05;
            ang[i] = Math.random() * Math.PI * 2;
        }

        return { positions: pos, scales: scl, angles: ang };
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3();
        const quaternion = new THREE.Quaternion();
        const scale = new THREE.Vector3();

        const orbitalPeriod = 4.5;

        for (let i = 0; i < count; i++) {
            // Get initial values from arrays
            const x = positions[i * 3];
            const y = positions[i * 3 + 1];
            const z = positions[i * 3 + 2];
            const orbitRadius = Math.sqrt(x ** 2 + z ** 2);
            const angle =
                Math.atan2(z, x) +
                ((time * speedFactor) / orbitalPeriod) * Math.PI * 2;

            // Calculate new position
            position.set(
                Math.cos(angle) * orbitRadius,
                y,
                Math.sin(angle) * orbitRadius
            );

            // Set rotation and scale
            quaternion.setFromEuler(
                new THREE.Euler(0, angles[i] + time * speedFactor * 0.5, 0)
            );
            scale.setScalar(scales[i]);

            // Update instance matrix
            matrix.compose(position, quaternion, scale);
            meshRef.current.setMatrixAt(i, matrix);
        }

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, count]}
            frustumCulled={false}
        >
            <sphereGeometry args={[1, 6, 6]} />
            <meshPhongMaterial
                color="#777777"
                emissive="#444444"
                shininess={50}
            />
        </instancedMesh>
    );
}

function ControlsPanel({ elapsedTime, speedFactor, setSpeedFactor }) {
    const earthYears = (elapsedTime * speedFactor).toFixed(2);
    const psycheYears = (earthYears / 4.9).toFixed(3);

    return (
        <Html
            position={[0, 0, 0]}
            transform={false}
            style={{
                pointerEvents: 'none',
                position: 'absolute',
                bottom: '-235px',
                right: '-400px',
                width: 'auto',
                height: 'auto',
            }}
        >
            <div className="text-white font-mono p-4 bg-black bg-opacity-50 rounded-lg space-y-3 min-w-[220px]">
                <div className="space-y-2">
                    <div className="text-sm text-gray-400">
                        Simulation Speed
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min="0.1"
                            max="10"
                            step="0.1"
                            value={speedFactor}
                            onChange={(e) =>
                                setSpeedFactor(parseFloat(e.target.value))
                            }
                            className="w-32 accent-amber-400"
                            style={{ pointerEvents: 'auto' }}
                            onPointerDown={(e) => e.stopPropagation()}
                            onPointerUp={(e) => e.stopPropagation()}
                            onPointerMove={(e) => e.stopPropagation()}
                        />
                        <div className="text-sm w-12">
                            {speedFactor.toFixed(1)}x
                        </div>
                    </div>
                </div>
                <div className="pt-2 border-t border-gray-700">
                    <div className="text-lg font-bold">
                        Earth Years: {earthYears}
                    </div>
                    <div className="text-lg font-bold text-amber-400">
                        Psyche Years: {psycheYears}
                    </div>
                </div>
            </div>
        </Html>
    );
}

export default function OrbitYearScene() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [speedFactor, setSpeedFactor] = useState(1);

    const planets = [
        {
            name: 'Mercury',
            semiMajorAxisAU: 0.387,
            eccentricity: 0.2056,
            inclinationDeg: 7.0,
            orbitalPeriodYears: 0.2408,
            color: '#888888',
            planetColor: '#A0522D',
            planetSize: 0.3,
        },
        {
            name: 'Venus',
            semiMajorAxisAU: 0.723,
            eccentricity: 0.0068,
            inclinationDeg: 3.4,
            orbitalPeriodYears: 0.6152,
            color: '#DEB887',
            planetColor: '#CD853F',
            planetSize: 0.35,
        },
        {
            name: 'Earth',
            semiMajorAxisAU: 1.0,
            eccentricity: 0.0167,
            inclinationDeg: 0.0,
            orbitalPeriodYears: 1.0,
            color: '#4169E1',
            planetColor: '#228B22',
            planetSize: 0.4,
        },
        {
            name: 'Mars',
            semiMajorAxisAU: 1.524,
            eccentricity: 0.0934,
            inclinationDeg: 1.8,
            orbitalPeriodYears: 1.8808,
            color: '#CD5C5C',
            planetColor: '#8B4513',
            planetSize: 0.35,
        },
        {
            name: 'Jupiter',
            semiMajorAxisAU: 5.203,
            eccentricity: 0.0489,
            inclinationDeg: 1.3,
            orbitalPeriodYears: 11.862,
            color: '#DAA520',
            planetColor: '#CD853F',
            planetSize: 0.8,
        },
        {
            name: 'Saturn',
            semiMajorAxisAU: 9.537,
            eccentricity: 0.0565,
            inclinationDeg: 2.5,
            orbitalPeriodYears: 29.457,
            color: '#F4A460',
            planetColor: '#DEB887',
            planetSize: 0.7,
        },
        {
            name: 'Uranus',
            semiMajorAxisAU: 19.191,
            eccentricity: 0.0472,
            inclinationDeg: 0.8,
            orbitalPeriodYears: 84.011,
            color: '#87CEEB',
            planetColor: '#AFEEEE',
            planetSize: 0.5,
        },
        {
            name: 'Neptune',
            semiMajorAxisAU: 30.069,
            eccentricity: 0.0086,
            inclinationDeg: 1.8,
            orbitalPeriodYears: 164.79,
            color: '#4682B4',
            planetColor: '#4169E1',
            planetSize: 0.45,
        },
        {
            name: 'Psyche',
            semiMajorAxisAU: 2.92,
            eccentricity: 0.14,
            inclinationDeg: 3.0,
            orbitalPeriodYears: 4.9,
            color: '#666666',
            planetColor: '#B8860B',
            planetSize: 0.3,
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
            <Canvas
                style={{
                    width: '100%',
                    height: '60vh',
                    background: 'black',
                    borderRadius: '8px',
                }}
                camera={{ position: [0, 50, 80], fov: 45 }}
            >
                <ambientLight intensity={3} />
                <pointLight position={[0, 0, 0]} intensity={2} />
                <Suspense fallback={null}>
                    <Stars radius={500} depth={100} count={5000} factor={4} />
                    <Sun />
                    <AsteroidBelt speedFactor={speedFactor} />

                    {planets.map((planet) => (
                        <PlanetOrbit
                            key={planet.name}
                            {...planet}
                            speedFactor={speedFactor}
                            setElapsedTime={
                                planet.name === 'Psyche'
                                    ? setElapsedTime
                                    : undefined
                            }
                        />
                    ))}

                    <ControlsPanel
                        elapsedTime={elapsedTime}
                        speedFactor={speedFactor}
                        setSpeedFactor={setSpeedFactor}
                    />

                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={10}
                        maxDistance={500}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
