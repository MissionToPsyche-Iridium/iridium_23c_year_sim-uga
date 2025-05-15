import { useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

export default function MetallicRotating() {
    const meshRef = useRef();
    const { nodes } = useGLTF('/iridium_23c_year_sim-uga/psyche-metallic.glb');

    // Adjusted rotation speed (4.196 hours per rotation)
    useFrame((state, delta) => {
        meshRef.current.rotation.z -= delta * (Math.PI / (4.196 * 3600)) * 2000;
    });

    return (
        <group ref={meshRef}>
            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
            {/* Dimension Lines */}
            <group>
                {/* Width (X-axis) */}
                <Line
                    points={[
                        [-1.39, 0, 0],
                        [1.39, 0, 0],
                    ]}
                    color="#ff4444"
                    lineWidth={2}
                />
                <Html position={[1.45, 0, 0]}>
                    <div className="bg-gray-800 bg-opacity-75 p-2 rounded text-white text-xs font-mono">
                        278 km (Width)
                    </div>
                </Html>

                {/* Length (Y-axis) */}
                <Line
                    points={[
                        [0, -1.19, 0],
                        [0, 1.19, 0],
                    ]}
                    color="#44ff44"
                    lineWidth={2}
                />
                <Html position={[0, 1.25, 0]}>
                    <div className="bg-gray-800 bg-opacity-75 p-2 rounded text-white text-xs font-mono">
                        238 km (Length)
                    </div>
                </Html>

                {/* Height (Z-axis) */}
                <Line
                    points={[
                        [0, 0, -0.855],
                        [0, 0, 0.855],
                    ]}
                    color="#4444ff"
                    lineWidth={2}
                />
                <Html position={[0, 0, 0.9]}>
                    <div className="bg-gray-800 bg-opacity-75 p-2 rounded text-white text-xs font-mono">
                        171 km (Height)
                    </div>
                </Html>
            </group>
        </group>
    );
}
